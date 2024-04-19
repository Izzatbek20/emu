<template>
    <div class="ml-10 carousel-container">
        <div class="carousel">

            <div v-for="(item, index) in data" :key="index" class="carousel-slide">
                <div class="flex items-center max-md:items-start max-md:py-8">
                    <div class="w-2/5 max-lg:w-3/5 max-md:w-4/6 text-white h1 max-2xl:h2 max-sm:h3 z-20"
                        v-html="item.title">
                    </div>
                    <img :src="item.image" alt="image" class="absolute bottom-0 right-0 w-96" srcset="">
                </div>
            </div>

        </div>
        <div :style="data.length == 1 ? 'display:none' : null" class="pagination"></div>
    </div>
</template>
<script>
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
        }
    },
    mounted() {
        const slides = document.querySelectorAll(".carousel-slide");
        const pagination = document.querySelector(".pagination");

        // Show the first slide initially
        slides[this.currentSlide].classList.add("active");

        // Create pagination buttons
        slides.forEach((slide, index) => {
            const button = document.createElement("button");
            button.classList = "corusel-pagination"
            button.addEventListener("click", () => {
                goToSlide(index);
            });
            pagination.appendChild(button);
        });

        // Add active class to the current pagination button
        pagination.children[this.currentSlide].classList.add("corusel-pagination-active");

        // Autoplay function
        const nextSlide = () => {
            goToSlide((this.currentSlide + 1) % slides.length);
        };

        // Go to a specific slide
        const goToSlide = (slideIndex) => {
            slides[this.currentSlide].classList.remove("active");
            pagination.children[this.currentSlide].classList.remove("corusel-pagination-active");

            this.currentSlide = slideIndex;
            slides[this.currentSlide].classList.add("active");
            pagination.children[this.currentSlide].classList.add("corusel-pagination-active");
        };

        // Start autoplay
        let slideTimer = setInterval(nextSlide, this.slideInterval);

        // Stop autoplay when mouse hovers over the carousel
        const carouselContainer = document.querySelector(".carousel-container");
        carouselContainer.addEventListener("mouseenter", () => {
            clearInterval(slideTimer);
        });

        // Resume autoplay when mouse leaves the carousel
        carouselContainer.addEventListener("mouseleave", () => {
            slideTimer = setInterval(nextSlide, this.slideInterval);
        });
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