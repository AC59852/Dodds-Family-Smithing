<template>
  <section id="products">
    <h2 class="products__title title--large title--underscore">Featured Items</h2>
    <div class="products__wrapper" v-if="mobile">
      <ul class="products__list">
        <li class="products__item" v-for="(product, index) in products.slice(0,3)" :key="index">
          <span class="products__expand">+</span>
          <img :src="product.img" class="products__img" :alt="product.alt">
          <h3 class="products__name">{{ product.name }}</h3>
        </li>
      </ul>
      <button class="button button--products" v-if="allProducts == false" @click="revealProducts()">View More</button>
      <button class="button button--products" v-if="allProducts" @click="hideProducts()">View Less</button>
    </div>
    <div class="products__wrapper" v-else>
      <ul class="products__list">
        <li class="products__item" v-for="(product, index) in products" :key="index">
          <span class="products__expand">+</span>
          <img :src="product.img" class="products__img" :alt="product.alt">
          <h3 class="products__name">{{ product.name }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['mobile'],

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
          name: 'Knives (Folding)',
          img: '/knives_folding.jpg',
          alt: 'Image of a lead folding knife with wooden base created by Dodds Family Smithing',
        },
        {
          name: 'Armour',
          img: '/armour.jpg',
          alt: 'Image of an iron helmet, fur coat, and leather wraps created by Dodds Family Smithing',
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
      ],
      allProducts: false,
    }
  },

  methods: {
    revealProducts() {
      this.allProducts = true

      let products = document.querySelector(".products__list")

      // push the remaining 3 products into the DOM
      for (let i = 3; i < this.products.length; i++) {
        let product = document.createElement("li")
        product.classList.add("products__item")
        product.innerHTML = `
          <span class="products__expand">+</span>
          <img src="${this.products[i].img}" class="products__img" alt="${this.products[i].alt}">
          <h3 class="products__name">${this.products[i].name}</h3>
        `
        products.appendChild(product)
      }
    },

    hideProducts() {
      this.allProducts = false

      let products = document.querySelector(".products__list"),
          button = document.querySelector(".button--products")

      // remove the remaining 3 products from the DOM
      for (let i = 3; i < this.products.length; i++) {
        products.removeChild(products.lastChild)
      }

      button.scrollIntoView({block: "center"})
    },
  }
}
</script>

<style>

</style>