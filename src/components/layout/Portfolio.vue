<template>
  <div id="top" class="min-h-dvh bg-[var(--bg,#f6fbff)] text-slate-900 font-sans">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div class="mx-auto max-w-[1120px] px-5 h-16 md:h-18 grid grid-cols-[1fr_auto_auto] items-center gap-4">
        <!-- Brand -->
        <a href="#top" class="flex items-center gap-3">
          <span
              class="size-9 grid place-items-center rounded-xl bg-primary-600 text-white font-bold shadow-md">LW</span>
          <span class="font-semibold">Louise Willoughby</span>
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
              :aria-expanded="menuOpen.toString()"
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

    <!-- Decorative wave -->
    <div class="relative h-32 opacity-45">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute inset-0 w-full h-full">
        <path :fill="brand.secondary"
              d="M0,192L60,202.7C120,213,240,235,360,256C480,277,600,299,720,293.3C840,288,960,256,1080,224C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
    </div>

    <!-- Hero -->
    <section class="mx-auto max-w-[1120px] px-5 py-16">
      <div class="grid md:grid-cols-[.9fr_1.1fr] gap-12 items-center">

        <aside data-animate
               class="reveal transition duration-700 bg-white/80 border border-black/5 rounded-2xl shadow-md backdrop-blur p-5"
        >
          <figure class="rounded-xl overflow-hidden ring-1 ring-black/5 bg-white/40">
            <img
                src="../../assets/selfie.png"
                alt="Profile photo of Louise Willoughby"
                class="block w-full h-[360px] lg:h-[420px] object-cover"
            />
          </figure>
          <p class="text-sm mt-3 text-slate-700">
            Currently: Lead UX Strategist at <strong>hosting.com / World Host Group</strong>.
          </p>
        </aside>

        <div>
          <h1 class="text-4xl/tight font-bold">
            Louise Willoughby
            <span
                class="block text-xl mt-2 text-primary-700 font-semibold">Building calm, clear, user-centred products.</span>
          </h1>

          <p class="mt-4 text-[15px] leading-7 text-slate-700">
            I’m a product-focused leader with a hands-on journey from sales & support → data → front-end → strategy.
            I understand products end-to-end and bring that perspective into every decision.
          </p>

          <div class="mt-4 flex flex-wrap gap-3">
            <a href="#experience"
               class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-white bg-primary-500 hover:bg-primary-400 transition">View
              experience →</a>
            <a href="#contact"
               class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold border border-primary-600 text-primary hover:text-primary-700 hover:bg-secondary-200 transition">Get
              in touch</a>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary">UX Strategy</span>
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary">Roadmaps & Prioritisation</span>
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary">Onboarding & Retention</span>
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary">Research → Delivery</span>
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary">CSPO®</span>
          </div>
        </div>

      </div>
    </section>

    <!-- About -->
    <section id="about" class="mx-auto max-w-[1120px] px-5 py-16">
      <span class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">About</span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Personal statement</h2>
      <p data-animate
         class="reveal transition duration-700 text-[15px] leading-7 text-slate-800 bg-white/60 border shadow border-black/5 rounded-2xl p-4">
        I’m a product focused leader with a hands-on journey that’s taken me from sales and support, through data
        analysis and front-end development, to delivering strategy at a global scale. I understand products end-to-end
        from the customers using them, to the teams building them, to the systems that hold everything together and I
        bring that perspective into every decision.
        I care about people, progress and purpose. I’ve built high performing teams, turned underperformance around, and
        created strong feedback cultures. I thrive in fast moving, collaborative environments where clarity,
        prioritisation and measurable outcomes matter and I’m passionate about delivering products that work for both
        the business and the people who use them.
      </p>
    </section>

    <!-- Highlights -->
    <section id="achievements" class="mx-auto max-w-[1120px] px-5 py-16">
      <span
          class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Highlights</span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Career highlights</h2>
      <div class="grid md:grid-cols-2 gap-5">
        <article v-for="(h, i) in highlights" :key="i"
                 data-animate
                 class="reveal transition duration-700 bg-white/90 border border-black/5 rounded-2xl shadow p-4">
          <h3 class="text-lg font-semibold">{{ h.title }}</h3>
          <p class="text-sm mt-1 text-slate-700">{{ h.text }}</p>
        </article>
      </div>
    </section>

    <!-- Experience -->
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

    <!-- Certifications -->
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

    <!-- Skills -->
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

    <!--    &lt;!&ndash; Awards &ndash;&gt;-->

    <!--    <section id="awards" class="mx-auto max-w-[1120px] px-5 py-16">-->
    <!--      <span-->
    <!--          class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Nice things</span>-->
    <!--      <h2 class="text-3xl font-bold mt-2 mb-4">Awards & recognition</h2>-->

    <!--      <div v-for="(a, i) in awards" :key="i"-->
    <!--           data-animate-->
    <!--           class="reveal transition duration-700 bg-white/90 border border-black/5 rounded-2xl shadow p-4 m-4 flex items-center gap-3">-->
    <!--        <div aria-hidden class="text-xl">🏅</div>-->
    <!--        <p class="text-sm">{{ a }}</p>-->
    <!--      </div>-->
    <!--    </section>-->

<!--    &lt;!&ndash; Awards &ndash;&gt;-->
<!--    <section id="awards" class="mx-auto max-w-[1120px] px-5 py-16">-->
<!--  <span class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">-->
<!--    Nice things-->
<!--  </span>-->
<!--      <h2 class="text-3xl font-bold mt-2 mb-4">Awards & recognition</h2>-->

