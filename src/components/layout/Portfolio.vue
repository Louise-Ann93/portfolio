<template>
  <div id="top" class="min-h-dvh bg-primary-100 text-slate-900 font-sans">

    <!--    Header -->
    <site-header/>

    <!-- Decorative wave -->
    <div class="relative h-32 opacity-45">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute inset-0 w-full h-full">
        <path :fill="brand.secondary"
              d="M0,192L60,202.7C120,213,240,235,360,256C480,277,600,299,720,293.3C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
    </div>

    <!-- Hero -->
    <hero/>

    <!-- About -->
    <about-me/>

    <!-- Highlights -->
    <highlights/>

    <!-- Experience -->
    <experience/>

    <!-- Certifications -->
    <certificates/>

    <!-- Skills -->
    <skills/>

    <!-- Awards -->
    <Awards/>

    <!-- Contact -->


    <!-- Footer -->
    <site-footer/>
  </div>
</template>

<script setup>
import {onMounted, computed} from 'vue'
import SiteHeader from '@/components/navigation/SiteHeader.vue'
import SiteFooter from "@/components/navigation/SiteFooter.vue";
import Hero from "@/components/sections/Hero.vue"
import AboutMe from "@/components/sections/About-Me.vue";
import Highlights from "@/components/sections/Highlights.vue";
import Experience from "@/components/sections/Experience.vue";
import Certificates from "@/components/sections/Certificates.vue";
import Skills from "@/components/sections/Skills.vue";
import Awards from "@/components/sections/Awards.vue";

const brand = {secondary: '#408c8f'}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }
  }, { threshold: 0.12 })

  // watch both patterns you use
  document.querySelectorAll('[data-animate], .reveal').forEach(el => io.observe(el))
})


</script>

