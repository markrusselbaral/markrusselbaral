<script setup>
const props = defineProps({
  role: { type: String, required: true },
  portrait: { type: String, default: '' },
  profile: { type: Object, required: true }
})

function viewWork() {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="section height-100 y-center" style="padding-bottom:2rem" id="intro">
    <div class="container">
      <img v-if="portrait" :src="portrait" class="intro-portrait" alt="Mark Russel Baral" />
      <p class="tag m-b-4">INTRODUCTION</p>
      <h1 class="m-b-5 m-l-3">{{ role }}</h1>
      <div class="seperator-line m-b-5"></div>

      <div class="hero-actions">
        <button type="button" class="hero-btn hero-btn-primary" @click="viewWork">View Work</button>
        <a class="hero-btn" :href="profile.resume" target="_blank" rel="noopener">Résumé</a>
      </div>

      <div class="hero-social">
        <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><span class="ti-github"></span></a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><span class="ti-linkedin"></span></a>
        <a :href="`mailto:${profile.email}`" aria-label="Email"><span class="ti-email"></span></a>
      </div>
    </div>
  </div>
</template>
