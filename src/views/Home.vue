<template>

    <div class="container">
      <div class="row aling-items-center justify-content-center">
        <div class="col-md-5">
          <h1 class="fw-bold fs-3 text-center text-body mb-4">Quiz App</h1>

          <div class="bg-light py-4 rounded shadow">

            <p class="fw-bold text-start px-3"> {{ questions[index]['question'] }} </p>

            <div class="row px-4">

              <label  
              v-for="answer, key in questions[index]['answers']" 
              v-bind:key="key" 
              class="rounded border py-1 w-100 text-start mb-3" 
              :class="{'active' : selectedAnswer == '', 
              'bg-danger' : selectedAnswer == key , 
              'bg-success' : key === questions[index]['correctAnswer'] && selectedAnswer != ''}">
                <input type="radio" :id="key" class="visually-hidden" :value="key" @change="answered($event)" v-model="selectedAnswer" :disabled="selectedAnswer != ''">
                {{ answer }}
              </label>

            </div>

            <div class="mt-3" v-show="index < 3">
              <button class="btn btn-success rounded" v-show="selectedAnswer != ''" @click="nextQuestion">Avançar</button>

             
            </div>
            <span class="text-dark" v-show="index >= 3 && selectedAnswer != ''">Acabou</span>
          </div>
        </div>
        
      </div>
    </div>

</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      index: 0,
      selectedAnswer: '',
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 4,
      btnNext: '',
      questions: [
        {
          question: 'Quais dessas não são uma linguagem de programação?',
          answers: {
            a: 'TypeScript',
            b: 'HTML5',
            c: 'Python',
            d: 'Fortran'
          },
          correctAnswer: 'b'
        },
        {
          question: 'Se x == "1" significa que...',
          answers: {
            a: 'x é inteiro',
            b: 'x é equivale a 1',
            c: 'x é um número',
            d: 'x é uma string'
          },
          correctAnswer: 'd'
        },
        {
          question: 'Qual código retornará "banana" do array: y = ["maça", "banana", "morango"]',
          answers: {
            a: 'print(len(thislist))',
            b: 'print(thislist[2])',
            c: 'print(thislist[1])',
            d: 'print(thislist.banana)'
          },
          correctAnswer: 'c'
        },
        {
          question: 'Qual dessas versões do ecmascript não foi lançada',
          answers: {
            a: 'ECMAScript 4',
            b: 'ECMAScript 2',
            c: 'ECMAScript 6',
            d: 'ECMAScript 1'
          },
          correctAnswer: 'a'
        },
      ]
    }
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value
      console.log(this.selectedAnswer)
    },
    nextQuestion() {
      this.index++
      console.log(this.index)
      this.selectedAnswer = ''
    }
  }
}
</script>


<style scoped>
.active:hover{
  background: #c4c7c5;
  cursor: pointer;
}
.bg-danger{
  color: #fafafa;
  background: #dd4545 !important;
}
.bg-success{
  color: #fafafa;
  background: #75e299 !important;
}
</style>