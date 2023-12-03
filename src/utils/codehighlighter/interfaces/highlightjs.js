import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/gradient-dark.css';

export const highLightCode = (code, language) => {
  return hljs.highlight(code, {language})
}

export const supportedLanguages = {
  javascript: "javascript"
}