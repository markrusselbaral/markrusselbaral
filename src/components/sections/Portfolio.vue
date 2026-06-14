<script setup>
import { ref } from 'vue'
import { projects } from '../../data'

const activeProject = ref(null)
function open(project) {
  activeProject.value = project
}
function close() {
  activeProject.value = null
}
</script>

<template>
  <div class="section" style="padding-bottom:20rem" id="portfolio">
    <div class="container">
      <p class="tag m-b-3" v-reveal>PORTFOLIO</p>
      <h3 class="m-b-4 m-l-1" v-reveal>Selected Work</h3>
      <div class="seperator-line m-b-4" v-reveal></div>
      <p class="m-b-6" v-reveal>
        A few projects I've designed and built, from college work<br />
        to full-stack applications shipped to production.
      </p>

      <div class="work-grid">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="item noselect work-lightbox"
          :class="{ 'm-t-6': i > 0 }"
          v-reveal
          @click="open(project)"
        >
          <div class="icon-button"><span class="ti-arrow-right"></span></div>
          <div class="info">
            <p class="color-white">{{ project.title }}</p>
            <span v-if="project.status === 'building'" class="building-badge">In development</span>
            <div v-if="project.tags" class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag-chip">{{ tag }}</span>
            </div>
            <div class="seperator-line m-t-1"></div>
          </div>
          <div
            class="cover"
            :class="{ 'is-placeholder': !project.cover }"
            :style="project.cover ? { backgroundImage: `url(${project.cover})` } : null"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lb-fade">
      <div v-if="activeProject" class="lightbox-overlay" @click.self="close">
        <div class="lightbox-modal">
          <div class="lightbox-close" @click="close"><span class="ti-close"></span></div>
          <div
            class="lb-image"
            :class="{ 'is-placeholder': !activeProject.cover }"
            :style="activeProject.cover ? { backgroundImage: `url(${activeProject.cover})` } : null"
          ></div>
          <div class="lb-info">
            <h3 class="m-b-3">{{ activeProject.title }}</h3>
            <div class="seperator-line m-b-3"></div>
            <div v-if="activeProject.tags" class="project-tags m-b-3">
              <span v-for="tag in activeProject.tags" :key="tag" class="tag-chip">{{ tag }}</span>
            </div>
            <p>{{ activeProject.description }}</p>
            <a
              v-if="activeProject.link"
              class="color-white"
              :href="activeProject.link"
              target="_blank"
              rel="noopener"
            >
              Visit the live project →
            </a>
            <p v-else class="color-white">🚧 In development — coming soon</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
