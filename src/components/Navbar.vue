<template>
  <header>
    <div
      class="flex justify-around items-center w-full h-[8rem] max-md:justify-between max-md:px-10"
    >
      <div
        class="flex gap-8 justify-center items-start font-bold text-Grayish-Violet"
      >
        <img
          class="w-[8rem] cursor-pointer mr-4 max-md:w-[9rem]"
          src="../assets/images/logo.svg"
          alt=""
        />
        <a class="hover:text-Very-Dark-Violet max-md:hidden" href="#"
          >Features</a
        >
        <a class="hover:text-Very-Dark-Violet max-md:hidden" href="#"
          >Pricing</a
        >
        <a class="hover:text-Very-Dark-Violet max-md:hidden" href="#">
          Resources</a
        >
      </div>
      <div
        class="flex justify-center items-center gap-8 font-bold text-Grayish-Violet max-md:hidden"
      >
        <div>
          <a class="hover:text-Very-Dark-Violet" href="#">Login</a>
        </div>
        <div
          class="text-white bg-c-cyan px-6 py-2 rounded-3xl hover:opacity-80 cursor-pointer active:scale-95"
        >
          <a href="#">Sign Up</a>
        </div>
      </div>
      <i
        @click="shortStore.menuStatus = !shortStore.menuStatus"
        class="fa-solid fa-bars fa-2xl cursor-pointer opacity-80 md:hidden"
        style="color: #bfbfbf"
      ></i>
    </div>
    <!-- Mobile Open MENU -->
    <div
      v-if="shortStore.menuStatus === true"
      class="flex flex-col justify-center items-center relative transition ease-in-out"
    >
      <div
        class="flex flex-col justify-center items-center w-4/5 rounded-2xl h-[30rem] md:hidden absolute mt-[25rem] bg-Dark-Violet"
      >
        <div
          class="flex flex-col gap-9 justify-center items-center w-[25rem] h-[28rem] text-xl font-extrabold"
        >
          <a class="hover:text-Very-Dark-Violet text-white" href="#"
            >Features</a
          >
          <a class="hover:text-Very-Dark-Violet text-white" href="#">Pricing</a>
          <a class="hover:text-Very-Dark-Violet text-white" href="#"
            >Resources</a
          >
          <div
            class="flex flex-col justify-center items-center font-extrabold text-Grayish-Violet gap-9"
          >
            <div class="w-full h-0.5 bg-white"></div>
            <div>
              <a class="hover:text-Very-Dark-Violet" href="#">Login</a>
            </div>
            <div
              class="text-white w-full bg-c-cyan px-20 py-4 rounded-3xl hover:opacity-80 cursor-pointer active:scale-95"
            >
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useShortStore } from "../store/store.js";
import { storeToRefs } from "pinia";
const shortStore = useShortStore();

const { menuStatus, openMenu, closeMenu } = storeToRefs(useShortStore);
</script>
