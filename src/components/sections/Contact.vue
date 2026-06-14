<script setup>
import { ref } from 'vue'

const props = defineProps({
  profile: { type: Object, required: true }
})

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(props.profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    window.location.href = `mailto:${props.profile.email}`
  }
}
</script>

<template>
  <div class="section" style="padding-bottom:20rem" id="contact">
    <div class="container">
      <p class="tag m-b-3" v-reveal>CONTACT</p>
      <h3 class="m-b-4 m-l-1" v-reveal>Let's get in touch.</h3>
      <div class="seperator-line m-b-4" v-reveal></div>
      <p class="m-b-6" v-reveal>
        Have a project in mind or just want to say hi?<br />
        Reach me through any of the channels below.
      </p>

      <div class="contact-email" v-reveal>
        <span class="ti-email"></span>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <button type="button" class="copy-btn" @click="copyEmail">
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>

      <div class="contact-buttons" v-reveal>
        <a class="hero-btn hero-btn-primary" :href="profile.github" target="_blank" rel="noopener">
          <span class="ti-github"></span> GitHub
        </a>
        <a class="hero-btn" :href="profile.linkedin" target="_blank" rel="noopener">
          <span class="ti-linkedin"></span> LinkedIn
        </a>
        <a class="hero-btn" :href="profile.resume" target="_blank" rel="noopener">
          <span class="ti-files"></span> Résumé
        </a>
      </div>
    </div>
  </div>
</template>
