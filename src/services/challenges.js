export const getChallenges = async () => {
  const challengesResponse = await fetch('/mocks/challenges.json')
  const challenges = await challengesResponse.json()

  console.log(challenges)

  return challenges.results
}

export const getSolution = async ({solutionId}) => {
  const solutionResponse = await fetch('/mocks/solutions.json')
  const data = await solutionResponse.json()
  const dataResults = data.results ?? []

  //TODO: Should be returned from API instead
  const requestedSolution = dataResults.find((solution) => solution.id === solutionId)

  console.log('--->', requestedSolution);

  return requestedSolution
}