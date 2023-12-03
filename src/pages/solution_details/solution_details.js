import '/style.css'
import './solution_details.css'
import { getSolution } from '../../services/challenges.js'
import { highlightCode, languages } from '../../utils/codehighlighter/codeHighlighter.js'

const solutionId = (new URLSearchParams(document.location.search)).get('solution_id')

const solution = await getSolution({ solutionId })
const { imageSrc, code, name } = solution

const highlightedCode = highlightCode(code, languages.javascript)
console.log(highlightedCode)

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${imageSrc}" class="logo vanilla" alt="JavaScript logo" />
    <h1>${name}</h1>
    <section class="code-block">
        <code class="code">${highlightedCode.value}</code>
    </section>
  </div>
`