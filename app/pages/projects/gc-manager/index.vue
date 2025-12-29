<template>
  <section
    class="w-full min-h-screen pt-12 m-auto text-gray-700 font-inter dark:bg-gray-800 dark:text-gray-200"
  >
    <div class="max-w-4xl mx-auto px-4 text-justify">
      <h1
        id="gc-manager"
        class="mt-4 text-5xl font-bold mb-[25px] text-gray-700 dark:text-gray-200"
      >
        {{ $t("gcManager.title") }}
      </h1>

      <article>
        <h2 class="text-[25px] font-bold my-2">
          {{ $t("gcManager.howItStarted") }}
        </h2>
        <p class="text-[18px]">
          {{ $t("gcManager.p1.partOne") }}
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          <span>{{ $t("gcManager.p2.partOne") }}</span>
          <strong>{{ $t("gcManager.p2.strongText") }}</strong>
          <span>{{ $t("gcManager.p2.partTwo") }}</span>
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          {{ $t("gcManager.p3.partOne") }}
          <a
            href="https://www.canva.com"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            target="_blank"
            >Canva</a
          >
          <strong class="text-red-500">{{
            $t("gcManager.p3.strongText")
          }}</strong>
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          <span>
            {{ $t("gcManager.p4.partOne") }}
          </span>
          <strong class="text-green-600">{{
            $t("gcManager.p4.strongTextOne")
          }}</strong>
          <span>
            {{ $t("gcManager.p4.partTwo") }}
          </span>
          <span class="italic">{{ $t("gcManager.p4.strongTextTwo") }}</span>
          <span>
            {{ $t("gcManager.p4.partThree") }}
          </span>
          <a
            href="https://www.npmjs.com/package/canvas/v/2.0.0-alpha.7"
            class="mb-4 text-blue-600 hover:text-sky-500 dark:text-yellow-500 dark:hover:text-yellow-600 ease-in"
            target="_blank"
            >node-canvas</a
          >
          <span>
            {{ $t("gcManager.p4.partFour") }}
          </span>
        </p>
      </article>
      <article class="mt-8">
        <p class="text-[18px]">
          {{ $t("gcManager.p5.partOne") }}
        </p>
      </article>

      <article>
        <h2 class="text-[25px] font-bold mt-8 mb-2">
          {{ $t("gcManager.technical.title") }}
        </h2>
        <h3 class="font-bold text-[20px] my-[1rem]">
          🧱 {{ $t("gcManager.technical.mvc.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.mvc.description") }}
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          📦 {{ $t("gcManager.technical.docker.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.docker.description") }}
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🗃️ {{ $t("gcManager.technical.database.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.database.description") }}
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🧹 {{ $t("gcManager.technical.quality.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.quality.description") }}
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          ✅ {{ $t("gcManager.technical.tests.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.tests.description") }}
            </p>
          </li>
        </ul>

        <h3 class="font-bold text-[20px] my-[1rem]">
          🔐 {{ $t("gcManager.technical.auth.title") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>
              {{ $t("gcManager.technical.auth.description") }}
            </p>
          </li>
        </ul>
      </article>

      <article>
        <h2 class="text-[25px] font-bold mt-8 mb-2">
          {{ $t("gcManager.stack.title") }}
        </h2>
        <h3 class="font-bold text-[20px] my-[1rem]">
          Frontend - {{ $t("gcManager.stack.frontend.description") }}
        </h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>React, HTML, CSS, Javascript.</p>
          </li>
        </ul>
        <h3 class="font-bold text-[20px] my-[1rem]">Backend</h3>
        <ul class="list-disc pl-12">
          <li class="text-[18px] leading-[1.8rem] mb-[.5rem]">
            <p>Node, Next, Docker, Postgres, Jest.</p>
          </li>
        </ul>
        <p class="text-[18px] leading-[1.8rem] mb-[2rem]">
          {{ $t("gcManager.extra.partOne") }}
        </p>
      </article>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  hasBackButton: true,
  backButtonPath: "/",
  hasBackToTopButton: true,
  backToTopPath: "#gc-manager",
});
</script>
