<template>
  <div
    class="flex justify-center items-center bg-Very-Dark-Violet w-full h-[25rem] max-lg:h-[55rem]"
  >
    <div
      class="flex justify-around items-center w-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center"
    >
      <div class="">
        <img
          class="mb-32 max-lg:mb-16 max-lg:mt-16 cursor-pointer"
          src="../assets/images/logo-white.svg"
          alt=""
        />
      </div>
      <div class="flex gap-20 max-lg:flex-col">
        <div class="flex flex-col gap-6">
          <span class="text-white font-bold cursor-pointer">Features</span>
          <ul class="text-Grayish-Violet font-semibold flex flex-col gap-2">
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#"> Analytics</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <span class="text-white font-bold cursor-pointer">Resources</span>
          <ul class="text-Grayish-Violet font-semibold flex flex-col gap-2">
            <li><a href="#"> Blog</a></li>
            <li><a href="#"> Developers</a></li>
            <li><a href="#"> Support</a></li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <span class="text-white font-bold cursor-pointer">Company</span>
          <ul class="text-Grayish-Violet font-semibold flex flex-col gap-2">
            <li><a href="#"> About</a></li>
            <li><a href="#"> Our Team</a></li>
            <li><a href="#"> Careers</a></li>
            <li><a href="#"> Contact</a></li>
          </ul>
        </div>

        <ul class="flex gap-5">
          <li class="cursor-pointer active:scale-95 hover:opacity-80 mb-16">
            <i
              class="fa-brands fa-square-facebook fa-2xl"
              style="color: #ffffff"
            ></i>
          </li>
          <li class="cursor-pointer active:scale-95 hover:opacity-80">
            <i class="fa-brands fa-twitter fa-2xl" style="color: #ffffff"></i>
          </li>
          <li class="cursor-pointer active:scale-95 hover:opacity-80">
            <i
              class="fa-brands fa-square-pinterest fa-2xl"
              style="color: #ffffff"
            ></i
            >>
          </li>
          <li class="cursor-pointer active:scale-95 hover:opacity-80">
            <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>
