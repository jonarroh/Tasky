<script>
	import { DarkMode } from "flowbite-svelte";
  let btnClass = 'text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>


<header class="flex justify-between items-center bg-white dark:bg-gray-800 p-4"
>
  <a href="
  /">
  <section class="flex  items-center">
    <img src="/Tasky.svg" alt="logo" width="40" height="40">
  <h1
  class="text-2xl font-bold text-gray-800 dark:text-white ml-2"
  >Tasky</h1>
  </section>
</a>
  <section>
    <DarkMode {btnClass} />
  </section>
</header>