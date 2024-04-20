<template>
    <ul
        class="grid grid-cols-5 h-20 rounded-3xl relative divide-x divide-line-gray bg-white overflow-y-hidden max-sm:overflow-scroll max-sm:flex scrollbar-imm">
        <li v-for="(item, index) in menu[name]" :key="index">
            <router-link :to="{ name: item.link }"
                class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] hover:text-white transition-colors duration-700 h-full">
                <div class="group-hover:border-violet xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3 transition-colors duration-700"
                    :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                    <component :is="item.icon" class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                        :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                    </component>
                    {{ item.title }}
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
                ]
            }
        }
    }
}
</script>

<style scoped></style>