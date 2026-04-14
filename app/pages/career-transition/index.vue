<template>
  <div class="flex flex-col gap-4 text-justify">
    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p1.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p2.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p2.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p2.partTwo') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p3.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p4.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p5.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p5.strongText') }}
      </span>
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p6.partOne') }}
      {{ $t('me.careerTransition.content.p6.partTwo') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p6.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p6.partThree') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p7.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p7.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p7.partTwo') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p7.strongTextTwo') }}
      </span>
      {{ $t('me.careerTransition.content.p7.partThree') }}
    </p>

    <NuxtImg
      src="/images/triangulos.png"
      alt="Codigo fonte - Jogo da Velha feito em VisualG"
      class="mx-auto w-full max-w-[580px]"
      sizes="(max-width: 580px) 100vw, 580px"
    />

    <small class=""
      >Um dos primeiros códigos que eu escrevi no VisualG após retomar os estudos. Infelizmente não
      encontrei códigos mais antigos.</small
    >

    <NuxtImg
      src="/images/jogo-da-velha-exemple.png"
      alt="Codigo fonte - Jogo da Velha feito em VisualG"
      class="mx-auto w-full max-w-[580px]"
      sizes="(max-width: 580px) 100vw, 580px"
    />

    <small class=""
      >Esse é um pedaço do código fonte do desafio final do curso de Algoritmos do Curso em Vídeo,
      que foi finalizado em 19/02/2020.</small
    >

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p8.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p8.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p8.partTwo') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p9.partOne') }}
      {{ $t('me.careerTransition.content.p9.partTwo') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p9.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p9.partThree') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p10.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p11.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p11.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p11.partTwo') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p12.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p13.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p14.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p15.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p15.strongText') }}
      </span>
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p16.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p16.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p16.partTwo') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p17.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p18.partOne') }}
    </p>

    <p class="leading-relaxed">
      {{ $t('me.careerTransition.content.p19.partOne') }}
      <span class="font-semibold">
        {{ $t('me.careerTransition.content.p19.strongText') }}
      </span>
      {{ $t('me.careerTransition.content.p19.partTwo') }}
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'clean',
});
</script>
