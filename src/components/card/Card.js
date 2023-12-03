import "./card.css"
import { Tag, tagTypes } from '../tag/Tag.js'

const mappedTags = {
  easy: tagTypes.normal,
  medium: tagTypes.warning,
  hard: tagTypes.danger
}

export const Card = (cardParams) => {
  const { imageSrc, title, subTitle, description, url } = cardParams
  let tag = Tag({text: subTitle, type: mappedTags[subTitle] ?? mappedTags.easy})

  return `<a class="card" href=${url}>
    <img src=${imageSrc} alt="card image"/>
    <div class="metadata">
        <h3>${title}</h3>
        ${tag}
        <p>${description}</p>
    </div>
  </a>`
}