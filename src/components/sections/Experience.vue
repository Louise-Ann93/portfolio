<script setup>
import {computed} from "vue";

const experience = [
  {
    company: 'hosting.com / World Host Group (acquired Nimbus Hosting, 2024)',
    role: 'Head of Product Development & User Experience → Lead UX Strategist',
    period: '2019 – Present',
    description: `Progressed through multiple roles across Nimbus Hosting and World Host Group,
                  culminating in a leadership position post-acquisition.

                  I lead the team behind our global customer panel, used across 35+ hosting brands,
                  and drive the long-term UX vision across the business.

                  I’m responsible for shaping the roadmap, mentoring developers and product managers/owners,
                  and aligning delivery with business goals.`

  },
  {
    company: 'Nimbus Hosting',
    role: 'Earlier roles: Head of Development → Deputy Head of Dev → Front-end Dev → Data Analyst → Support → Sales',
    period: '2019 – 2024',
    description: `Over five years at Nimbus, I progressed through six roles, gaining end-to-end insight into the customer and product lifecycle.

    I led the build of core features, coached engineers, introduced agile processes, and supported the transition from dev led to product led delivery.`
  },
  {
    company: 'Various Administrative & Leadership Roles',
    role: 'Early career',
    period: '2012 – 2019',
    description: `Prior to moving into product and development, I held a number of leadership and admin roles where I developed foundational skills in people management, customer service, process improvement, and cross-team coordination.

    As a Shift Leader at JD Wetherspoon, I managed operations and training across both bar and kitchen teams, often under pressure, and gained first hand experience of supervising, onboarding, and coaching staff in a high demand environment.`
  }
]

const expItems = computed(() =>
    experience.map((e, i) => ({
      date: e.period,
      title: e.role,
      company: e.company,
      description: e.description,
      icon:
          i === 0
              ? 'i-heroicons-building-office-20-solid'
              : i === 1
                  ? 'i-heroicons-code-bracket-20-solid'
                  : 'i-heroicons-academic-cap-20-solid'
    }))
)
</script>

<template>
  <section id="experience" class="mx-auto max-w-[1120px] px-5 py-16">
    <span class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Career</span>
    <h2 class="text-3xl font-bold mt-2">Experience</h2>

    <UTimeline
        :items="expItems"
        color="primary"
        size="md"
        class="mt-6"
        :ui="{
      item: 'reveal',
      date: 'w-40 shrink-0 text-sm text-slate-600',
      title: 'text-lg font-semibold text-slate-800 max-w-[900px]',
      description: 'mt-2 max-w-[900px] whitespace-pre-line',
      separator: 'bg-primary-200',
      indicator: 'size-10 bg-primary-600 text-white ring-4 ring-primary-100 grid place-items-center'
    }"
    >
      <!-- custom icon inside the dot -->
      <template #icon="{ item }">
        <UIcon :name="item.icon" class="size-5"/>
      </template>

      <!-- content area -->
      <template #default="{ item }">
        <h3 class="text-lg font-semibold text-slate-800">{{ item.title }}</h3>
        <p class="text-sm text-slate-500">{{ item.company }}</p>
        <p class="mt-2 space-y-1 text-slate-700">{{ item.description }}</p>
      </template>
    </UTimeline>
  </section>
</template>
