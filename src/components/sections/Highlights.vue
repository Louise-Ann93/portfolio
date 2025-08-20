<script setup>
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

</script>

<template>
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
</template>
