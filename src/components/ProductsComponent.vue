<template>
  <section id="products">
    <h2 class="products__title title--large title--underscore">Featured Items</h2>
    <div class="products__wrapper" v-if="mobile">
      <ul class="products__list">
        <li class="products__item" v-for="(product, index) in filteredProducts" :key="index">
          <router-link :to="`/products/${product.product}`">
            <ProductCard :product="product" />
          </router-link>
        </li>
      </ul>
      <button class="button button--products" v-if="allProducts == false" @click="revealProducts()">View More</button>
      <button class="button button--products" v-if="allProducts" @click="hideProducts()">View Less</button>
    </div>
    <div class="products__wrapper" v-else>
      <ul class="products__list">
        <li class="products__item" v-for="(product, index) in products" :key="index">
          <router-link :to="`/products/${product.product}`">
            <ProductCard :product="product" />
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCardComponent.vue';
export default {
  props: ['mobile'],

  data() {
    return {
      products: [
        {
          name: 'Swords',
          product: 'swords',
          img: '/swords.jpg',
          alt: 'Image of a sword created by Dodds Family Smithing',
        },
        {
          name: 'Axes',
          product: 'axes',
          img: '/axes.jpg',
          alt: 'Image of a steel axe created by Dodds Family Smithing',
        },
        {
          name: 'Knives (Folding)',
          product: 'knives-folding',
          img: '/knives_folding.jpg',
          alt: 'Image of a lead folding knife with wooden base created by Dodds Family Smithing',
        },
        {
          name: 'Armour',
          product: 'armour',
          img: '/armour.jpg',
          alt: 'Image of an iron helmet, fur coat, and leather wraps created by Dodds Family Smithing',
        },
        {
          name: 'Knives (Straight)',
          product: 'knives-straight',
          img: '/knives_straight.jpg',
          alt: 'Image of a steel straight knife with wooden base created by Dodds Family Smithing',
        },
      ],
      allProducts: false,
      productLength: 3,
    }
  },

  // mounted() {
  //   // remove the current product from the list of other products
  //   this.products = this.products.filter((product) => product.product !== this.$route.params.product);
  // },

  methods: {
    revealProducts() {
      this.allProducts = true;

      this.productLength = this.products.length;
    },

    hideProducts() {
      this.allProducts = false;
      this.productLength = 3;

      // scroll products into view
      const products = document.querySelector('#products');
      products.scrollIntoView({ behavior: 'instant', block: 'center' });
    },
  },

  computed: {
    filteredProducts() {
      return this.products.slice(0,this.productLength)
    }
  },

  components: {
    ProductCard,
  },
}
</script>

<style>

</style>