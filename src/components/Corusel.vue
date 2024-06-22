<template>
    <div class="ml-10 carousel-container">
        <div class="carousel">
            <div v-for="(item, index) in data" :key="index" class="carousel-slide">
                <div class="flex items-center max-md:items-start max-md:py-8">
                    <div class="w-2/5 max-lg:w-3/5 max-md:w-4/6 text-white h1 max-2xl:h2 max-sm:h3 z-20"
                        v-html="item.title"></div>
                    <img :src="item.image" alt="image" class="absolute bottom-0 right-0 w-96" srcset="">
                </div>
            </div>
        </div>
        <div :style="data.length === 1 ? 'display:none' : null" class="pagination"></div>
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

                if (slides && slides.length > 0 && pagination) {
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

            if (slides && slides.length > 0 && pagination) {
                slides.forEach((slide, index) => {
                    slide.classList.remove("active");
                    if (pagination.children[index]) {
                        pagination.children[index].classList.remove("corusel-pagination-active");
                    }
                });

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
        clearAutoplay() {
            if (this.slideTimer) {
                clearInterval(this.slideTimer);
            }
        },
        clearCarouselState() {
            const slides = document.querySelectorAll(".carousel-slide");
            const pagination = document.querySelector(".pagination");

            if (slides && slides.length > 0 && pagination) {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                pagination.innerHTML = '';
            }
        }
    },
    mounted() {
        this.init();
        const carouselContainer = document.querySelector(".carousel-container");

        // Stop autoplay when mouse hovers over the carousel
        carouselContainer.addEventListener("mouseenter", () => {
            this.clearAutoplay();
        });

        // Resume autoplay when mouse leaves the carousel
        carouselContainer.addEventListener("mouseleave", () => {
            this.startAutoplay();
        });
    },
    beforeUnmount() {
        this.clearAutoplay();
        this.clearCarouselState();
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

.corusel-pagination {
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px;
}

.corusel-pagination-active {
    border: 2px solid #fff;
    border-radius: 50%;
}
</style>
