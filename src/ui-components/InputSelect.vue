<template>
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-black mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <div class="relative group">
            <div class="relative">
                <input @click="selectShow = !selectShow"
                    class="appearance-none border rounded-xl w-full py-3 px-3 pe-14 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer"
                    readonly :class="error ? 'border-red' : 'border-icon-gray focus:border-violet hover:border-violet'"
                    :id="id" :type="type" :placeholder="placeholder ?? label" @focusout="selectShow = false">
                <div
                    class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none text-gray group-hover:text-[#333]">
                    <ChevorDown :class="selectShow ? 'rotate-180' : ''" />
                </div>
            </div>
            <div v-show="selectShow"
                class="absolute mt-1 z-50 flex flex-col divide-y divide-line-gray bg-white left-0 shadow-2xl max-h-60 overflow-x-auto appearance-none rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors cursor-pointer">
                <div class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet"
                    @click="updateValue('as')">
                    Lorem, ipsum.</div>
                <div class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet"
                    @click="updateValue('as')">
                    Lorem, ipsum.</div>
                <div class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet"
                    @click="updateValue('as')">
                    Lorem, ipsum.</div>
                <div class="txt-small flex items-center cursor-pointer p-2.5 hover:text-violet"
                    @click="updateValue('as')">
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
        updateValue(value) {
            this.selectShow = false
            this.$emit('update:modelValue', value)
        }
    },
}
</script>
<style scoped></style>