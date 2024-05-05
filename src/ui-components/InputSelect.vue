<!-- <template>
    
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-black mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <div class="relative group" @focusout="selectShow = false">
            <div class="relative">
                <input @click="selectShow = !selectShow"
                    class="appearance-none border rounded-xl w-full py-3 px-3 pe-14 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
                    readonly :class="error ? 'border-red' : 'border-icon-gray focus:border-violet hover:border-violet'"
                    :id="id" :type="type" :placeholder="placeholder ?? label">
                <div
                    class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none text-gray group-hover:text-[#333]">
                    <ChevorDown :class="selectShow ? 'rotate-180' : ''" />
                </div>
            </div>
            <div v-show="selectShow"
                class="absolute mt-1 z-50 flex flex-col divide-y divide-line-gray bg-white left-0 shadow-2xl max-h-60 overflow-x-auto appearance-none rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer">
                <div @click="select('Lorem, ipsum.')"
                    class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet">
                    Lorem, ipsum.</div>
                <div @click="select('Lorem, ipsum.')"
                    class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet">
                    Lorem, ipsum.</div>
                <div @click="select('Lorem, ipsum.')"
                    class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet">
                    Lorem, ipsum.</div>
                <div @click="select('Lorem, ipsum.')"
                    class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet">
                    Lorem, ipsum.</div>
            </div>
        </div>
        <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'InputSelect',
    data() {
        return {
            id: this.id = this.label + (new Date().getTime()),
            selectShow: false
        }
    },
    props: {
        label: String,
        placeholder: String,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false
        },
        error: String,
        modelValue: [String, Number]
    },
    methods: {
        select(value) {
            this.placeholder = value
            this.selectShow = false
            this.$emit('update:modelValue', value)
        },
    },
}
</script>
<style scoped></style> -->

<template>
    <div>
        <div class="mb-6 max-md:mb-3 relative">
            <label v-if="label" class="block text-black mb-2 text-sm" :for="id">
                {{ label }}
                <span v-if="required" class="text-red">*</span>
            </label>
            <!-- Button -->
            <button @click="toggleDropdown"
                :class="['flex items-center justify-between group appearance-none border rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer', selected ? 'text-black' : 'text-gray-500', error ? 'border-red' : 'border-icon-gray focus:border-violet hover:border-violet']">
                <span class="overflow-hidden">{{ selected || (placeholder ?? label) }}</span>
                <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <!-- Dropdown Menu -->
            <div v-if="open"
                class="absolute mt-2 z-10 bg-white left-0 shadow-2xl max-h-60 overflow-x-auto appearance-none rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer">
                <ul class="max-h-[140px] overflow-auto">
                    <li v-for="(option, index) in options" :key="index" @click="selectOption(option)"
                        class="text-gray-500 px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-orange">
                        {{ option }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputSelect',
    data() {
        return {
            open: false,
            selected: '',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
            id: this.id = this.label + (new Date().getTime()),
        };
    },
    props: {
        label: String,
        placeholder: String,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false
        },
        error: String,
        modelValue: [String, Number]
    },
    methods: {
        toggleDropdown() {
            this.open = !this.open;
        },
        selectOption(option) {
            this.$emit('update:modelValue', option)
            this.selected = option;
            this.open = false;
        },
    },
};
</script>

<style scoped>
::-webkit-scrollbar-thumb {
    background-color: #EF7F1A;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #EF7F1A;
    /* Scroll bar ustida kursor bo'lganda rangini o'zgartirish */
}

::-webkit-scrollbar-track {
    background-color: #EF7F1A;
}

/* Scrollbar styles for Firefox */
.scrollbar-style {
    scrollbar-color: #EF7F1A #EF7F1A;
}
</style>
