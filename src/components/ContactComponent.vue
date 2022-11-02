<template>
  <section id="contact">
    <h2 class="contact__title title--large title--underscore">Place an Order</h2>
    <form action="" class="contact__form">
      <div class="contact__wrapper">
        <input id="name" class="contact__input contact__input--name" aria-label="Name" title="Name" placeholder="Name" type="text" required>
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

}
</script>

<style>

</style>