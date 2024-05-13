<template>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_249_4633)">
            <path
                d="M45.6112 32V35.5156H46.9286V41.8993C46.9286 44.0787 45.1554 45.8518 42.976 45.8518C40.7965 45.8518 39.0235 44.0787 39.0235 41.8993V35.5156H40.3409V32H34.1904V35.5156H35.5079V41.8993C35.5079 46.0173 38.858 49.3674 42.976 49.3674C47.0939 49.3674 50.4442 46.0173 50.4442 41.8993V35.5156H51.7616V32H45.6112Z"
                fill="#EF7F1A" :class="fillColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M25.8984 60H0V12.1969H10.5757V9.7205C10.5757 4.36054 14.9364 0 20.2961 0C25.6563 0 30.0167 4.36054 30.0167 9.7205V12.1969H40.5927V24.8438H37.0768V15.7125H30.0167V19.3155H31.3342V22.8311H25.1836V19.3155H26.5011V15.7125H14.0913V19.3155H15.4088V22.8311H9.2585V19.3155H10.5757V15.7125H3.51562V56.4844H25.8984V60ZM20.2963 3.51562C16.875 3.51562 14.0913 6.29906 14.0913 9.7205V12.1969H26.5011V9.7205C26.5011 6.29906 23.7177 3.51562 20.2963 3.51562Z"
                fill="#8F2B83" :class="fillColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M40.5925 24.8438V24.8811H60V60H25.8984V56.4844H25.9122V24.8811H37.0768V24.8438H40.5925ZM29.4278 56.4844H56.4844V28.3967H29.4278V56.4844Z"
                fill="#EF7F1A" :class="fillColor" />
        </g>
        <defs>
            <clipPath id="clip0_249_4633">
                <rect width="60" height="60" fill="white" />
            </clipPath>
        </defs>
    </svg>

</template>
<script>
export default {
    name: 'ShoppingBag2',
    props: {
        fillColor: String
    }
}
</script>