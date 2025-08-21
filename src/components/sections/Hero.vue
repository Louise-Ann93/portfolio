<script setup>

</script>

<template>
  <section class="mx-auto max-w-[1120px] px-5 pt-16 pb-24 border-b border-black/5 reveal transition">
    <div class="grid md:grid-cols-[.9fr_1.1fr] gap-12 items-center">

      <aside data-animate
             class="bg-white/80 border border-black/5 rounded-2xl shadow-md backdrop-blur p-5 w-[320px] lg:w-full mx-auto"
      >
        <div class="relative">
          <figure class="rounded-xl overflow-hidden ring-1 ring-black/5 bg-white/40">
            <img
                src="https://mlyidxcoltsz.i.optimole.com/w:auto/h:auto/q:auto/id:4ac6d09876cd41d6720058a826e1cd7b/directUpload/selfie.png"
                alt="Profile photo of Louise Willoughby"
                class="block w-[320px] lg:w-full lg:h-[450px] object-cover"
                fetchpriority="high"
            />
          </figure>

          <!-- CSPO “stamp” -->
          <a
              href="https://bcert.me/bc/html/show-badge.html?b=zdxfzsbn"
              target="_blank"
              class="group absolute -bottom-4 -right-4 md:-bottom-12 md:-right-12 rotate-[-8deg] hover:rotate-0 transition"
              aria-label="View CSPO® credential"
          >
            <div
                class="grid place-items-center w-24 h-24 md:w-38 md:h-38 rounded-full shadow-lg ring-1 ring-black/10">
              <img src="https://mlyidxcoltsz.i.optimole.com/w:auto/h:auto/q:auto/id:8a776ec7ab5bbdd61f3b4ce2e356a393/directUpload/cspo.png" alt="cspo cert" class="w-24 h-24 md:h-36 md:w-36"/>
            </div>
          </a>
        </div>
      </aside>

      <div>
        <h1 class="text-4xl/tight font-bold">
          Hi, I'm Lou
          <span
              class="block text-xl mt-2 text-primary-700 font-semibold">I build digital products that feel clear, calm and human.</span>
        </h1>

        <p class="mt-4 text-[15px] leading-7 text-slate-700">
          I bridge the gap between users, teams and technology - bringing an end to end view that helps products work
          better for people and for your business.
        </p>

        <div class="mt-4 flex flex-wrap gap-3">
          <a href="#experience"
             class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-white bg-primary-500 hover:bg-primary-400 transition">View
            experience →</a>
          <a href="#contact"
             class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold border border-primary-600 text-primary hover:text-primary-700 hover:bg-primary-200 transition">Get
            in touch</a>
        </div>

        <div class="mt-4 flex items-center flex-wrap">
          <img src="../../assets/img/location-pin-thin.svg" alt="location icon" width="25">
          <span class="text-md leading-7 text-slate-700">Suffolk, UK</span>
        </div>
      </div>
    </div>
  </section>
</template>