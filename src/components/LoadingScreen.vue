<script setup>
defineProps({
  name: { type: String, required: true },
  hidden: { type: Boolean, default: false }
})
</script>

<template>
  <div class="loading-screen" :class="{ 'is-hidden': hidden }">
    <div class="inner">
      <div class="text-box"><h3>{{ name }}</h3></div>
      <div class="line-frame"><div class="line"></div></div>
    </div>
  </div>
</template>
