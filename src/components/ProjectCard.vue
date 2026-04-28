<template>
    <div class="card">
        <img :src="icon">
        <h2>{{ name }}</h2>
        <div>
            <RouterLink class="visit" :to>Visit</RouterLink>
        </div>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps(["name", "description"])

    const name = props.name
    const icon = ref("./public/icons/" + name + ".svg")
    const to = ref("/projects/" + name)

    const description = props.description
</script>

<style scoped>
    .card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        padding: 20px;
        width: 250px;
        transition: transform 0.2s ease;
    }

    .card img {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: top;
    }

    .card h2 {
        display: inline-block;
        margin-top: 0;
        margin-left: 5px;
        color: #333;
        vertical-align: middle;
    }

    .card p {
        color: #666;
    }

    .visit {
        color: black;
        display: inline-flex;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
        border: 1px solid black;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        cursor: pointer;
    }
</style>