<template>
    <div class="version">
        <div class="version-number"> {{ props.version }} </div>
        <button class="download" type="submit" :onclick="downloadFile">
            <i :class="props.iconClass"></i>
            {{ props.fileType }}
        </button>
    </div>
</template>

<script setup>
    const props = defineProps(["version", "fileType", "file", "iconClass"])

    function downloadFile() {
        window.open(props.file)
    }
</script>

<style scoped>
    .download {
        background-color: #4CAF50;
        border-width: 1px;
        border-radius: 5px;
        width: 100px;
        height: 40px;
        cursor: pointer;
        margin: 0px 5px;
        color: white;
    }

    .version {
        text-align: center;
        display: inline;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .version-number {
        font-size: 14px;
        color: #666;
        margin-left: 5px;
        width: 50px;
    }
</style>