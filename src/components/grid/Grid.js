import { Card } from '../card/Card.js'
import { getChallenges } from '@/services/challenges.js'

export const Grid = async (app) => {
  const challenges = await getChallenges()

  app.innerHTML += `
  <section class="grid">
    ${challenges.map((challenge) => {
      return Card(challenge)
    }).join('')}
  </section>
  `
}