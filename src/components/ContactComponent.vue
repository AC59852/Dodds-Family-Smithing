<template>
  <section id="contact">
    <h2 class="contact__title title--large title--underscore">Place an Order</h2>
    <form action="" class="contact__form">
      <div class="contact__wrapper">
        <input id="name" class="contact__input contact__input--name" aria-label="Name" title="Name" placeholder="Name" type="text" required>
      </div>
      <div class="contact__wrapper">
        <select name="products" id="products" class="contact__input contact__input--products">
          <option disabled="disabled" hidden selected="selected">Select Product</option>
          <optgroup class="contact__optiongroup" size="3" v-for="product in products" :key="product" :label="product.name">
            <option v-for="productItem in product.productItems" :key="productItem" :value="productItem.name">
              {{ productItem.name }}
              <div class="contact__underline"></div>
            </option>
          </optgroup>
        </select>
      </div>
      <div class="contact__wrapper">
        <input id="email" class="contact__input contact__input--email" aria-label="Email" title="Email" placeholder="Email" type="email" required>
      </div>
      <div class="contact__wrapper">
        <input id="phone" class="contact__input contact__input--phone" aria-label="Phone Number" title="Phone Number" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" required>
      </div>
      <div class="contact__wrapper">
        <textarea name="message" id="message" class="contact__input contact__input--message" rows="1" aria-label="message" maxlength="275" required placeholder="Message"></textarea>
      </div>
      <button class="button">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { 
          name: 'Swords',
          productItems: [
            { name: 'Rapier' },
            { name: 'Broadsword' },
            { name: 'Claymore' },
            { name: 'Falchion' },
            { name: 'Practice' },
          ]
        },
        { 
          name: 'Axes',
          productItems: [
            { name: 'Woodcutting' },
            { name: 'Hatchet' },
            { name: `Carpenter's` },
            { name: 'Battle Axe' },
          ]
        },
      ]
    }
  }
}
</script>

<style>

</style>