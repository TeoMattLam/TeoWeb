<script setup lang="ts">
import Version from '../Version.vue';

</script>

<template>
    <Version version="1.2 (latest)" file-type=".apk" file="/files/Impostor1.2.apk" icon-class="fa-brands fa-android"/>
    <p>
        I'm not the one who invented the game. It works like this: every player gets the same word, except for the impostor, who doesn't know it. Every player says a word correlated to the initial word and the impostor has to guess the word based on what the other players say. After two turns the players vote to kick someone out. If they guess who the impostor is, the impostor can only win if they guess the word.
    </p>
    <h1 id="how-to-use">How To Use</h1>
    <p>
        I think the UI is pretty intuitive, but since it's made by me and my code sucks it's probably better if I explain it anyways.<br>
        With the plus and minus buttons you can adjust the number of players and impostors.<br>
        By moving the slider you increese the odds of getting a word either from the default list or one of the three custom profiles.<br>
        To edit the profiles, click on the edit button and add your words, one per line.<br>
        Then just play, read your word and pass the phone to the next player.
    </p>
</template>