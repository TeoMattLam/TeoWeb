<script setup lang="ts">
    import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="cards-container">
        <ProjectCard name="Impostor" description="An offline game to play with friends."/>
        <ProjectCard name="TrackTab" description="A program that lets you use your trackpad as a drawing tablet."/>
        <ProjectCard name="RandoClasser" description="Random seat plan maker for classes in school."/>
    </div>
</template>

<style scoped>
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    gap: 20px;
  }
</style>
