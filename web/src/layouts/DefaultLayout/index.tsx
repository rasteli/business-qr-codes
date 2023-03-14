import { Outlet } from "react-router-dom"

export function DefaultLayout() {
  return (
    <div className="border-2 border-[#303033] rounded-lg p-4 w-96 bg-[#202024]">
      <Outlet />
    </div>
  )
}
