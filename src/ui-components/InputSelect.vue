<template>
    <div>
        <div class="mb-6 max-md:mb-3 relative">
            <label v-if="label" class="block text-black mb-2 text-sm" :for="id">
                {{ label }}
                <span v-if="required" class="text-red">*</span>
            </label>
            <!-- Button -->
            <div @click="toggleDropdown"
                :class="['flex items-center group justify-between group appearance-none border rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer', selected ? 'text-black' : 'text-gray-500', error ? 'border-red' : 'border-icon-gray', !disabled && !error ? 'focus:border-violet hover:border-violet' : null, (disabled ? 'border-light-gray' : null)]">
                <span class="overflow-hidden "
                    :class="[(disabled ? (!selected ? 'text-icon-gray' : 'text-black') : 'group-hover:text-black'), (selected ? 'text-black' : 'text-gray')]">
                    {{ selectedOptionName || (placeholder ?? label) }}
                </span>
                <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            <!-- Dropdown Menu -->
            <div v-if="open && !disabled"
                class=" absolute mt-2 z-10 bg-white left-0 shadow-2xl max-h-60 overflow-x-auto appearance-none rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors">
                <ul class="dropdown-menu max-h-[200px] overflow-auto divide-y-[2px] divide-line-gray px-4 pr-4">
                    <li v-if="optionsData.length == 0" class="py-3 text-gray  flex justify-center">
                        <Spinner :fillColor="'fill-violet'" class="ml-2" />
                    </li>
                    <li v-if="optionsData" v-for="(option, index) in optionsData" :key="index"
                        @click="selectOption(option[valueAttr])"
                        class="py-3 text-gray-500 hover:bg-gray-100 cursor-pointer hover:text-violet">
                        {{ option.name }}
                    </li>
                </ul>
            </div>
            <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
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
            id: this.label + (new Date().getTime()),
        };
    },
    props: {
        label: String,
        placeholder: String,
        disabled: Boolean,
        valueAttr: {
            type: String,
            default: 'name'
        },
        optionsData: {
            type: Array,
            default: null
        },
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
    computed: {
        selectedOptionName() {
            if (this.optionsData) {
                const selectedOption = this.optionsData.find(option => option[this.valueAttr] === this.modelValue);
                return selectedOption ? selectedOption.name : '';
            }
        }
    },
    watch: {
        modelValue(newVal) {
            this.selected = newVal;
        }
    },
    methods: {
        toggleDropdown() {
            this.open = !this.open;
        },
        selectOption(option) {
            this.$emit('update:modelValue', option);
            this.$emit("change", option);
            this.selected = option;
            this.open = false;
        },
    },
    mounted() {
        this.selected = this.modelValue;
    }
};
</script>

<style>

</style>
