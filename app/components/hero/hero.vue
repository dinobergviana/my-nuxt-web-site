<template>
  <section class="bg-white dark:bg-gray-800 relative flex flex-col items-center justify-center h-screen px-4 transition-colors duration-300 ease-in-out" id="hero">
    <div class="mb-2">
      <h1 class="font-bold text-5xl dark:text-white">Olá, eu sou Dinobergue Viana</h1>
    </div>
    <div class="mb-2 dark:text-white">
      <span> Programador </span>
    </div>
    <div class="flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/dinobergue-viana-28574218b/"
        target="_blank"
        class="media-link"
      >
        1
      </a>
      <a
        href="https://github.com/dinobergviana"
        target="_blank"
        class="media-link"
      >
        2
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5586998055574"
        target="_blank"
        class="media-link"
      >
        3
      </a>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.media-link {
  text-decoration: none;
  opacity: 0.7;
}

.media-link:hover {
  opacity: 1;
}

.media-link img {
  height: 20px;
}

.dot {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: var(--gray-200);
}
</style>