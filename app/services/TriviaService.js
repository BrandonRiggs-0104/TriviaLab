import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";
import { triviaApi } from "./AxiosService.js";

class TriviaService {
  async getTrivia() {
    const response = await triviaApi.get('')

    console.log('got a question', response.data)

    const arrayOfQuestions = response.data.results.map(t => new Trivia(t))

    console.log('array of questions', response.data.data)


    AppState.questions = arrayOfQuestions
  }
}

export const triviaService = new TriviaService()