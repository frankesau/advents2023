import './style.css'
import javascriptLogo from './javascript.svg'
import { Grid } from './src/components/grid/grid.js'

const app = document.querySelector('#app')

app.innerHTML = `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>JavaScript Advents 2023🎄</h1>
`
Grid(app)