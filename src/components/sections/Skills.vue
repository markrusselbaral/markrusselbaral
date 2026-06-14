<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { stacks, skills } from '../../data'

const openIndex = ref(null)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

// Animate the skill bars once they scroll into view.
const barsEl = ref(null)
const shown = ref(false)
let io
onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          shown.value = true
          io.disconnect()
        }
      }
    },
    { root: null, threshold: 0.25 }
  )
  if (barsEl.value) io.observe(barsEl.value)
})
onUnmounted(() => io && io.disconnect())
</script>

<template>
  <div class="section" style="padding-bottom:20rem" id="skills">
    <div class="container">
      <p class="tag m-b-3" v-reveal>SKILLS</p>
      <h3 class="m-b-4 m-l-1" v-reveal>The stack I build with.</h3>
      <div class="seperator-line m-b-4" v-reveal></div>
      <p class="m-b-4" v-reveal>
        Technologies I reach for across the full development lifecycle —<br />
        from languages and frameworks to tooling.
      </p>

      <!-- Stack accordion -->
      <ul class="accordion">
        <li
          v-for="(stack, i) in stacks"
          :key="stack.title"
          class="acc_section"
          :class="{ acc_active: openIndex === i }"
          v-reveal
        >
          <div class="acc_head" @click="toggle(i)">
            <h5>{{ stack.title }}</h5>
            <div class="icon"></div>
          </div>
          <div class="acc_content">
            <p>{{ stack.body }}</p>
          </div>
        </li>
      </ul>

      <!-- Skill bars -->
      <div class="m-t-7" ref="barsEl">
        <div class="skill-bar" v-for="skill in skills" :key="skill.name" v-reveal>
          <div class="head noselect"><h5>{{ skill.name }}</h5></div>
          <div class="bar m-b-2">
            <div class="fill" :style="{ width: shown ? skill.level + '%' : '0%' }"></div>
            <div
              class="number-tag noselect"
              :style="{ left: shown ? skill.level + '%' : '0%' }"
            >
              <p class="small">{{ skill.level }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
