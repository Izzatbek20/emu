<template>
    <div class="carousel-container relative">
        <div class="carousel">
            <!-- <div v-for="(item, index) in data" :key="index" class="carousel-slide">
                <img :src="item.image" alt="image" class="h-[410px]" srcset="">
            </div> -->
            <img :src="data[0].image" alt="image" class="rounded-xl" srcset="">
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
        // const slides = document.querySelectorAll(".carousel-slide");
        // const pagination = document.querySelector(".pagination");

        // // Show the first slide initially
        // slides[this.currentSlide].classList.add("active");

        // // Create pagination buttons
        // slides.forEach((slide, index) => {
        //     const button = document.createElement("button");
        //     button.classList = "corusel-pagination"
        //     button.addEventListener("click", () => {
        //         goToSlide(index);
        //     });
        //     pagination.appendChild(button);
        // });

        // // Add active class to the current pagination button
        // pagination.children[this.currentSlide].classList.add("corusel-pagination-active");

        // // Autoplay function
        // const nextSlide = () => {
        //     goToSlide((this.currentSlide + 1) % slides.length);
        // };

        // // Go to a specific slide
        // const goToSlide = (slideIndex) => {
        //     slides[this.currentSlide].classList.remove("active");
        //     pagination.children[this.currentSlide].classList.remove("corusel-pagination-active");

        //     this.currentSlide = slideIndex;
        //     slides[this.currentSlide].classList.add("active");
        //     pagination.children[this.currentSlide].classList.add("corusel-pagination-active");
        // };

        // // Start autoplay
        // let slideTimer = setInterval(nextSlide, this.slideInterval);

        // // Stop autoplay when mouse hovers over the carousel
        // const carouselContainer = document.querySelector(".carousel-container");
        // carouselContainer.addEventListener("mouseenter", () => {
        //     clearInterval(slideTimer);
        // });

        // // Resume autoplay when mouse leaves the carousel
        // carouselContainer.addEventListener("mouseleave", () => {
        //     slideTimer = setInterval(nextSlide, this.slideInterval);
        // });
    },
}

</script>

<style scoped>
/* .carousel-slide {
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
} */
</style>