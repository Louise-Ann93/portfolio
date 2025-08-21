<script setup>
const highlights = [
  {
    title: 'From Sales to Strategy',
    text: 'Grew from sales and support into Head of Product Development, gaining hands-on experience across the full product and customer lifecycle.'
  },
  {
    title: 'Fast, global delivery',
    text: 'Launched a hosting platform MVP in 3.5 months, scaled across multiple brands and integrated billing, server control and third-party tools with a fully remote, cross-functional team.'
  },
  {
    title: 'Recognition & awards',
    text: 'CSPO certified and winner of multiple industry awards, including Developer of the Year and Young Entrepreneur Finalist, for leadership, delivery and community contribution.'
  },
  {
    title: 'Shaping product culture',
    text: 'Built a product culture focused on user insight, collaboration, and delivery — mentoring teams and leading cross-functional change.'
  },
  {
    title: 'Beyond work',
    text: 'Active in community and charity projects, including fundraising for Herts Young Homeless and WoodGreen, as well as driving team mental health initiatives.'
  },
]

</script>

<template>
  <section id="achievements" class="px-5 py-16 border-t border-b border-black/5 py-24">
    <div class="mx-auto max-w-[1120px] px-5">
      <span
          class="inline-block px-2.5 py-2 rounded-full bg-primary/40 text-slate text-xs font-semibold">HIGHLIGHTS</span>
      <h2 class="text-3xl font-bold mt-2 mb-4">Career highlights</h2>
    </div>
    <div class="md:mx-26 flex flex-col lg:flex-row gap-5">
      <article v-for="(h, i) in highlights" :key="i"
               data-animate
               class="reveal transition bg-white/90 border border-black/5 rounded-2xl shadow p-4">
        <h3 class="text-lg font-semibold">{{ h.title }}</h3>
        <p class="text-sm mt-1 text-slate-700">{{ h.text }}</p>
      </article>
    </div>
  </section>
</template>
