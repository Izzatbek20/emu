<template>
    <div>
        <!-- Yuklangan fayllar haqida ma'lumot ko'rsatish qismi -->
        <div v-if="files.length > 0" class="flex flex-col gap-4 mt-4">
            <div v-for="(file, index) in files" :key="index" class="flex items-center gap-2">
                <Pdf class="h-10 w-10" />
                <div class="grid grid-cols-1">
                    <span class="txt-small">{{ file.name }}</span>
                    <div>
                        <span class="txt-micro text-violet underline cursor-pointer mr-2" @click="removeFile(index)">
                            O'chirish
                        </span>
                        <span class="txt-micro text-gray">{{ (file.size / 1024).toFixed(2) }} mb</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fayl yuklash qismi -->
        <div class="mt-10 p-7 bg-[#F7F5F7] rounded-2xl cursor-pointer border border-1 border-gray border-dashed flex items-center justify-center h-32"
            :class="[error ? 'border-red' : 'border-gray', (disabled ? 'border-light-gray' : null)]"
            @drop.prevent="handleDrop" @dragover.prevent="handleDragOver" @dragleave="handleDragLeave"
            @click="triggerFileInput">
            <input type="file" accept="application/pdf" multiple style="display: none;" :disabled="disabled"
                @change="handleFileChange" ref="fileInput" />
            <div class="absolute flex items-center gap-2 max-[320px]:w-[80%] flex-nowrap">
                <Plus :fillColor="'fill-icon-gray'" />
                <span class="txt-micro text-gray w-full">Rezyume va boshqa faylni ilova qiling (pdf)</span>
            </div>
        </div>

        <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [], // Fayllarni saqlash uchun ro'yxat
        };
    },
    props: {
        modelValue: Array,
        error: String,
        disabled: false,
    },
    methods: {
        // Fayl yuklash maydonini faol qiladi
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        // Fayl tanlanganida
        handleFileChange(event) {
            const newFiles = Array.from(event.target.files);
            if (newFiles.length) {
                this.files.push(...newFiles);

                this.$emit('update:modelValue', this.files)
            }
            // Fayl tanlash oynasini tozalash
            this.$refs.fileInput.value = "";
        },
        // Fayllarni olib tashlash
        removeFile(index) {
            this.files.splice(index, 1);
        },
        // Drag and drop orqali fayl qo'shish
        handleDrop(event) {
            const files = Array.from(event.dataTransfer.files);
            if (files.length > 0) {
                // Faqat PDF fayllarni qabul qilish
                const validFiles = files.filter(file => file.type === "application/pdf");
                this.files.push(...validFiles);
            }
        },
        handleDragOver(event) {
            // Drag and drop jarayonini davom ettirish uchun `preventDefault`
            event.preventDefault();
        },
        handleDragLeave(event) {
            // Agar kerak bo'lsa, boshqa amallarni qo'shing
        },
    },
};
</script>

<style>
/* Kerakli CSS stilizatsiyani qo'shing */
</style>
