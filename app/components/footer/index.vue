<template>
  <footer
    class="bg-white dark:bg-gray-800 flex items-center px-4 py-2 relative max-[550px]:flex-col max-[550px]:items-stretch max-[550px]:gap-2"
  >
    <!-- Desktop / larger screens: centered copyright and right-aligned link -->
    <p
      class="absolute left-1/2 transform -translate-x-1/2 text-center text-gray-500 font-medium max-[550px]:hidden"
    >
      © 2025 Dinobergue Viana
    </p>

    <div class="ml-auto max-[550px]:hidden">
      <a
        href="#hero"
        class="inline-block px-2 py-2 rounded-lg font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-gray-400"
      >
        <span class="text-sm flex items-center gap-2">
          <IconPhArrowUp size="16" weight="bold" aria-hidden="true" />
          Voltar para topo
        </span>
      </a>
    </div>

    <!-- Small screens (<= 550px): stacked column with left and right texts -->
    <div class="hidden max-[550px]:flex w-full justify-between items-center">
      <div class="text-gray-500 font-medium">© 2025 Dinobergue Viana</div>

      <div>
        <a
          href="#hero"
          aria-label="Voltar para o topo"
          class="inline-block px-2 py-2 rounded-lg font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-gray-400"
        >
          <span class="text-sm flex items-center gap-2">
            <IconPhArrowUp size="16" weight="bold" aria-hidden="true" />
            Voltar para topo
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
