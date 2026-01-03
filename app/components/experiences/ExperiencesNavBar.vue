<template>
    <nav class="border-b dark:border-gray-600">
      <ul class="flex gap-2 overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal">
        <li v-for="item in EXPERIENCES" :key="item.title" class="flex-1 mr-1">
          <NuxtLink
          :to="item.link"
          class="
            flex
            items-center
            justify-center 
            gap-2 
            py-2 
            px-2 
            text-sm
          dark:text-gray-300
            opacity-60 hover:opacity-100
            transition-all duration-200 ease-out
            [&.router-link-exact-active]:opacity-100
          [&.router-link-exact-active]:text-gray-800
          dark:[&.router-link-exact-active]:text-white
            [&.router-link-exact-active]:border-b-2
          [&.router-link-exact-active]:border-gray-800
          dark:[&.router-link-exact-active]:border-white
         "
          >
            <img class="h-4 w-4 rounded-full" :src="item.img_path" alt="Logo da Big Data Health" srcset="">
            <span>{{ item.company_name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
</template>

<script setup lang="ts">
  import { EXPERIENCES } from "./experiences-data"
</script>
