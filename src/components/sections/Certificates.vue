<script setup>
import cspoLogo from "@/assets/img/cspo.png";

const certs = [
  {
    img: cspoLogo,
    name: 'CSPO® – Certified Scrum Product Owner',
    issuer: 'Scrum Alliance',
    year: 'April 2024',
    url: 'https://verify.example.com/your-cspo', // optional
    id: 'ABC-12345' // optional
  },

  {
    name: 'UX Deepdive: UX Mapping',
    issuer: 'LinkedIn Learning',
    year: 'July 2025',
    url: 'https://verify.example.com/your-cspo', // optional
  },

  {
    name: 'HTML Foundations',
    issuer: 'Zenva',
    year: 'Oct 2021',
    url: 'https://verify.example.com/your-cspo', // optional
  },

  {
    name: 'HubSpot Sales Software Certified',
    issuer: 'HubSpot Academy',
    year: 'April 2020',
    url: 'https://verify.example.com/your-cspo', // optional
  },

  {
    name: 'HubSpot Certified',
    issuer: 'HubSpot Academy',
    year: 'March 2020',
    url: 'https://verify.example.com/your-cspo', // optional
  },
]
const initials = (s = '') =>
    s.split(/\s+/).map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()
</script>

<template>
  <section id="certifications" class="mx-auto max-w-[1120px] px-5 py-16" data-animate="fade-up">
    <div class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Credentials
    </div>
    <h2 class="text-3xl font-bold mt-2 mb-4">Certifications</h2>

    <div class="grid md:grid-cols-3 gap-5">
      <article v-for="(c, i) in certs" :key="i"
               class="reveal transition duration-700 bg-white/90 border border-black/5 rounded-2xl shadow p-4"
               data-animate="fade-in">
        <div class="flex items-center gap-3">
          <div
              class="rounded-xl bg-primary-50/60 ring-1 ring-primary-100 grid place-items-center overflow-hidden">
            <img
                v-if="c.img"
                :src="c.img"
                :alt="(c.issuer || c.name) + ' logo'"
                class="object-contain"
                loading="lazy"
                decoding="async"
                style="width: 100px"
            />
            <span v-else class="text-primary-700 font-semibold text-xs">
            {{ initials(c.issuer || c.name) }}
              </span>
          </div>

          <div>
            <h3 class="text-lg font-semibold">{{ c.name }}</h3>
            <p class="text-sm mt-1 text-slate-700">{{ c.issuer }} • {{ c.year }}</p>
            <span v-if="c.id" class="text-sm mt-1 text-slate-700">ID: {{ c.id }}</span>
          </div>

        </div>

        <div class="btn-row flex justify-center" v-if="c.url">
          <a v-if="c.url" :href="c.url" target="_blank" rel="noreferrer" class="btn btn-outline">
            View credential
          </a>
        </div>

      </article>
    </div>
  </section>
</template>