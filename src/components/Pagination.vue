<template>
    <ul v-if="totalPages > 1" class="pagination-container">
        <li class="pagination-items hover:pagination-active" @click="goToPreviousPage"
            :class="{ 'pagination-disabled': isFirstPage }">
            <CheverLeft :fillColor="'group-hover:fill-white'" />
        </li>

        <li v-for="pageNumber in pages" :key="pageNumber" class="pagination-items hover:pagination-active"
            :class="{ 'pagination-active': pageNumber === currentPage }" @click="changePage(pageNumber)">
            {{ pageNumber }}
        </li>

        <li class="pagination-items hover:pagination-active" @click="goToNextPage"
            :class="{ 'pagination-disabled': isLastPage }">
            <CheverRight :fillColor="'group-hover:fill-white'" />
        </li>
    </ul>
</template>
<script>

export default {
    props: {
        size: {
            type: Number,
            default: 10,
        },
        page: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 15,
        },
    },
    data() {
        return {
            currentPage: this.page,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.size);
        },
        pages() {
            return Array.from({ length: this.totalPages }, (_, i) => i + 1);
        },
        isFirstPage() {
            return this.currentPage === 1;
        },
        isLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    watch: {
        page(newPage) {
            this.currentPage = newPage;
        },
    },
    methods: {
        changePage(pageNumber) {
            if (pageNumber !== this.currentPage) {
                this.currentPage = pageNumber;
                this.$emit('update:page', this.currentPage);
            }
        },
        goToPreviousPage() {
            if (!this.isFirstPage) {
                this.changePage(this.currentPage - 1);
            }
        },
        goToNextPage() {
            if (!this.isLastPage) {
                this.changePage(this.currentPage + 1);
            }
        },
    },
};
</script>
<style scoped>
.pagination-disabled {
    pointer-events: none;
    opacity: 0.6;
}
</style>
