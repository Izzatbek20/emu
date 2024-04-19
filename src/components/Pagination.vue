<template>
    <ul class="pagination-container">
        <li class="pagination-items hover:pagination-active">
            <CheverLeft :fillColor="'group-hover:fill-white'" />
        </li>
        <li class="pagination-items hover:pagination-active pagination-active">1</li>
        <li class="pagination-items hover:pagination-active">2</li>
        <li class="pagination-items hover:pagination-active">3</li>
        <li class="pagination-items hover:pagination-active">4</li>
        <li class="pagination-items hover:pagination-active">5</li>
        <li class="pagination-items hover:pagination-active">
            <CheverRight :fillColor="'group-hover:fill-white'" />
        </li>
    </ul>
</template>
<script>

export default {
}
</script>
<style></style>