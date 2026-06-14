<script setup>
import { experience } from '../../data'
</script>

<template>
  <div class="section" style="padding-bottom:20rem" id="experience">
    <div class="container">
      <p class="tag m-b-3" v-reveal>EXPERIENCE</p>
      <h3 class="m-b-4 m-l-1" v-reveal>Where I've worked.</h3>
      <div class="seperator-line m-b-4" v-reveal></div>
      <p class="m-b-6" v-reveal>
        Five years building and maintaining web applications across<br />
        backend, full-stack, and freelance roles.
      </p>

      <div class="resume">
        <div
          v-for="(job, i) in experience"
          :key="job.company"
          class="item"
          :class="{ 'm-b-6': i < experience.length - 1 }"
          v-reveal
        >
          <p class="color-white m-b-1-5 small">
            {{ job.company }}<span class="m-l-2 color-white">{{ job.period }}</span>
          </p>
          <p class="color-white m-b-1">{{ job.role }}</p>
          <p>{{ job.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
