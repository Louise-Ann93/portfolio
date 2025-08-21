<script setup>
import {computed} from "vue";

const experience = [
  {
    company: 'World Host Group / hosting.com (acquired Nimbus Hosting, 2024)',
    period: '2024 – Present',
    description: `Head of Product Development & User Experience → Lead UX Strategist

    Progressed through multiple roles across Nimbus Hosting and World Host Group, moving into senior leadership after acquisition.
    I now lead the long-term UX strategy across multiple brands, shaping journeys, embedding user-centred thinking and ensuring consistent, seamless product experiences.
    Previously, I headed Product Development & UX, delivering the global hosting panel MVP and scaling it across the business.

    - Defined and led UX strategy across Hosting.com brands, guiding journeys and identifying friction points.
    - Delivered a global hosting platform MVP in 3.5 months, integrating billing, server control, and third-party tools.
    - Act as a strategic advisor to leadership, aligning UX priorities with business goals.
    - Use data, research, and behavioural insights (Mixpanel, Maze, VWO, user feedback) to inform product decisions.
    - Scaled and mentored cross-functional teams, building product culture and growing leaders.`
  },
  {
    company: 'Nimbus Hosting (aquired by World Host Group, 2024)',
    period: '2019 – 2024',
    description: `Earlier roles: Head of Development → Deputy Head of Dev → Front-end Dev → Data Analyst → Support → Sales

    Grew through six roles in five years, gaining end-to-end insight into the full product and customer lifecycle.
    Played a key role in building, scaling and modernising the in-house hosting platform while helping transition the business from dev-led to product-led delivery.

    - Built and maintained the hosting panel (Laravel, Vue.js, Tailwind CSS) with a focus on usability and performance.
    - Delivered core features including WordPress Recipes, CDN tools, Role-Based Access Control and a new purchase flow.
    - Introduced agile ways of working, improving sprint flow, bug tracking, QA hand-offs and cross-team collaboration.
    - Led interviews, usability testing and release processes, turning feedback into actionable product improvements.
    - Mentored developers and coached engineers, supporting growth through structured feedback and peer learning.`
  },
  {
    company: 'Various Administrative & Leadership Roles',
    period: '2012 – 2019',
    description: `Early career

    Before moving into product and development, I worked in a range of leadership and admin roles, developing strong people management, customer service, and process improvement skills.

    - Managed and trained teams in high-pressure environments (Shift Leader at JD Wetherspoon).
    - Created and managed staff rotas, led daily briefings and coached staff to improve performance.
    - Oversaw inventory, budgets and operational reporting, building early foundations in accountability and leadership.`
  }
]

const expItems = computed(() =>
    experience.map((e, i) => ({
      date: e.period,
      title: e.company,
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
  <section id="experience" class="reveal px-5 py-16 border-t border-b border-black/5 py-24">
    <div class="reveal transition mx-auto max-w-[1120px] px-5">
      <span
          class="mx-auto inline-block px-2.5 py-2 rounded-full bg-primary/40 text-slate text-xs font-semibold">CAREER</span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Experience</h2>
    </div>
    <div class="mx-auto max-w-[1120px] px-5">
      <UTimeline
          :items="expItems"
          color="primary"
          size="md"
          class="mt-6"
          :ui="{
      item: 'reveal',
      date: 'w-40 shrink-0 text-sm text-black',
      title: 'text-lg font-semibold text-secondary-700 max-w-[900px]',
      description: 'mt-2 whitespace-pre-line text-slate',
      separator: 'bg-primary-200',
      indicator: 'size-10 bg-primary-600 text-white ring-2 ring-primary-200 grid place-items-center'
    }"
      >
        <!-- custom icon inside the dot -->
        <template #icon="{ item }">
          <UIcon :name="item.icon" class="size-5"/>
        </template>

        <!-- content area -->
        <template #default="{ item }">
          <h3 class="text-lg font-semibold text-slate-800">{{ item.company }}</h3>
          <p class="mt-2 space-y-1 text-slate-700">{{ item.role }} {{ item.description }}</p>
        </template>
      </UTimeline>

    </div>
  </section>
</template>

