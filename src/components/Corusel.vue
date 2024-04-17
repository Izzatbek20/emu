<template>
    <div class="ml-10 carousel-container">
        <div class="carousel">
            <div class="carousel-slide">
                <div class="flex items-center">
                    <div class="w-2/5 text-white text-5xl font-asyl leading-[110%] z-20">
                        <span class="text-orange-light">EMU express</span> Biz bilan masofa yaqin!
                    </div>
                    <img src="@/assets/images/slide/1.png" alt="1 image" class="absolute bottom-0 right-0 w-96"
                        srcset="">
                </div>
            </div>
            <div class="carousel-slide">
                <div class="flex items-center">
                    <div class="w-2/5 text-white text-5xl font-asyl leading-[110%] z-20">
                        <span class="text-orange-light">EMU bosh ofisimiz</span> yangi manzilga ko'chdi
                    </div>
                    <img src="@/assets/images/slide/2.png" alt="1 image" class="absolute bottom-0 right-0 w-96"
                        srcset="">
                </div>
            </div>
            <div class="carousel-slide">
                <div class="flex items-center">
                    <div class="w-2/5 text-white text-5xl font-asyl leading-[110%] z-20">
                        <span class="text-orange-light">Qashqadaryo viloyati,</span> yangi 81chi filialimiz ochildi
                    </div>
                    <img src="@/assets/images/slide/3.png" alt="1 image" class="absolute bottom-0 right-0 w-96"
                        srcset="">
                </div>
            </div>
            <div class="carousel-slide">
                <div class="flex items-center">
                    <div class="w-2/5 text-white text-5xl font-asyl leading-[110%] z-20">
                        <span class="text-orange-light">Kuryer chaqirish</span> BEPUL
                    </div>
                    <img src="@/assets/images/slide/4.png" alt="1 image" class="absolute bottom-0 right-0 w-96"
                        srcset="">
                </div>
            </div>
            <div class="carousel-slide">
                <div class="flex items-center">
                    <div class="w-2/5 text-white text-5xl font-asyl leading-[110%] z-20">
                        <span class="text-orange-light">Farg'ona viloyati,</span> yangi filialimiz ochildi
                    </div>
                    <img src="@/assets/images/slide/5.png" alt="1 image" class="absolute bottom-0 right-0 w-96"
                        srcset="">
                </div>
            </div>
        </div>
        <div class="pagination"></div>
    </div>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const pagination = document.querySelector(".pagination");
    let currentSlide = 0;
    const slideInterval = 5000; // Millisecond interval for autoplay

    // Show the first slide initially
    slides[currentSlide].classList.add("active");

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
    pagination.children[currentSlide].classList.add("corusel-pagination-active");

    // Autoplay function
    const nextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    // Go to a specific slide
    const goToSlide = (slideIndex) => {
        slides[currentSlide].classList.remove("active");
        pagination.children[currentSlide].classList.remove("corusel-pagination-active");

        currentSlide = slideIndex;
        slides[currentSlide].classList.add("active");
        pagination.children[currentSlide].classList.add("corusel-pagination-active");
    };

    // Start autoplay
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Stop autoplay when mouse hovers over the carousel
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.addEventListener("mouseenter", () => {
        clearInterval(slideTimer);
    });

    // Resume autoplay when mouse leaves the carousel
    carouselContainer.addEventListener("mouseleave", () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});
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