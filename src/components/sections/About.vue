<script setup>
import { about } from '../../data'
</script>

<template>
  <div class="section" style="padding-bottom:26rem" id="about">
    <div class="container">
      <p class="tag m-b-3" v-reveal>ABOUT</p>
      <h3 class="m-b-4 m-l-1" v-reveal>
        Building seamless experiences,<br />from interface to infrastructure.
      </h3>
      <div class="seperator-line m-b-4" v-reveal></div>
      <p
        v-for="(paragraph, i) in about"
        :key="i"
        :class="{ 'm-t-4': i > 0 }"
        v-reveal
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
