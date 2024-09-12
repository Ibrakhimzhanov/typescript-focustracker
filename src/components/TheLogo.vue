<script setup lang="ts">
import { currentPage, navigate } from '../router'
import { scrollToCurrentHour } from '../timeline-items'
import { PageName } from '../types';

function handleClick(): void {
  currentPage.value === PageName.TIMELINE ? scrollToCurrentHour(true) : navigate(PageName.TIMELINE)
}
</script>

<template>
  <a :href="`#${PageName.TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.jpg" alt="Logotype" class="h-9" />
  </a>
</template>
