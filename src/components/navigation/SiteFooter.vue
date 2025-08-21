<script setup>

</script>

<template>

  <footer class="border-t border-black/5 bg-white/70 backdrop-blur-md px-20 pt-12">
    <section id="contact" class="flex flex-col items-center pb-12">
      <h2 class="text-3xl font-bold mt-2 mb-4">Let's Talk</h2>
      <div class="text-center">
        <h3 class="text-lg font-semibold">Open to Product Manager / Product Owner and UX-led roles.</h3>
        <p class="text-md text-slate-600">Feel free to reach out to me if you have a query or simply want to connect</p>
      </div>
      <div class="flex flex-wrap gap-3 pt-8">
        <a class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700"
           href="mailto:madebywillo@gmail.com">Email me</a>
        <a class="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-semibold border border-primary-600 text-primary-700 hover:bg-primary-200"
           href="https://www.linkedin.com/in/louiseawilloughby/" target="_blank" rel="noreferrer">LinkedIn</a>
        <button
            class="btn btn-outline hover-float"
            @click="navigator.clipboard.writeText(email)"
            title="Copy email to clipboard"
        >
          Copy email
        </button>
      </div>
    </section>

    <div class="border-t border-black/5 p-4">
      <div class="text-sm flex items-center justify-between">
        <p>© {{ new Date().getFullYear() }} Louise Willoughby. All rights reserved.</p>
        <a href="#top" class="sticky bottom-4 p-3 bg-primary rounded-full text-white opacity-80 hover:opacity-100">Back to top ↑</a>
      </div>
    </div>

  </footer>
</template>

<style scoped>

</style>