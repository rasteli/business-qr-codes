import { ThreeDots } from "react-loader-spinner"

export function Loading() {
  return (
    <ThreeDots
      height="24"
      width="24"
      color="#fff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}
