<script setup>
import dwaLogo from '@/assets/img/digital-women.webp'
import evaLogo from '@/assets/img/Enterprise-Vision-Awards.png'

const featuredAwards = [

  {
    title: 'Young Entrepreneur — Finalist',
    org: 'EVA Women’s Business Awards',
    year: '2024',
    blurb:
        `In 2024, I was honoured to be shortlisted as a Young Entrepreneur Finalist at the EVA Women’s Business Awards - one of the UK’s leading celebrations of women in business. The recognition reflected my journey from starting in sales with no tech background to leading product development and UX strategy at Nimbus Hosting, as well as my work building sustainable digital products and supporting community initiatives.

         This award also marked a personal milestone. Having overcome challenges and health struggles, it stood as a reminder that resilience, determination and a focus on people and purpose can drive both career growth and meaningful impact.`,
    logo: evaLogo,
    link: 'https://enterprisevisionawards.co.uk/entrants/louise-willoughby/'
  },
  {
    title: 'Developer of the Year — Winner',
    org: 'Digital Women Awards',
    year: '2023',
    blurb:
        `In 2023, I was proud to be named Developer of the Year at the Digital Women Awards, recognising the progress I’d made in my career and the impact of my work as a front-end developer and team leader. The award celebrated my journey from starting in sales to becoming a developer and mentor, building core features for Nimbus Hosting’s platform, and helping shape a stronger product culture

        This recognition also highlighted the wider contributions I’d made to the tech community - from creating side projects and sharing my learning publicly, to mentoring colleagues and driving improvements in accessibility and design alignment. Winning Developer of the Year was a huge milestone, and a reminder of how far I’d come since first discovering my passion for development.`,
    logo: dwaLogo,
    link: 'https://digitalwomen.live/digital-women-awards-2023-a-celebration-of-excellence/ '
  },
]

const awardItems = [
  {
    label: 'Women in Tech Excellence — Nominee (2024)',
    content: `Nominated for the Women in Tech Excellence Awards 2024, recognising my leadership in product development and UX, mentoring teams, and delivering impactful features at scale.`
  },
  {
    label: 'Digital Woman to Watch (2022 & 2023)',
    content: `Recognised by the Digital Women Awards as both a Finalist and a Woman to Watch across consecutive years. These honours highlighted my growth from trainee to developer and leader, my contributions to Nimbus Hosting’s platform, and my wider involvement in the tech community — from building impactful features to sharing knowledge and mentoring others.`
  },
  {
    label: 'dev.to — Author of the Year (2022)',
    content: `Named Author of the Year on dev.to in 2022, after sharing blogs on my journey as a developer. My content reached over 14,000 readers and connected me with a community of nearly 600 followers — an achievement I never expected when I first started writing.`
  }
]
</script>


<template>
  <section id="awards" class="border-t border-b border-black/5 bg-secondary-500/45 py-16">
    <div class="mx-auto max-w-[1120px] px-5">
    <span class="inline-block px-2.5 py-1 rounded-full bg-white/40 text-slate-700 text-xs font-semibold">
      NICE THINGS
    </span>
      <h2 class="text-3xl font-bold mt-2">Awards & recognition</h2>

      <!-- 1) Featured cards -->
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <article v-for="f in featuredAwards" :key="f.title"
                 class="rounded-2xl bg-white/90 border border-black/5 shadow p-4 flex items-start gap-4">
          <img v-if="f.logo" :src="f.logo" :alt="`${f.org} logo`"
               class="w-12 h-12 rounded-md ring-1 ring-black/5 object-contain"/>

          <div class="flex-1">
            <h3 class="text-lg font-semibold text-slate-900">{{ f.title }}</h3>
            <p class="text-sm text-slate-500">{{ f.org }} • {{ f.year }}</p>
            <p class="mt-2 text-sm text-slate-700 whitespace-pre-line">{{ f.blurb }}</p>
            <a v-if="f.link" :href="f.link" target="_blank" rel="noreferrer"
               class="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary hover:underline">
              View announcement <span>↗</span>
            </a>
          </div>
        </article>
      </div>

      <UAccordion :items="awardItems" multiple class="px-5 mt-4">
        <!-- item 0 -->
        <template #item-0>
          <div class="grid md:grid-cols-[1fr_auto] gap-4 items-start">
            <img
                v-if="awardImages.dwa"
                :src="awardImages.dwa"
                alt="Awards"
                class="w-40 h-28 object-cover rounded-xl ring-1 ring-black/5"
                loading="lazy"
                decoding="async"
            />
          </div>
        </template>
      </UAccordion>

    </div>
  </section>


</template>

<style scoped>

</style>