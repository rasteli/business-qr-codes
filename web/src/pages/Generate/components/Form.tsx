import { FormEvent, useRef, useState } from "react"
import * as RadixForm from "@radix-ui/react-form"

import { FormItem } from "./FormItem"
import { api } from "../../../lib/axios"
import { Loading } from "./Loading"

export function Form() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setLoading(true)
    // This is an uncontrolled component, so I'm grabbing the data from the form
    // when I need them, that is, when the user clicks on the "Generate Image" button.
    const formData = new FormData(formRef.current!)

    try {
      const response = await api.post("/generate", {
        name: formData.get("name"),
        linkedinURL: formData.get("linkedin"),
        githubURL: formData.get("github")
      })

      // The code below is used to download the QR code image automatically
      // after a successful response from the API is received.
      const imageURL = response.data.code.replace(
        "image/png",
        "image/octet-stream"
      )

      location.href = imageURL
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <RadixForm.Root
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col gap-3"
    >
      <RadixForm.Field name="name">
        <FormItem label="Name" missingMessage="Please, enter your name" />
      </RadixForm.Field>
      <RadixForm.Field name="linkedin">
        <FormItem
          label="LinkedIn URL"
          missingMessage="Please, enter your LinkedIn URL"
          type="url"
        />
      </RadixForm.Field>
      <RadixForm.Field name="github">
        <FormItem
          label="GitHub URL"
          missingMessage="Please, enter your GitHub URL"
          type="url"
        />
      </RadixForm.Field>
      <RadixForm.Submit asChild>
        <button
          disabled={loading}
          className="flex items-center justify-center bg-violet-500 text-white rounded p-2 hover:bg-violet-400 focus:ring focus:ring-violet-500 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loading /> : <span>Generate Image</span>}
        </button>
      </RadixForm.Submit>
    </RadixForm.Root>
  )
}
