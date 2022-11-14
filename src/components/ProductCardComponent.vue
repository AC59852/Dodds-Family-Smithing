<template>
  <span class="products__expand">+</span>
  <img :src="product.img" class="products__img" :alt="product.alt">
  <h3 class="products__name">{{ product.name }}</h3>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style>

</style>