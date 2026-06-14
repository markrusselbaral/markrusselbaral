<script setup>
defineProps({
  name: { type: String, required: true },
  portrait: { type: String, required: true }
})
</script>

<template>
  <div class="left-content noselect">
    <div class="inner-content">
      <div class="name">
        <p class="small color-white">{{ name }}</p>
        <div class="seperator-line"></div>
      </div>
      <div class="picture-box">
        <div class="picture" :style="{ backgroundImage: `url(${portrait})` }"></div>
      </div>
      <div class="frame-1 frame"></div>
      <div class="frame-2 frame"></div>
      <div class="frame-3 frame"></div>
    </div>
  </div>
</template>
