<script setup>
import vueJsImg from '../../assets/img/vue-logo.svg'
import laravelImg from '../../assets/img/laravel.svg'
import figmaImg from '../../assets/img/figma.svg'
import gitHubImg from '../../assets/img/github.svg'
import hubSpotImg from '../../assets/img/hubspot.svg'
import jiraImg from '../../assets/img/jira.svg'
import mySqlImg from '../../assets/img/mysql.svg'
import tailwindImg from '../../assets/img/tailwind.svg'

const tools = [
  {name: 'Figma', img: figmaImg, url: 'https://www.figma.com'},
  {name: 'Vue.js', img: vueJsImg, url: 'https://vuejs.org'},
  {name: 'Tailwind CSS', img: tailwindImg, url: 'https://tailwindcss.com'},
  {name: 'GitHub', img: gitHubImg, url: 'https://github.com'},
  {name: 'Laravel', img: laravelImg, url: 'https://laravel.com'},
  {name: 'Jira', img: jiraImg, url: 'https://www.atlassian.com/software/jira'},
  {name: 'HubSpot', img: hubSpotImg, url: 'https://hubspot.com'},
  {name: 'mySQL', img: mySqlImg, url: 'https://www.mysql.com'},
]

const capabilities = [
  {
    title: 'Product Strategy & Ownership',
    points: [
      'Shaping direction and aligning teams to deliver impact.',
    ],
    tags: ['Roadmaps', 'Prioritisation', 'Stakeholder alignment']
  },
  {
    title: 'Product Lifecycle',
    points: [
      'Hands-on across every stage, from discovery to delivery., synthesis',
    ],
    tags: ['Research & testing', 'Delivery & adoption', 'Retention optimisation']
  },
  {
    title: 'Soft skills',
    points: [
      'Empathetic leader who builds clarity and strong team culture.',
    ],
    tags: ['Leadership', 'Communication', 'Coaching']
  }
]

</script>

<template>
  <section id="skills" class="px-5 py-16 bg-secondary-500/45 border-t border-b border-black/5 py-24">
    <div class="mx-auto max-w-[1120px] reveal transition">
      <!-- Block 1: Toolkit -->
      <span class="ml-5 inline-block px-2.5 py-2 rounded-full bg-white/40 text-slate text-xs font-semibold">
      TOOLKIT
    </span>
      <h2 class="text-3xl font-bold mt-2 ml-5 mb-4">Skills</h2>

      <!-- Logo grid -->
      <ul
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6 ml-5"
          aria-label="Tools and platforms I use"
      >
        <li v-for="tool in tools" :key="tool.name" class="group flex flex-col items-center gap-2">
          <a :href="tool.url" target="_blank" rel="noreferrer" class="focus:outline-none">
            <div
                class="size-24 md:size-28 grid place-items-center rounded-2xl bg-white/95 ring-1 ring-black/5 shadow-sm
                   transition-transform duration-300 group-hover:scale-[1.04]"
            >
              <img
                  :src="tool.img"
                  :alt="tool.name"
                  class="max-h-14 object-contain"
                  loading="lazy"
                  decoding="async"
              />
            </div>
          </a>
          <p class="text-sm md:text-base text-slate-800">{{ tool.name }}</p>
        </li>
      </ul>

      <!-- Block 2: Capabilities -->
      <div class="mt-10 grid md:grid-cols-3 gap-5 ml-5">
        <article
            v-for="cap in capabilities"
            :key="cap.title"
            class="bg-white/90 border border-black/5 rounded-2xl shadow p-5"
        >
          <h3 class="text-lg font-semibold">{{ cap.title }}</h3>
          <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
            <li v-for="point in cap.points" :key="point" class="flex items-start gap-2">
              <span class="i-lucide-check-circle-2 text-primary-600 mt-0.5"></span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <!-- Optional chips for soft skills -->
          <div v-if="cap.tags?.length" class="mt-3 flex flex-wrap gap-2">
          <span
              v-for="t in cap.tags"
              :key="t"
              class="px-2 py-0.5 text-xs rounded-full bg-primary-200 text-primary-700"
          >
            {{ t }}
          </span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!--  <section id="skills" class="px-5 py-16 bg-secondary-500/45">-->
  <!--    <div class="mx-auto max-w-[1120px]">-->
  <!--    <span-->
  <!--        class="inline-block px-2.5 py-1 rounded-full bg-primary-50 ml-5 text-primary text-xs font-semibold">-->
  <!--      Toolkit-->
  <!--    </span>-->
  <!--      <h2 class="text-3xl font-bold mt-2 ml-5 mb-4">Skills</h2>-->
  <!--    </div>-->
  <!--    <div class="reveal transition mx-auto max-w-[1120px] grid grid-cols-1 md:grid-cols-2">-->
  <!--      <div>-->
  <!--        <div class="m-[30px] grid grid-cols-3 lg:grid-cols-5 gap-3 ml-5">-->
  <!--          <div-->
  <!--              v-for="(logo, l) in logoSkills"-->
  <!--              :key="l"-->
  <!--              class="flex flex-col items-center gap-2"-->
  <!--          >-->
  <!--            <a :href="logo.url" target="_blank" class="block">-->
  <!--              &lt;!&ndash; uniform square canvas for every logo &ndash;&gt;-->
  <!--              <div-->
  <!--                  class="aspect-square size-20 grid place-items-center rounded-xl bg-white/70 ring-1 ring-black/5 px-2">-->
  <!--                <img-->
  <!--                    :src="logo.img"-->
  <!--                    :alt="logo.name"-->
  <!--                    loading="lazy"-->
  <!--                    decoding="async"-->
  <!--                    class="block max-h-12 md:max-h-14 w-auto object-contain"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </a>-->
  <!--            <p class="text-center text-base md:text-lg leading-tight min-h-[1.75rem]">-->
  <!--              {{ logo.name }}-->
  <!--            </p>-->
  <!--          </div>-->
  <!--        </div>-->

  <!--      </div>-->
  <!--      <div class="flex flex-col">-->
  <!--        <div v-for="(s, i) in skills" :key="i"-->
  <!--             data-animate-->
  <!--             class="bg-white/90 border border-black/5 rounded-2xl shadow p-4 mt-4">-->
  <!--          <h3 class="text-lg font-semibold">{{ s.title }}</h3>-->
  <!--          <p class="text-sm mt-1 text-slate-700">{{ s.text }}</p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->
</template>