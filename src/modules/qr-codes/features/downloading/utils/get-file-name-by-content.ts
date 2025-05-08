export function getFileNameByContent(content: string) {
  const fileName = content
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/[\/\\:*?"<>|]/g, "-")
  
  return fileName
}