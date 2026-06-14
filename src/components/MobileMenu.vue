<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  nav: { type: Array, required: true },
  profile: { type: Object, required: true }
})

const open = ref(false)
const active = ref('intro')

function toggle() {
  open.value = !open.value
}

// Scroll-spy: highlight whichever section is crossing the viewport's
// middle, regardless of which element actually scrolls.
let spy
onMounted(() => {
  spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = e.target.id
      }
    },
    { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  )
  for (const item of props.nav) {
    const el = document.getElementById(item.id)
    if (el) spy.observe(el)
  }
})
onUnmounted(() => spy && spy.disconnect())

function navigate(id) {
  const target = document.getElementById(id)
  if (target) {
    // scrollIntoView scrolls whichever ancestor actually scrolls —
    // the fixed `.right-content` on desktop, or the window on mobile.
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    active.value = id
  }
  open.value = false
}
</script>

<template>
  <!-- Burger -->
  <div class="m-menu-button" :class="{ 'is-open': open }" @click="toggle">
    <div class="burger">
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>

  <!-- Overlay menu -->
  <div class="m-menu" :class="{ 'is-open': open }">
    <div class="m-menu-inner noselect">
      <div class="head m-b-2"><p class="small">Menu</p></div>
      <ul class="main-items">
        <li v-for="item in nav" :key="item.id">
          <a
            href="#"
            :class="{ 'is-active': active === item.id }"
            @click.prevent="navigate(item.id)"
          >
            <span :class="item.icon"></span>
            <p class="small">{{ item.label }}</p>
          </a>
        </li>
      </ul>

      <div class="head m-b-2 m-t-7"><p class="small">Social</p></div>
      <div class="social-items">
        <div class="item">
          <a :href="profile.github" target="_blank" rel="noopener"><span class="ti-github"></span></a>
        </div>
        <div class="item">
          <a :href="profile.linkedin" target="_blank" rel="noopener"><span class="ti-linkedin"></span></a>
        </div>
        <div class="item">
          <a :href="`mailto:${profile.email}`"><span class="ti-email"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>
