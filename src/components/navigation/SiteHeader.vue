<script setup>
import {ref} from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

const links = [
  {href: '#about', label: 'About'},
  {href: '#experience', label: 'Experience'},
  {href: '#skills', label: 'Skills'},
  {href: '#contact', label: 'Contact'},
]

</script>

<template>
  <header class="sticky top-0 z-40 bg-secondary-500/45 backdrop-blur-md border-b border-black/5">
    <div class="mx-auto max-w-[1120px] px-5 h-16 md:h-18 grid grid-cols-[1fr_auto_auto] items-center gap-4">
      <!-- Brand -->
      <a href="#top">
            <img rel="preload" src="https://mlyidxcoltsz.i.optimole.com/w:auto/h:auto/q:auto/id:54e4ea818abc46ea2d265ae44b005d06/directUpload/LW-Logo.png" width="75" alt="LW Logo">
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <a href="#about" class="nav-underline">About</a>
        <a href="#experience" class="nav-underline">Experience</a>
        <a href="#skills" class="nav-underline">Skills</a>
        <a href="#contact" class="nav-underline">Contact</a>
      </nav>

      <!-- Actions (desktop) + Burger (mobile) -->
      <div class="justify-self-end flex items-center gap-2">
        <a
            href="mailto:madebywillo@gmail.com?subject=CV%20request&body=Hi%20Louise,%0D%0A%0D%0APlease%20could%20you%20share%20your%20CV.%0D%0A%0D%0AThanks!"
            class="btn btn-accent hover-float"
        >
          Request CV
        </a>

        <!-- Burger (mobile only) -->
        <button
            class="burger lg:hidden"
            :class="{ open: menuOpen }"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-label="Toggle menu"
            @click="toggleMenu"
        >
          <span></span><span></span><span></span>
        </button>

      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <nav
          v-if="menuOpen"
          class="lg:hidden grid gap-2 px-5 pb-5 bg-white/95 border-b border-black/5"
          id="mobile-menu"
      >
        <a v-for="l in links" :key="l.href" :href="l.href" @click="closeMenu"
           class="px-2 py-2 rounded-lg hover:bg-primary-50 transition">{{ l.label }}</a>

        <a
            href="mailto:madebywillo@gmail.com?subject=CV%20request&body=Hi%20Louise,%0D%0A%0D%0APlease%20could%20you%20share%20your%20CV.%0D%0A%0D%0AThanks!"
            class="btn btn-accent hover-float"
        >
          Request CV
        </a>
      </nav>
    </transition>
  </header>
</template>