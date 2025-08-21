<script setup>
import selfieUrl from "@/assets/img/snow-selfie.png";
import cspoLogo from '@/assets/img/cspo.png' // adjust path if needed

</script>

<template>
  <section id="about"
           class="border-t border-b border-black/5 bg-white/70 backdrop-blur-md py-24">
    <div
        class="max-w-[1120px] mx-auto transition reveal px-5 grid md:grid-cols-[.9fr_1.1fr] gap-5 items-center">
      <div class="pl-4">
      <span
          class="mx-auto inline-block px-2.5 py-2 rounded-full bg-primary/40 text-slate text-xs font-semibold">ABOUT ME</span>
        <h2 class="text-3xl font-bold my-4">Personal statement</h2>
        <p data-animate
           class="text-[15px] leading-7 text-slate-800 ">
          Hi, I’m Lou — a product focused leader with a hands-on journey that’s taken me from sales and support, through
          data and front-end, to shaping product and UX strategy at a global scale.
          <br><br>
          I understand products end-to-end - The people using them, the teams building them and the systems that hold
          everything together. That perspective is what I bring into every decision.
          <br><br>
          What drives me is simple - people, progress and purpose. Over the years I’ve built high performing teams,
          turned under-performance around and created feedback cultures where ideas (and people) can grow. I thrive in
          fast-moving, collaborative environments where clarity, focus and outcomes really matter.
          <br><br>
          Outside of work, you’ll usually find me hiking, tinkering with side projects, building LEGO or keeping up
          with two cats and a tortoise.
        </p>
      </div>

      <aside data-animate
             class="mx-auto reveal transition photo-stack mt-12 lg:mt-0"
      >
        <figure class="ml-auto">
          <div class="photo-stack-bg"></div>
          <img :src="selfieUrl" alt="snow selfie" class="photo-stack-img"/>
        </figure>
      </aside>

    </div>
  </section>
</template>
