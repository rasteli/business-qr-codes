import { useLocation, useSearchParams } from "react-router-dom"

export function About() {
  // pathname is the URL path, beginning with a slash, for example: /about.
  // pathname.split("/")[1] will return the second part of the URL path, for example: about.
  // decodeURIComponent is used to decode the pathname, because it can contain URL encoded characters like %20.
  const { pathname } = useLocation()
  const resource = decodeURIComponent(pathname.split("/")[1])

  // These are query parameters
  const [searchParams] = useSearchParams()
  const github = searchParams.get("github") || ""
  const linkedin = searchParams.get("linkedin") || ""

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 text-gray-100">
        Hello, my name is {resource}
      </h1>

      <h2 className="text-xl font-bold mb-2 text-gray-100">My history</h2>

      <p className="text-gray-300 leading-7 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, itaque
        aliquam commodi nesciunt porro dignissimos fugit quo fugiat sint placeat
        quaerat libero, numquam alias reprehenderit esse similique nostrum
        possimus tenetur.
      </p>

      <div className="flex gap-5 mt-4 items-center">
        <a
          href={github}
          className="rounded border-violet-500 border-2 px-8 py-2 text-gray-200 hover:bg-violet-500 transition-all font-semibold"
        >
          GitHub
        </a>
        <a
          href={linkedin}
          className="rounded border-violet-500 border-2 px-8 py-2 text-gray-200 hover:bg-violet-500 transition-all font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
