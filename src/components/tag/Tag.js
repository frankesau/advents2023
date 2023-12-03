import "../tag/tag.css"

export const Tag = (tagParams) => {
  const { text, type } = tagParams
  const types = `tag ${type}`

  return `
    <div class="${types}">
        <p>${text}</p>
    </div>
  `
}

export const tagTypes = {
  normal: "normal",
  warning: "warning",
  danger: "danger"
}