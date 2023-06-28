export class Trivia {
  constructor(data) {
    this.correct_answer = data.correct_answer
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.incorrect_answers = data.incorrect_answers
  }
  get QuestionTemplate() {
    return `
     <div class="col-4 p-5">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title">${this.category}, Difficulty: ${this.difficulty}</h5>
           <p class="card-text p-5">${this.question}</p>
           <p class="text-center" onclick="incorrectAnswer()">${this.incorrect_answers}</p>
           <p class="text-center"onclick="correctAnswer()">${this.correct_answer}</p>
         </div>
       </div>
     </div>
    `
  }
}


