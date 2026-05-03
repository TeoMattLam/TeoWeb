<script setup lang="ts">
import Version from '../Version.vue';

</script>

<template>
    <Version version="1.0 (latest)" file-type=".zip (archive)" file="/files/TrackTab1.0.zip" icon-class="fa-brands fa-windows"/>
    <p>
        This is highly experimental. TrackTab is a program that lets you use your laptop's trackpad as a drawing tablet by tracking your finger's coordinates
        and moving the mouse cursor to the same coordinates on the screen. I still have a lot to test. It's also pretty unpractical, but it does the job if you have
        to take a quick hand note. I'd never recommend drawing with this.<br>
        More control features will be added. Sorry for the bad look, I'll fix that too.
        
        <br><br>Really huge thanks to <a href="https://github.com/emoacht">emoacht</a> for making this possible.
        <a href="https://github.com/emoacht/RawInput.Touchpad">RawInput.Touchpad</a> captures, as the name suggests, the input from the laptop's trackpad and then TrackTab
        moves the mouse on the screen.
    </p>
</template>

<style scoped>
    a {
        color: #666;
        text-decoration: underline;
    }
</style>