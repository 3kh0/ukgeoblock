<template>
  <main class="flex flex-col justify-between items-center mt-15 py-8">
    <h1 class="text-5xl font-bold text-center px-4 w-full max-w-5xl mb-12">
      Bypass activated
    </h1>

    <div class="px-4 text-2xl w-full max-w-5xl text-center space-y-4">
      <p>
        The the bypass cookie has been activated on your browser. You should be able to access the entire site now without getting hit by any of the filters or a VPN, although it is still highly recommended.
      </p>

      <p>Click <a href="/" class="text-white underline">here</a> to go back to the main page.</p>
    </div>
  </main>
</template>

<script setup>
function x() {
  const date = new Date();
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));

  document.cookie = `fuck_ofcom=yup; expires=${date.toUTCString()}; domain=.3kh0.net; path=/; SameSite=Lax; Secure`;
  
  console.log(`FUCK OFCOM fuck_ofcom=allowed`);
}

onMounted(() => {
  x();
});
</script>
