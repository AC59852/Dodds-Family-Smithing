<template>
  <section id="faq">
    <h2 class="faq__title title--large title--underscore">FAQ</h2>
    <ul class="faq__list">
      <li v-for="(question, index) in questions" :key="index" @click="loadAnswer(question, index)">
        <h3 class="faq__question">{{ question.question }}</h3>
        <p class="faq__answer" v-if="question.clicked">{{ question.answer }}</p>
        <p v-else></p>
        <img src="/chevron-down.svg" class="faq__expan" :alt="'Arrow down indicating to expand the question of' + question.question" >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: 'Where can I purchase these?',
          answer: 'These items are made and sold locally in Ohio. If you are interested in purchasing an item, please contact using the form below',
          clicked: false,
        },
        {
          question: 'Are your prices negotiable?',
          answer: 'Yes, prices are negotiable.',
          clicked: false,
        },
        {
          question: 'Will you ship my purchase?',
          answer: 'Yes, we will ship your purchase. Shipping costs will be determined by the size and weight of the item.',
          clicked: false,
        },
        {
          question: 'How will we keep in contact during the purchasing process?',
          answer: 'We will keep in contact via email. Please provide a valid email address when contacting us.',
          clicked: false,
        },
        {
          question: 'What materials do you use for your products?',
          answer: 'We use a variety of materials for our products. We use steel, iron, lead, and wood.',
          clicked: false,
        },
        {
          question: 'Can I request different materials for to be used?',
          answer: 'We will attempt to accommodate your request. Please be descriptive about what materials you would like to be used.',
          clicked: false,
        },
        {
          question: 'Is there warranty?',
          answer: 'Yes, there is a 1 year warranty on all products. If you have any issues with your product, please contact us.',
          clicked: false,
        }
      ],
    }
  },

  methods: {
    loadAnswer(question, index) {
      this.questions[index].clicked = !question.clicked
    }
  }
}
</script>

<style>

</style>