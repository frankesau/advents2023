export const getChallenges = async () => {
  const challengesResponse = await fetch('/mocks/challenges.json')
  const challenges = await challengesResponse.json()

  console.log(challenges)

  return challenges.results
}