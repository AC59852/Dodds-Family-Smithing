<template>
  <section id="product">
    <HeroComponent :subtitle="this.$route.params.product.charAt(0).toUpperCase() + this.$route.params.product.slice(1)" />
    <div class="wrapper__content">
      <section id="products">
        <h2 class="products__title title--large title--underscore">All {{this.$route.params.product}}</h2>
        <div class="products__wrapper" v-if="mobile">
          <ul class="products__list">
            <li class="products__item" v-for="(product, index) in filteredProducts" @click="showInfo($event, product)" :key="index">
              <ProductCard :product="product" />
              <ul class="products__info">
                <li v-for="(item, index) in product.info" :key="index">
                  <p>{{item}}</p>
                </li>
                <li><router-link to="/">Order</router-link></li>
              </ul>
            </li>
          </ul>
          <button class="button button--products" v-if="allProducts == false" @click="revealProducts()">View More</button>
          <button class="button button--products" v-if="allProducts" @click="hideProducts()">View Less</button>
        </div>
        <div class="products__wrapper" v-else>
          <ul class="products__list">
            <li class="products__item" v-for="(product, index) in productData" :key="index" @click="showInfo($event, product)">
              <ProductCard :product="product" />
              <div>
                <ul class="products__info">
                  <li v-for="(item, index) in product.info" :key="index">
                    <p>{{item}}</p>
                  </li>
                  <li><router-link to="/#contact">Order</router-link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="more">
        <h2 class="more__title title--large title--underscore">Other Items</h2>
        <ul class="more__list">
          <li v-for="(otherProduct, index) in products" :key="index" class="products__item products__item--more">
            <router-link :to="`/products/${otherProduct.product}`">
              <ProductCard :product="otherProduct" />
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import ProductData from '@/assets/products.json';
import HeroComponent from '@/components/HeroComponent.vue';
import ProductCard from '@/components/ProductCardComponent.vue';
export default {
    data() {
      return {
          productData: ProductData.products[this.$route.params.product],
          mobile: false,
          allProducts: false,
          productLength: 3,
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
      };
    },

    mounted() {
      this.mobile = window.innerWidth < 1150 ? true : false
        window.addEventListener('resize', () => {
        this.mobile = window.innerWidth < 1150 ? true : false
      })
      document.querySelector('.hero__founding h2').style.fontSize = '22px';

      // prevent clicking the arrow
      document.querySelector('.hero__arrow').style.pointerEvents = 'none';
    },

    methods: {
      revealProducts() {
        this.allProducts = true;

        this.productLength = this.productData.length;
      },

      hideProducts() {
        this.allProducts = false;
        this.productLength = 3;

        // scroll products into view
        const products = document.querySelector('#products');
        products.scrollIntoView({ behavior: 'instant', block: 'center' });
      },

      showInfo(event) {
        // get the clicked target html
        const target = event.currentTarget;

        // get the info list
        const info = target.querySelector('.products__info');

        // toggle the info list
        info.classList.toggle('products__info--show');
      },
    },

    beforeRouteUpdate(to, from, next) {
      // if the params change, remount the page
      console.log(this.$route.params.product);

      if(to.params.product !== from.params.product) {
        // if the param exists in the product data, remount the page, otherwise redirect to 404
        if(ProductData.products[to.params.product]) {
          next()
        } else {
          this.$router.push('/404');
        }
      } else {
        next();
      }
    },

    computed: {
      filteredProducts() {
        return this.productData.slice(0, this.productLength);
      },
    },

    components: { 
      HeroComponent,
      ProductCard,
    }
}
</script>

<style>

</style>