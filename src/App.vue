<script setup>
import { ref, onMounted } from 'vue'
import { profile, nav } from './data'
import LoadingScreen from './components/LoadingScreen.vue'
import MobileMenu from './components/MobileMenu.vue'
import Sidebar from './components/Sidebar.vue'
import Intro from './components/sections/Intro.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
import Experience from './components/sections/Experience.vue'
import Portfolio from './components/sections/Portfolio.vue'
import Contact from './components/sections/Contact.vue'

const loaded = ref(false)

onMounted(() => {
  // Hide the loading screen once the window has loaded (with a short floor
  // so the animation is visible), mirroring the original template.
  const reveal = () => setTimeout(() => (loaded.value = true), 600)
  if (document.readyState === 'complete') reveal()
  else window.addEventListener('load', reveal, { once: true })
})
</script>

<template>
  <LoadingScreen :hidden="loaded" :name="profile.name" />

  <MobileMenu :nav="nav" :profile="profile" />

  <div id="main">
    <Sidebar :name="profile.name" :portrait="profile.portrait" />

    <div class="right-content">
      <div class="inner-content">
        <div class="section-container">
          <Intro :role="profile.role" :portrait="profile.portrait" :profile="profile" />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact :profile="profile" />
        </div>
      </div>
    </div>
  </div>
</template>
