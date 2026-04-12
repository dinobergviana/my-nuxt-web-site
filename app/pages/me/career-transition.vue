<template>
  <div class="fade-in pb-4 text-justify md:pb-0">
    <h2 class="mb-4 font-bold text-gray-700 dark:text-gray-200">
      {{ $t('me.careerTransition.title') }}
    </h2>

    <p class="mb-3 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p1.partOne') }}
    </p>

    <p class="mb-3 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p2.partOne') }}
      {{ $t('me.careerTransition.overview.p2.partTwo') }}
      <strong
        class="inline-block rounded-md border bg-gray-100 px-2 py-0.5 text-sm leading-none dark:bg-gray-800"
      >
        {{ $t('me.careerTransition.overview.p2.strongText') }}
      </strong>
      {{ $t('me.careerTransition.overview.p2.partThree') }}
      {{ $t('me.careerTransition.overview.p2.partFour') }}
    </p>

    <p class="mb-3 text-gray-600 dark:text-gray-300">
      {{ $t('me.careerTransition.overview.p3.partOne') }}
      <strong
        class="inline-block rounded-md border bg-gray-100 px-2 py-0.5 text-sm leading-none dark:bg-gray-800"
        >{{ $t('me.careerTransition.overview.p3.strongText') }}</strong
      >
      {{ $t('me.careerTransition.overview.p3.partTwo') }}
    </p>

    <button
      class="rounded-md border border-green-600 bg-green-200 px-2 py-1 font-semibold text-green-800"
      type="button"
      @click="openModal"
    >
      <span>
        {{ $t('me.careerTransition.overview.cta') }}
      </span>
    </button>

    <Modal @close-modal="closeModal" :is-open="isModalOpen">
      <template #modal-title>
        <div class="md:flex md:items-baseline md:gap-2">
          <h2>Teste</h2>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Modal from '~/components/global/modal/modal.vue';
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
