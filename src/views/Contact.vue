<script setup>
</script>

<template>
  <div class="container-contact">
    <div class="container-googleMaps">
    </div>
    <div class="container-contactPage">
    </div>
  </div>
</template>
<style>
.container-contact {
  display: grid;
  place-items: center;
  grid-template-columns: 0.5fr 1fr 0.2fr 1fr 0.5fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.container-googleMaps {
  width: 100%;
  height: 100%;
  grid-area: 2 / 2 / 5 / 3;
  background-color: #C37E23;
}
.container-contactPage {
  width: 100%;
  height: 400px;
  grid-area: 2 / 4 / 5 / 5;
  background-color: #C37E23;
}
</style>