<!--      &lt;!&ndash; Minimal, just items with label & content &ndash;&gt;-->
<!--      <UAccordion :items="awardItems" multiple class="mt-4"/>-->
<!--    </section>-->

    <!-- Awards -->
    <section id="awards" class="mx-auto max-w-[1120px] px-5 py-16">
  <span class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">
    Nice things
  </span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Awards & recognition</h2>

      <!-- Pure API usage -->
      <UAccordion :items="awardItems" multiple class="mt-4">
        <!-- item 0 -->
        <template #item-0>
          <div class="grid md:grid-cols-[1fr_auto] gap-4 items-start">
            <p class="text-sm leading-6 text-slate-700 whitespace-pre-line">
              Recognised for driving UX strategy and cross-functional delivery
              across 35+ brands with measurable improvements to adoption and retention.
            </p>
            <img
                v-if="awardImages.dwa"
                :src="awardImages.dwa"
                alt="Digital Women Awards"
                class="w-40 h-28 object-cover rounded-xl ring-1 ring-black/5"
                loading="lazy"
                decoding="async"
            />
          </div>
        </template>

        <!-- item 1 -->
        <template #item-1>
          <p class="text-sm leading-6 text-slate-700">
            Finalist for leadership impact, product culture, and delivery excellence.
          </p>
        </template>

        <!-- item 2 -->
        <template #item-2>
          <p class="text-sm leading-6 text-slate-700">
            Named two years running for contribution to product and UX leadership.
          </p>
        </template>

        <!-- item 3 -->
        <template #item-3>
          <p class="text-sm leading-6 text-slate-700">
            Nominated for achievements in product strategy and cross-functional delivery.
          </p>
        </template>

        <!-- item 4 -->
        <template #item-4>
          <p class="text-sm leading-6 text-slate-700">
            Recognised for technical writing and community contribution.
          </p>
        </template>
      </UAccordion>
    </section>



    <!-- Contact -->
    <section id="contact" class="mx-auto max-w-[1120px] px-5 py-16">
      <span
          class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold">Contact</span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Let’s talk</h2>
      <div class="grid md:grid-cols-[1fr_auto] gap-4 bg-white/90 border border-black/5 shadow rounded-2xl p-4">
        <div>
          <h3 class="text-lg font-semibold">Open to Product Manager / Product Owner and UX-led roles.</h3>
          <p class="text-sm text-slate-600">UK-based • Remote-first • References available on request.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700"
             href="mailto:louiseawilloughby@outlook.com">Email me</a>
          <a class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold border border-primary-600 text-primary-700 hover:bg-primary-50"
             href="https://www.linkedin.com/in/louiseawilloughby/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a
              href="mailto:madebywillo@gmail.com?subject=CV%20request&body=Hi%20Louise,%0D%0A%0D%0APlease%20could%20you%20share%20your%20CV.%0D%0A%0D%0AThanks!"
              class="btn btn-accent hover-float"
          >
            Request CV
          </a>
          <button
              class="btn btn-outline hover-float"
              @click="navigator.clipboard.writeText(email)"
              title="Copy email to clipboard"
          >
            Copy email
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-black/5 mt-12">
      <div class="mx-auto max-w-[1120px] px-5 py-5 text-sm flex items-center justify-between">
        <p>© {{ new Date().getFullYear() }} Louise Willoughby. All rights reserved.</p>
        <a href="#top" class="opacity-80 hover:opacity-100">Back to top ↑</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'

import cspoLogo from '@/assets/certs/cspo.png'

const cvUrl = '/Louise-Willoughby-CV.pdf'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

const brand = {secondary: '#408c8f'}

const initials = (s = '') =>
    s.split(/\s+/).map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()

const links = [
  {href: '#about', label: 'About'},
  {href: '#experience', label: 'Experience'},
  {href: '#achievements', label: 'Highlights'},
  {href: '#certifications', label: 'Certifications'},
  {href: '#skills', label: 'Skills'},
  {href: '#awards', label: 'Awards'},
  {href: '#contact', label: 'Contact'},
]

const highlights = [
  {
    title: 'End-to-end product journey',
    text: 'Progressed from Sales → Head of Product Development with hands-on experience across the entire lifecycle.'
  },
  {
    title: 'Global platform MVP in 3.5 months',
    text: 'Delivered and scaled a hosting platform across multiple brands with billing, server control and 3rd-party integrations.'
  },
  {
    title: 'Certified & award-winning',
    text: 'CSPO; Developer of the Year; Young Entrepreneur Finalist; Women in Tech Excellence nominee; Digital Woman to Watch.'
  },
  {
    title: 'Product culture & coaching',
    text: 'Embedded a culture of user insight and delivery; mentored engineers and PMs; led cross-functional change.'
  },
]

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

const awardItems = [
  {
    label: 'Digital Women Awards — Developer of the Year (Winner, 2023)',
    content: `Recognised for driving UX strategy and cross-functional delivery
across 35+ brands with measurable improvements to adoption and retention.`
  },
  {
    label: 'EVA Women’s Business Awards — Young Entrepreneur (Finalist, 2024)',
    content: `Finalist for leadership impact, product culture, and delivery excellence.`
  },
  {
    label: 'Digital Woman to Watch (2022 & 2023)',
    content: `Named two years running for contribution to product and UX leadership.`
  },
  {
    label: 'Women in Tech Excellence — Nominee (2024)',
    content: `Nominated for achievements in product strategy and cross-functional delivery.`
  },
  {
    label: 'dev.to — Author of the Year (2022)',
    content: `Recognised for technical writing and community contribution.`
  }
]


onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    })
  }, {threshold: 0.12})

  document.querySelectorAll('[data-animate], .reveal').forEach((el) => io.observe(el))
})


</script>

