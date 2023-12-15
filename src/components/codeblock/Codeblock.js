import { getSolution } from '@/services/challenges.js'
import { highlightCode, languages } from '@/utils/codehighlighter/codeHighlighter.js'

export const Codeblock = async (app) => {
  const solutionId = (new URLSearchParams(document.location.search)).get('solution_id')

  const solution = await getSolution({ solutionId })
  const { imageSrc, code, name, challengeUrl } = solution

  const highlightedCode = highlightCode(code, languages.javascript)

  app.innerHTML += `
  <article class="code-block">
    <img src="${imageSrc}" class="image" alt="JavaScript logo" />
    <section class="solution-data">
      <h2>${name}</h2>
      <a href=${challengeUrl}>Go to challenge!</a>
      <code class="code">${highlightedCode.value}</code>
    </section>
  </article>
  `
}