<template>
    <svg class="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19 11.25C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75C6.64594 12.75 17.3541 12.75 5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25C17.3541 11.25 6.64594 11.25 19 11.25Z"
            fill="black" :class="fillColor" />
    </svg>
</template>
<script>
export default {
    name: 'Minus',
    props: {
        fillColor: String
    }
}
</script>