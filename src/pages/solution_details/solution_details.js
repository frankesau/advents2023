import '/style.css'
import './solution_details.css'
import javascriptLogo from '/javascript.svg'
import { getSolution } from '../../services/challenges.js'
import { highlightCode, languages } from '../../utils/codehighlighter/codeHighlighter.js'

const solutionId = (new URLSearchParams(document.location.search)).get('solution_id')

const solution = await getSolution({ solutionId })
const { imageSrc, code, name, challengeUrl } = solution

const highlightedCode = highlightCode(code, languages.javascript)
console.log(highlightedCode)

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Advent 2023 JavaScript solution🎄</h1>
    <article class="code-block">
        <img src="${imageSrc}" class="image" alt="JavaScript logo" />
        <section class="solution-data">
            <h2>${name}</h2>
            <a href=${challengeUrl}>Link to challenge</a>
            <code class="code">${highlightedCode.value}</code>
        </section>
    </article>
  </div>
`