<template>
  <main class="flex flex-col justify-between items-center mt-15 py-8">
    <h1 class="text-5xl font-bold text-center px-4 w-full max-w-5xl mb-12">
      {{ ok ? 'Bypass activated' : 'Bypass failed' }}
    </h1>

    <div class="px-4 text-2xl w-full max-w-5xl text-center space-y-4">
      <p v-if="ok">
        The bypass cookie has been activated on your browser. You should be able to access the entire site now without getting hit by any of the filters or a VPN, although it is still highly recommended.
      </p>
      <p v-else>
        The bypass cookie could not be set. Your browser may be blocking cookies, or you may be in a private/incognito window that restricts cookie storage. Please enable cookies and try again.
      </p>

      <p>Click <a href="/" class="text-white underline">here</a> to go back to the main page.</p>
    </div>
  </main>
</template>

<script setup>
const ok = ref(false);

const local = (h) => h === 'localhost' || h === '127.0.0.1' || h === '::1';
const has = () => document.cookie.split(';').some(c => c.trim().startsWith('fuck_ofcom='));

onMounted(() => {
  try {
    const d = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const h = window.location.hostname;
    const dom = local(h) ? '' : '; domain=.3kh0.net';
    const sec = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `fuck_ofcom=yup; expires=${d.toUTCString()}${dom}; path=/; SameSite=Lax${sec}`;
    ok.value = has();
  } catch {
    ok.value = false;
  }
  if (ok.value) console.log('FUCK OFCOM fuck_ofcom=allowed');
});
</script>
