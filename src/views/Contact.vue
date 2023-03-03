<script setup>
</script>

<template>
  <div class="container-contact">
    <div class="container-googleMaps">
    <iframe
      width="600"
      height="400"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=8GF32XQ8+2V
        &q=Space+Needle,Seattle+WA">
    </iframe>
    </div>
    <div class="container-contactPage">
      <form action="">
        <label for="fname">Voornaam</label>
        <input type="text" id="fname" name="firstname" placeholder="Uw voornaam..">
        <label for="lname">Achternaam</label>
        <input type="text" id="lname" name="lastname" placeholder="Uw achternaam..">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Uw email..">
        <label for="subject">Onderwerp</label>
        <textarea id="subject" name="subject" placeholder="Schrijf hier uw bericht.." style="height:100px"></textarea>
        <input type="submit" value="Verstuur">
      </form>
    </div>
  </div>
</template>
