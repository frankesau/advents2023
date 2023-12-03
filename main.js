import './style.css'
import javascriptLogo from './javascript.svg'
import { getChallenges } from './src/services/challenges.js'
import { Card } from './src/components/card/Card.js'

const challenges = await getChallenges()

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>JavaScript Advents 2023🎄</h1>
    <section class="grid">
    ${challenges.map((challenge) => {
      return Card(challenge)
    }).join("")}
  </section>
  </div>
`
