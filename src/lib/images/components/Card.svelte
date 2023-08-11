<script lang="ts">

	import { Icon } from "flowbite-svelte-icons";
  export let href:string = '/error';
  export let isLeft = true;
  export let text:string = '';
  export let secondaryText:string = ''; 
  let cardClass = 'flex flex-col justify-start  bg-orange-500 p-4 card-left w-1/2 shadow-2xl  dark:shadow-orange-500/ hover:bg-orange-600 transition-colors';
  if(!isLeft){
    cardClass = 'flex flex-col justify-start  bg-orange-500 p-4 card-right w-1/2 shadow-2xl  dark:shadow-orange-500/20 hover:bg-orange-600 transition-colors';
  }

</script>
<a class={cardClass} {href}>
  <div class="flex items-center w-full justify-between" >
    <h4
    class="text-2xl font-bold text-white "
    >{text}<span
      class="block text-2xl font-bold text-white "
      >{secondaryText}</span></h4>
      <div class="bg-orange-800 p-2 rounded-full text-white">
        <Icon name="heart-solid" />
      </div>
      
      
  </div>
  <div>
    <slot></slot>
  </div>
</a>

<style>
  .card-left {
    border-radius: 0 0.375rem 0.375rem 0.375rem;
    position: relative;
    
  }
  .card-left::before{
    content: ' ';
    position: absolute;
    z-index: -1;
    bottom: -5px;
    right: -5px;
    @apply w-full h-full bg-white ;
 
    border-radius: 0 0.375rem 0.375rem 0.375rem;
  }
  

  .card-right {
    border-radius: 0.375rem  0 0.375rem  0.375rem ;
    position: relative;
  }
  .card-right::before{
    content: ' ';
    position: absolute;
    z-index: -1;
    bottom: -5px;
    right: -5px;
    @apply w-full h-full bg-white;
  
    border-radius: 0.375rem  0 0.375rem  0.375rem ;
  }
</style>