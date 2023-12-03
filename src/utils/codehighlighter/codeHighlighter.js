import { highLightCode as iHighlightCode, supportedLanguages } from './interfaces/highlightjs.js'

export const highlightCode = (code, language) => {
  return iHighlightCode(code, language)
}

export const languages = supportedLanguages