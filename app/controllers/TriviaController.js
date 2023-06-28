import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawQuestions() {
  let question = AppState.questions
  let template = ''
  question.forEach(q => template += q.QuestionTemplate)
  setHTML('questions', template)
}

function correctanswer() {
  Pop.success('Correct! Nice Job! How many can you get?')
}

export class TriviaController {
  constructor() {
    console.log('trivia controller connected');
    this.getTrivia();
    AppState.on('questions', _drawQuestions)
  }

  async getTrivia() {
    try {
      await triviaService.getTrivia()
      Pop.success('i got a question!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}