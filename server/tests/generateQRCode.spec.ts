import { expect, it, describe } from "vitest"
import { generateQRCode } from "../src/utils/generateQRCode"

describe("generateQRCode", () => {
  it("should be able to generate a QR code in base64", async () => {
    const url = "https://example.com"
    const code = await generateQRCode(url)

    expect(code).toContain("data:image/png;base64")
  })

  it("should be able to generate a QR code in base64 with accented characters", async () => {
    const url = "https://example.com/rosé pinè?foo=lão&bar=cân"
    const code = await generateQRCode(url)

    expect(code).toContain("data:image/png;base64")
  })

  it("should be able to generate a QR code in base64 with an IP and port", async () => {
    const url = "http://192.168.100.24:5173"
    const code = await generateQRCode(url)

    expect(code).toContain("data:image/png;base64")
  })

  it("should throw an error if the URL is invalid", () => {
    const url = "invalid-url"

    expect(() => generateQRCode(url)).rejects.toThrowError("Invalid URL")
  })
})
