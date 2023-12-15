import '/style.css'
import './solution_details.css'
import javascriptLogo from '/javascript.svg'
import { Codeblock } from '@/components/codeblock/Codeblock.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <div>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Advent 2023 JavaScript solution🎄</h1>
  </div>
`

Codeblock(app)