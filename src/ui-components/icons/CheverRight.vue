<template>
    <svg class="size-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.05806 4.55806C6.81398 4.80214 6.81398 5.19786 7.05806 5.44194L11.6161 10L7.05806 14.5581C6.81398 14.8021 6.81398 15.1979 7.05806 15.4419C7.30214 15.686 7.69786 15.686 7.94194 15.4419L12.9419 10.4419C13.186 10.1979 13.186 9.80214 12.9419 9.55806L7.94194 4.55806C7.69786 4.31398 7.30214 4.31398 7.05806 4.55806Z"
            fill="#939494" :class="fillColor" />
    </svg>
</template>
<script>
export default {
    name: 'CheverRight',
    props: {
        fillColor: String
    }
}
</script>