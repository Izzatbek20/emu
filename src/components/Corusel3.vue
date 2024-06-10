<template>
    <div class="h-full w-full max-md:h-64 max-sm:h-56">
        <div class="carousel-container relative">
            <div class="carousel">
                <div v-for="(item, index) in data" :key="index" class="carousel-slide">
                    <img :src="item" alt="image" class="object-cover object-center rounded-xl w-full h-full" srcset="">
                </div>
            </div>
            <div :style="data.length === 1 ? 'display:none' : null" class="pagination"></div>
        </div>
    </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentSlide: 0,
            slideInterval: 5000,
            slideTimer: null,
        }
    },
    methods: {
        init() {
            nextTick(() => {
                const slides = document.querySelectorAll(".carousel-slide");
                const pagination = document.querySelector(".pagination");

                if (slides && pagination) {
                    // Clear existing pagination buttons
                    pagination.innerHTML = '';

                    if (slides.length === 0) return;

                    // Show the first slide initially
                    slides[this.currentSlide].classList.add("active");

                    // Create pagination buttons
                    slides.forEach((slide, index) => {
                        const button = document.createElement("button");
                        button.classList.add("corusel-pagination");
                        button.addEventListener("click", () => {
                            this.goToSlide(index);
                        });
                        pagination.appendChild(button);
                    });

                    // Add active class to the current pagination button
                    if (pagination.children.length > 0) {
                        pagination.children[this.currentSlide].classList.add("corusel-pagination-active");
                    }
                }

                // Start autoplay
                this.startAutoplay();
            });
        },
        goToSlide(slideIndex) {
            const slides = document.querySelectorAll(".carousel-slide");
            const pagination = document.querySelector(".pagination");

            if (slides && pagination) {
                slides[this.currentSlide].classList.remove("active");
                if (pagination.children.length > 0) {
                    pagination.children[this.currentSlide].classList.remove("corusel-pagination-active");
                }

                this.currentSlide = slideIndex;
                slides[this.currentSlide].classList.add("active");
                if (pagination.children.length > 0) {
                    pagination.children[this.currentSlide].classList.add("corusel-pagination-active");
                }
            }
        },
        startAutoplay() {
            if (this.slideTimer) {
                clearInterval(this.slideTimer);
            }
            this.slideTimer = setInterval(() => {
                this.goToSlide((this.currentSlide + 1) % this.data.length);
            }, this.slideInterval);
        },
    },
    mounted() {
        this.init();
        const carouselContainer = document.querySelector(".carousel-container");

        // Stop autoplay when mouse hovers over the carousel
        carouselContainer.addEventListener("mouseenter", () => {
            if (this.slideTimer) {
                clearInterval(this.slideTimer);
            }
        });

        // Resume autoplay when mouse leaves the carousel
        carouselContainer.addEventListener("mouseleave", () => {
            this.startAutoplay();
        });
    },
    watch: {
        data: {
            handler() {
                this.init();
            },
            deep: true,
            immediate: true,
        },
    },
}
</script>

<style scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.carousel {
    width: 100%;
    height: 100%;
}

.carousel .flex {
    width: 100%;
    height: 100%;
}

.carousel-slide {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    transition: opacity .5s ease;
}

.carousel-slide.active {
    opacity: 1;
}

.pagination {
    position: absolute;
    bottom: 2rem;
    display: flex;
    align-items: center;
}
</style>