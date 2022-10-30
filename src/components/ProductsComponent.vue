<template>
  <section id="products">
    <h2 class="products__title title--large title--underscore">Featured Items</h2>
    <ul class="products__wrapper">
      <li class="products__item" v-for="(product, index) in products" :key="index">
        <span class="project__expand">+</span>
        <img :src="product.img" class="products__img" :alt="product.alt">
        <h3 class="products__name">{{ product.name }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'Swords',
          img: '/swords.jpg',
          alt: 'Image of a sword created by Dodds Family Smithing',
        },
        {
          name: 'Axes',
          img: '/axes.jpg',
          alt: 'Image of a steel axe created by Dodds Family Smithing',
        },
        {
          name: 'Armour',
          img: '/armour.jpg',
          alt: 'Image of an iron helmet, fur coat, and leather wraps created by Dodds Family Smithing',
        },
        {
          name: 'Knives (Folding)',
          img: '/knives_folding.jpg',
          alt: 'Image of a lead folding knife with wooden base created by Dodds Family Smithing',
        },
        {
          name: 'Knives (Straight)',
          img: '/knives_straight.jpg',
          alt: 'Image of a steel straight knife with wooden base created by Dodds Family Smithing',
        },
        {
          name: 'LARPing',
          img: '/larping.jpg',
          alt: 'Image of a man wearing knights armour and a straight sword created by Dodds Family Smithing',
        },
      ]
    }
  }
}
</script>

<style>

</style>