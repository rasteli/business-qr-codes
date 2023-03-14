import QRCode from "qrcode"

export async function generateQRCode(url: string) {
  let encodedURL = encodeURI(url)
  // Regex pattern to validate the URL.
  // It can be a text URL or an IP address with a port.
  const urlPattern = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i

  if (!urlPattern.test(encodedURL)) {
    throw new Error("Invalid URL")
  }

  // This fixed the issue where the tilde (~) character was not being displayed correctly.
  encodedURL = Buffer.from(encodedURL).toString("latin1")

  const code = await QRCode.toDataURL(encodedURL)

  return code
}
