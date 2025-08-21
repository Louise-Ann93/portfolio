<script setup>
import {ref} from 'vue'

// 1) Make sure the email actually exists here.
const email = 'madebywillo@gmail.com'

// Small feedback flag
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    showCopied()
  } catch (err) {
    const ta = document.createElement('textarea')
    ta.value = email
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      showCopied()
    } finally {
      document.body.removeChild(ta)
    }
  }
}

function showCopied() {
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
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

        <!-- Button -->
        <button
            type="button"
            class="btn btn-accent hover-float relative"
            @click="copyEmail"
            title="Copy email to clipboard"
        >
          Copy email
          <span
              v-if="copied"
              class="absolute -right-6 -top-6 rounded-md px-2 py-2 text-sm text-white bg-black/90"
              aria-live="polite"
          >
            Copied!
          </span>
        </button>

      </div>
    </section>

    <div class="border-t border-black/5 p-4">
      <div class="text-sm flex items-center justify-between">
        <p>© {{ new Date().getFullYear() }} Louise Willoughby. All rights reserved.</p>
        <a href="#top" class="w-18 p-3 bg-primary rounded-full text-white opacity-80 hover:opacity-100">Top ↑</a>
      </div>
    </div>

  </footer>
</template>

<style scoped>

</style>