// @ts-ignore
export const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=15&type=boolean',
  timeout: 2000
})