<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Main -->
  <div class="container w-10/12">
    <div class="flex flex-row items-center h-96 gap-8 mt-10">
      <div class="h-full flex items-center bg-violet basis-3/4 rounded-3xl relative overflow-hidden">
        <Corusel />
      </div>
      <div class="h-full overflow-hidden basis-1/4 rounded-3xl bg-white">
        <ul class="h-full grid grid-cols-1">
          <li
            class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
            <div
              class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
              <Icons class="text-violet" name="calculate" /> Yuk narxini xisoblash
            </div>
          </li>
          <li
            class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
            <div
              class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
              <Icons color="text-violet" name="courier" /> Kuryer chaqirish
            </div>
          </li>
          <li
            class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
            <div
              class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
              <Icons color="text-violet" name="box-search" /> Yukni kuzatish
            </div>
          </li>
          <li
            class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
            <div
              class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
              <Icons color="text-violet" name="marker-pin" /> Ofislarimiz
            </div>
          </li>
          <li
            class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
            <div
              class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 last:border-b-0 w-full h-full flex items-center">
              <Icons color="text-violet" name="hands" /> Hamkorlik bo'yicha
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Corusel from '@/components/Corusel.vue'
export default {
  components: {
    Navbar, Corusel
  }
}
</script>