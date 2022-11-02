<template>
  <section id="about">
    <h2 class="about__title title--large">Locally Loved With Exceptional Service</h2>
    <div class="about__wrapper">
      <img v-if="mobile" src="/about_img-2.jpg" class="about__img" alt="Image of man working at grinding table within forge room">
      <div v-else class="about__imgWrapper">
        <img class="about__img about__img--circle" :src="img.link" v-for="(img, index) in images" :key="index" :alt="img.alt">
      </div>
      <div class="about__text">
        <h2 class="about__title title--small title--underscore">My Story</h2>
        <p class="about__para para--1">
          Orci orci, sed tellus et, malesuada lacus cursus et. Suscipit quis sit felis accumsan pellentesque ullamcorper. Enim justo, elementum duis consectetur id enim non sodales. Dui, ac nulla a, ut fermentum nunc libero, faucibus cras. Nulla morbi ipsum, tincidunt commodo enim fusce feugiat sagittis imperdiet. Blandit dictum pharetra ac diam ornare id. Proin id augue nunc fermentum eget sem curabitur interdum gravida. Purus dictum diam, tellus luctus ultrices auctor feugiat in cursus. Non a, aenean eu sed quam phasellus ullamcorper. Velit amet integer metus vestibulum turpis dui lectus. Morbi quis velit felis mattis congue. Ligula ut et felis vitae adipiscing feugiat risus turpis malesuada. Augue phasellus enim sit vel odio amet.
        </p>
        <p class="about__para para--2">
          Orci orci, sed tellus et, malesuada lacus cursus et. Suscipit quis sit felis accumsan pellentesque ullamcorper. Enim justo, elementum duis consectetur id enim non sodales. Dui, ac nulla a, ut fermentum nunc libero, faucibus cras. Nulla morbi ipsum, tincidunt commodo enim fusce feugiat sagittis imperdiet. Blandit dictum pharetra ac diam ornare id. Proin id augue nunc fermentum eget sem curabitur interdum gravida. Purus dictum diam, tellus luctus ultrices auctor feugiat in cursus. Non a, aenean eu sed quam phasellus.
        </p>
        <button class="button" @click="reveal2ndPara()">Read More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['mobile'],
  data() {
    return {
      images: [
        {link: "/about_img-1.jpg", alt: 'Close up of man hammering hot metal against an anvil'},
        {link: "/about_img-2.jpg", alt: 'Image of man working at grinding table within forge room'},
        {link: "/about_img-3.jpg", alt: 'Diagnol image of man working at grinding table within forge room'},
        {link: "/about_img-4.jpg", alt: 'Man holding hot metal wheel inside of press using metal clamps'},
      ],
    }
  },

  methods: {
    reveal2ndPara() {
      const para2 = document.querySelector('.para--2')
      para2.classList.toggle('para--reveal')
    }
  },
}
</script>

<style>

</style>