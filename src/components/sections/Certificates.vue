<template>
  <!-- Certifications -->
  <section id="certifications" class="border-t border-b border-black/5 bg-secondary-500/45 backdrop-blur-md py-24">
    <div class="reveal transition mx-auto max-w-[1120px] px-5">
    <span
        class="ml-5 inline-block px-2.5 py-2 rounded-full bg-white/40 text-slate text-xs font-semibold">CREDENTIALS</span>
      <h2 class="ml-5 text-3xl font-bold mt-2 mb-4">Certifications</h2>

      <div class="ml-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="(c, i) in certs"
            :key="i"
            class="bg-white/90 border border-black/5 rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
        >
          <!-- Top row: logo + meta -->
          <div class="flex items-start gap-3">
            <div
                class="w-16 h-16 rounded-xl ring-1 ring-primary-100 bg-primary-50/60 grid place-items-center overflow-hidden shrink-0">
              <img
                  v-if="c.img"
                  :src="c.img"
                  :alt="(c.issuer || c.name) + ' logo'"
                  class="max-w-[56px] max-h-[56px] object-contain"
                  loading="lazy"
                  decoding="async"
              />
              <span v-else class="text-primary-700 font-semibold text-sm">{{ initials(c.issuer || c.name) }}</span>
            </div>

            <div class="min-w-0">
              <h3 class="text-lg font-semibold leading-snug">{{ c.name }}</h3>
              <p class="text-sm text-slate-600">
                {{ c.issuer }}
                <span v-if="c.date"> • {{ c.date }}</span>
              </p>
              <p v-if="c.id" class="text-xs text-slate-500 mt-0.5">ID: {{ c.id }}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-4 pt-2 border-t border-black/5">
            <a
                v-if="c.url"
                :href="c.url"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-primary-700 border border-primary-600 hover:bg-primary-50 text-sm"
            >
              View credential
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h4m0 0v4m0-4L10 14"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import cspoLogo from '../../assets/img/cspo.png' // example

const initials = (s = '') =>
    s.split(/\s+/).map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()

const certs = [
  {
    img: cspoLogo,
    name: 'CSPO® – Certified Scrum Product Owner',
    issuer: 'Scrum Alliance',
    date: 'April 2024',
    id: 'ABC-12345',
    url: 'https://verify.example.com/cspo'
  },
  {
    name: 'UX Deepdive: UX Mapping',
    issuer: 'LinkedIn Learning',
    date: 'July 2025',
    url: 'https://www.linkedin.com/learning/'
  },
  {
    name: 'HTML Foundations',
    issuer: 'Zenva',
    date: 'Oct 2021',
    url: 'https://zenva.com/'
  },
  {
    name: 'HubSpot Sales Software Certified',
    issuer: 'HubSpot Academy',
    date: 'April 2020',
    url: 'https://academy.hubspot.com/'
  },
  {
    name: 'HubSpot Certified',
    issuer: 'HubSpot Academy',
    date: 'March 2020',
    url: 'https://academy.hubspot.com/'
  }
]
</script>
