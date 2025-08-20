<script setup>
const skills = [
  {
    title: 'Product Strategy & Ownership',
    text: 'Roadmaps, backlog, prioritisation, stakeholder alignment, business cases, team mentoring, recruitment.'
  },
  {title: 'Product Lifecycle', text: 'End-to-end from marketing & lead handling to research, delivery and support.'},
  {
    title: 'Ops, Data & Tooling',
    text: 'Jira, Confluence, HubSpot, WHMCS, Figma, Fullstory, VWO, M365, GSuite, API workflows, Maze.'
  },
  {title: 'Technical', text: 'Nuxt.js, Vue.js, Laravel, PHP, Tailwind, SQL, GitHub/GitLab, CI/CD.'},
  {
    title: 'Soft skills',
    text: 'Empathetic, resilient, commercially-minded, strategic, supportive, clear communicator.'
  },
  {title: 'Outside of work', text: 'Hiking, side-projects, video games, LEGO; wrangling two cats and a tortoise.'},
]
</script>

<template>
  <section id="skills" class="mx-auto max-w-[1120px] px-5 py-16">
      <span
          class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Toolkit</span>
    <h2 class="text-3xl font-bold mt-2 mb-4">Skills</h2>
    <div class="grid md:grid-cols-3 gap-5">
      <div v-for="(s, i) in skills" :key="i"
           data-animate
           class="reveal transition duration-700 bg-white/90 border border-black/5 rounded-2xl shadow p-4">
        <h3 class="text-lg font-semibold">{{ s.title }}</h3>
        <p class="text-sm mt-1 text-slate-700">{{ s.text }}</p>
      </div>
    </div>
  </section>
</template>