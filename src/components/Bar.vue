<template>
    <ul
        class="grid grid-cols-1 h-96 rounded-3xl relative max-xl:divide-x max-xl:divide-line-gray overflow-hidden bg-white max-sm:overflow-y-hidden max-sm:overflow-scroll max-xl:grid-cols-5 max-xl:h-20 max-sm:flex scrollbar-imm">
        <li v-for="(item, index) in menu[name]" :key="index" class="transition-colors duration-700">
            <router-link :to="{ name: item.link }"
                class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] h-full transition-colors duration-700">
                <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3"
                    :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                    <component v-if="item.icon" :is="item.icon" class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                        :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                    </component>
                    <div v-if="item.count != null"
                        class="mr-2 xs:max-xl:size-5 max-sm:size-10 bg-[#F7F5F7] rounded-full transition-colors duration-700 group-hover:text-black flex items-center justify-center size-8">
                        {{ item.count }}
                    </div>
                    <span class="group-hover:text-white">
                        {{ item.title }}
                        <br>
                        <span v-if="item.description"
                            class="txt-micro text-gray group-hover:text-white">{{
                            item.description }}</span>
                    </span>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            menu: {
                home: [
                    {
                        title: "Yuk narxini xisoblash",
                        icon: 'Calculator',
                        link: 'bizHaqimizda'
                    },
                    {
                        title: "Kuryer chaqirish",
                        icon: 'Curier',
                        link: 'raxbariyat'
                    },
                    {
                        title: "Yukni kuzatish",
                        icon: 'BoxSearch',
                        link: 'hududiy'
                    },
                    {
                        title: "Ofislarimiz",
                        icon: 'Marker',
                        link: 'yangiliklar'
                    },
                    {
                        title: "Hamkorlik bo'yicha",
                        icon: 'Hand',
                        link: 'fikirlar'
                    },
                ],
                bizHaqimizda: [
                    {
                        title: "Kompaniya haqida",
                        icon: 'Calculator',
                        link: 'bizHaqimizda'
                    },
                    {
                        title: "Raxbariyat",
                        icon: 'Curier',
                        link: 'raxbariyat'
                    },
                    {
                        title: "Hududiy menedjerlar",
                        icon: 'BoxSearch',
                        link: 'hududiy'
                    },
                    {
                        title: "Kompaniya yangiliklari",
                        icon: 'Marker',
                        link: 'yangiliklar'
                    },
                    {
                        title: "Biz haqimizda fikrlar",
                        icon: 'Hand',
                        link: 'fikirlar'
                    },
                ],
                vakansiya: [
                    {
                        id: 1,
                        title: "Toshkent shahri",
                        icon: null,
                        count: 7,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 2,
                        title: "Andijon viloyati",
                        icon: null,
                        count: 2,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 3,
                        title: "Buxoro viloyati",
                        icon: null,
                        count: 5,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 4,
                        title: "Jizzax viloyati",
                        icon: null,
                        count: 1,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 5,
                        title: "Qashqadaryo viloyati",
                        icon: null,
                        count: 0,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                ]
            }
        }
    }
}
</script>

<style scoped></style>