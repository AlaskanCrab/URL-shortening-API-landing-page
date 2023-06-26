<template>
  <Navbar></Navbar>
  <div class="flex flex-col justify-center items-center">
    <div class="flex justify-center max-2xl:w-5/6 max-md:flex-wrap">
      <div
        class="flex justify-center items-start max-md:items-center flex-col gap-4 p-[6rem] w-[62rem] max-2xl:w-[50rem] max-2xl:p-[3rem] max-md:order-2 max-md:p-[4rem] max-md:w-[62rem] max-sm:p-0 max-sm:text-center"
      >
        <h1
          class="flex font-extrabold text-8xl text-Very-Dark-Blue max-xl:text-6xl max-lg:text-5xl max-md:text-7xl max-sm:text-5xl"
        >
          More than just shorter links
        </h1>
        <h2
          class="text-g-gray font-medium text-2xl max-xl:font-normal max-lg:font-light max-lg:text-lg max-md:text-2xl max-sm:text-xl"
        >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h2>
        <a
          class="text-white bg-c-cyan mt-8 px-10 py-4 rounded-3xl text-xl font-semibold hover:opacity-80 cursor-pointer active:scale-95 max-lg:font-medium max-lg:text-lg max-lg:px-6 max-lg:py-3 max-md:font-semibold max-md:text-xl max-md:px-12 max-md:py-6"
          >Get Started</a
        >
      </div>
      <img
        class="w-1/2 h-full max-xl:w-[35rem] max-lg:w-[28rem] max-md:w-[40rem] max-md:order-1 max-sm:w-[30rem]"
        src="./assets/images/illustration-working.svg"
        alt=""
      />
    </div>
    <!-- Shorten a link here input area  -->
    <div
      class="flex justify-center items-center flex-col mt-32 bg-gray-100 relative"
    >
      <div
        class="flex justify-center items-center w-4/5 h-[10rem] bg-shorten-desktop bg-Dark-Violet rounded-lg mb-32 absolute -top-20 z-20"
      >
        <form
          class="flex gap-6 w-4/5 max-sm:w-full max-sm:flex-col max-sm:justify-center max-sm:items-center"
        >
          <input
            v-model.lazy="urlInput"
            :class="{ inputerror: empty }"
            class="w-3/4 px-8 py-4 rounded-2xl text-2xl font-bold max-md:text-lg"
            type="text"
            placeholder="Shorten a link here... "
          />
          <button
            @click="submitUrl"
            class="text-white bg-c-cyan w-1/4 max-sm:w-2/3 max-sm:py-3 max-sm:justify-center max-sm:items-center rounded-3xl hover:opacity-80 cursor-pointer active:scale-95 text-xl font-bold max-md:text-lg max-sm:text-base"
          >
            Shorten It!
          </button>
          <p
            v-if="empty === true"
            class="flex text-red-600 text-sm font-semibold absolute mt-20 max-sm:mt-4"
          >
            Please add a link
          </p>
        </form>
      </div>
      <!-- Shorten link api comp here!  -->
      <div
        class="flex justify-center items-center w-4/6 mt-28 h-full gap-6 max-sm:w-3/4 max-sm:flex-col"
      >
        <div
          class="w-3/4 max-sm:w-full max-sm:text-xl h-[4rem] z-50 rounded-2xl font-bold text-2xl border-solid border-Dark-Violet border-2 text-Dark-Violet flex justify-center text-center items-center"
        >
          {{ shortApi.full_short_link }}
        </div>
        <div
          class="w-1/4 max-sm:w-3/4 h-[8rem] z-50 rounded-2xl flex flex-col justify-center items-center"
        >
          <p
            v-if="copied === true"
            class="font-bold text-Very-Dark-Blue text-lg absolute mb-24"
          >
            Copied!
          </p>

          <svg
            @click="copy"
            class="fill-[#2acfcf] w-14 cursor-pointer active:scale-95 hover:opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
            />
          </svg>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-8 mb-48 max-md:w-full mx-10 mt-48"
      >
        <div
          class="text-Very-Dark-Violet text-6xl font-semibold text-center max-xl:text-5xl max-lg:text-4xl max-md:text-5xl"
        >
          Advanced Statistics
        </div>

        <div
          class="text-Grayish-Violet text-center font-bold text-2xl xl:w-2/3 max-xl:font-normal max-lg:text-xl max-xl:w-1/2 max-md:text-2xl max-sm:text-2xl max-lg:font-bold"
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
      </div>
      <!-- Brand 3 card section start -->
      <div
        class="flex justify-center items-center mb-32 relative h-[40rem] max-lg:flex-col gap-2 max-2xl:gap-24 max-lg:h-auto"
      >
        <div class="w-2/4 h-3 bg-c-cyan absolute max-lg:hidden"></div>
        <div
          class="self-start w-1/4 max-lg:w-2/3 max-md:w-5/6 max-lg:self-center h-[26rem] bg-white m-6 flex flex-col rounded-lg relative mt-24 max-2xl:pb-10 max-2xl:h-auto max-2xl:m-0 max-lg:justify-center max-lg:items-center"
        >
          <span
            class="w-32 h-32 rounded-full bg-Dark-Violet flex justify-center items-center absolute -top-16 left-12 max-lg:relative max-lg:left-0"
          >
            <img
              class="w-16"
              src="./assets/images/icon-brand-recognition.svg"
              alt=""
            />
          </span>
          <div class="flex flex-col gap-6 mx-10 mt-28 max-lg:mt-0 max-lg:mb-28">
            <div
              class="text-Very-Dark-Violet text-4xl font-semibold max-xl:text-center max-xl:text-3xl max-lg:text-3xl max-md:text-4xl max-lg:text-center"
            >
              Brand Recognition
            </div>
            <p
              class="text-g-gray font-medium text-xl max-lg:text-center max-xl:font-bold max-lg:font-medium max-lg:text-lg max-md:text-2xl max-sm:text-xl"
            >
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div
          class="w-1/4 h-[26rem] max-lg:w-2/3 max-md:w-5/6 max-lg:self-center m-6 flex flex-col rounded-lg relative bg-white mt-16 max-2xl:mb-5 max-2xl:h-auto max-2xl:m-0 max-lg:justify-center max-lg:items-center"
        >
          <span
            class="w-32 h-32 rounded-full bg-Dark-Violet flex justify-center items-center absolute -top-16 left-12 max-lg:relative max-lg:left-0"
          >
            <img
              class="w-16"
              src="./assets/images/icon-detailed-records.svg"
              alt=""
            />
          </span>
          <div class="flex flex-col gap-6 mx-10 mt-28 max-lg:mt-0 max-lg:mb-28">
            <div
              class="text-Very-Dark-Violet text-4xl font-semibold max-xl:text-center max-xl:text-3xl max-lg:text-3xl max-md:text-4xl max-lg:text-center"
            >
              Detailed Records
            </div>
            <p
              class="text-g-gray font-medium text-xl max-lg:text-center max-xl:font-bold max-lg:font-medium max-lg:text-lg max-md:text-2xl max-sm:text-xl"
            >
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div
          class="self-end w-1/4 h-[26rem] max-lg:w-2/3 max-md:w-5/6 max-lg:self-center m-6 flex flex-col rounded-lg relative bg-white mb-14 max-2xl:h-auto max-2xl:m-0 max-lg:justify-center max-lg:items-center"
        >
          <span
            class="w-32 h-32 rounded-full bg-Dark-Violet flex justify-center items-center absolute -top-16 left-12 max-lg:relative max-lg:left-0"
          >
            <img
              class="w-16"
              src="./assets/images/icon-fully-customizable.svg"
              alt=""
            />
          </span>
          <div
            class="flex flex-col gap-6 mx-10 mt-28 max-lg:mt-0 max-lg:mb-28 max-2xl:mb-5"
          >
            <div
              class="text-Very-Dark-Violet text-4xl font-semibold max-xl:text-center max-xl:text-3xl max-lg:text-3xl max-md:text-4xl max-lg:text-center"
            >
              Fully Customizable
            </div>
            <p
              class="text-g-gray font-medium text-xl max-lg:text-center max-xl:font-bold max-lg:font-medium max-lg:text-lg max-md:text-2xl max-sm:text-xl"
            >
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex bg-boost-desktop bg-no-repeat bg-cover bg-Dark-Violet w-full h-[18rem]"
    >
      <div class="flex justify-center items-center flex-col w-full gap-14">
        <div
          class="text-6xl font-semibold text-white max-xl:text-5xl max-lg:text-5xl max-md:text-5xl max-sm:text-5xl max-sm:text-center"
        >
          Boost your links today
        </div>
        <button
          class="text-white bg-c-cyan px-9 py-4 rounded-3xl hover:opacity-80 cursor-pointer active:scale-95 text-xl font-bold"
        >
          Get Started
        </button>
      </div>
    </div>
    <Footer></Footer>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://github.com/AlaskanCrab" target="_blank">AlaskanCrab</a>.
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { useShortStore } from "./store/store.js";
import { storeToRefs } from "pinia";
const shortStore = useShortStore();

const { menuStatus, openMenu, closeMenu } = storeToRefs(useShortStore);

let urlInput = ref("");

let empty = ref(false);

let copied = ref(false);

const shortApi = ref({});

const submitUrl = (event) => {
  event.preventDefault();
  if (urlInput.value != "") {
    getShortApi();
    empty.value = false;
  } else {
    empty.value = true;
  }
};

const copy = () => {
  if (urlInput.value != "") {
    const el = document.createElement("textarea");

    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.value = shortApi.value.full_short_link;

    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    copied.value = true;

    setTimeout(() => (copied.value = false), 2000);
  } else {
  }
};
console.log(urlInput.value);
const getShortApi = async () => {
  const res = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${urlInput.value}`
  );
  const data = await res.json();
  shortApi.value = await data.result;
};
</script>
<style scoped>
.inputerror {
  border: solid 0.2rem red;
  caret-color: red;
  background-color: rgb(244, 222, 222);
}
</style>
