<script setup>
import selfieUrl from '@/assets/img/selfie.png'
</script>

<template>
  <section class="mx-auto max-w-[1120px] px-5 pt-16 pb-24">
    <div class="grid md:grid-cols-[.9fr_1.1fr] gap-12 items-center">

      <aside data-animate
             class="reveal transition bg-white/80 border border-black/5 rounded-2xl shadow-md backdrop-blur p-5"
      >
        <figure class="rounded-xl overflow-hidden ring-1 ring-black/5 bg-white/40">
          <img
              :src="selfieUrl"
              alt="Profile photo of Louise Willoughby"
              class="block w-full h-[360px] lg:h-[420px] object-cover"
          />
        </figure>
      </aside>

      <div>
        <h1 class="text-4xl/tight font-bold">
          Hi, I'm Lou
          <span
              class="block text-xl mt-2 text-primary-700 font-semibold">I build digital products that feel clear, calm and human.</span>
        </h1>

        <p class="mt-4 text-[15px] leading-7 text-slate-700">
          I bridge the gap between users, teams and technology - bringing an end to end view that helps products work better for people and for your business.
        </p>

        <div class="mt-4 flex flex-wrap gap-3">
          <a href="#experience"
             class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-white bg-primary-500 hover:bg-primary-400 transition">View
            experience →</a>
          <a href="#contact"
             class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold border border-primary-600 text-primary hover:text-primary-700 hover:bg-secondary-200 transition">Get
            in touch</a>
        </div>

        <div class="mt-4 flex items-center flex-wrap gap-2">
          <img src="../../assets/img/location-pin-thin.svg" alt="location icon" width="25">
            <span class="text-md leading-7 text-slate-700">Suffolk, UK</span>
        </div>
      </div>

    </div>
  </section>
</template>