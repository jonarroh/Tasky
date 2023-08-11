<script lang="ts">
  export let text:string = '';
  export let href:string = '';
  
</script>

<a class="border border-neutral-950 dark:border-white rounded-full dark:text-white font-bold py-2 px-4 hover:bg-white hover:dark:text-orange-500 hover:text-orange-500 transition-colors" href={href}>
  {text}
</a>