import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { About } from "./pages/About"
import { Generate } from "./pages/Generate"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Generate />} />
          <Route path="/:id" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
