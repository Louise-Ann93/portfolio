<script setup>
const awardItems = [
  {
    label: 'EVA Women’s Business Awards — Young Entrepreneur Finalist (2024)',
    content: `Finalist for leadership impact, product culture, and delivery excellence.`
  },
  {
    label: 'Women in Tech Excellence — Nominee (2024)',
    content: `Nominated for achievements in product strategy and cross-functional delivery.`
  },
  {
    label: 'Digital Women Awards — Developer of the Year Winner (2023)',
    content: `Recognised for driving UX strategy and cross-functional delivery
across 35+ brands with measurable improvements to adoption and retention.`
  },
  {
    label: 'Digital Woman to Watch (2022 & 2023)',
    content: `Named two years running for contribution to product and UX leadership.`
  },
  {
    label: 'dev.to — Author of the Year (2022)',
    content: `Recognised for technical writing and community contribution.`
  }
]

</script>

<template>
  <section id="awards" class="border-t border-b border-black/5 bg-secondary-500/45 backdrop-blur-md py-24">
    <div class="mx-auto max-w-[1120px] px-5">
  <span class="ml-5 inline-block px-2.5 py-2 rounded-full bg-white/40 text-slate text-xs font-semibold">
    NICE THINGS
  </span>
      <h2 class="ml-5 text-3xl font-bold mt-2 mb-4">Awards & recognition</h2>

      <!-- Pure API usage -->
      <UAccordion :items="awardItems" multiple class="ml-5 mt-4">
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
    </div>
  </section>

</template>

<style scoped>

</style>