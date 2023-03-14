import * as Form from "@radix-ui/react-form"

interface FormItemProps {
  label: string
  missingMessage: string
  type?: string
}

export function FormItem({
  label,
  missingMessage,
  type = "text"
}: FormItemProps) {
  return (
    <>
      <div className="flex gap-3 items-center justify-between mb-1">
        <Form.Label htmlFor={label} className="text-gray-400 font-semibold">
          {label}
        </Form.Label>
        <Form.Message match="valueMissing" className="text-sm text-red-400">
          {missingMessage}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          type={type}
          id={label}
          required
          className="w-full outline-none bg-[#121214] text-white rounded px-3 py-2 focus:ring focus:ring-violet-500"
        />
      </Form.Control>
    </>
  )
}
