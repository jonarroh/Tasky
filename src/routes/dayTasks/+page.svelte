<script lang="ts">
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let hidden8 = true;
  let transitionParamsBottom = {
    y: 520,
    duration: 300,
    easing: sineIn
  };


  export let data;
  $: items = data.data;

  const handleClick =async (id:string)=>{
    
    //remove from the list
    if(data.data == null) return;
    data.data = data.data.filter((item:any)=>{
      return item.id != id;
    });


    const resp = await fetch(`/dayTasks`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:id
      })


    }).then(res=>{
      return res.json()
    }).catch(err=>{
      console.log(err);
    });


  }

</script>

<section class="py-8 px-4">
  <h1
class="text-3xl font-bold text-dark dark:text-white"
>
  Tasky to do:
  {data.count}</h1>
  {#if items != null}
   
  {#each items as item}
  <div class="bg-orange-600   rounded-full px-4  h-10 flex justify-between items-center mt-2 hover:bg-orange-500 transition-colors">
    <div
    class="flex"
    ><Icon name="check-circle-solid" class=" text-white"  />
      <p
      class="text-slate-100 text-sm ml-2 font-bold"
      >{item.title}</p></div>
      <div class="text-center">
        <Button on:click={() => (hidden8 = false)}>See tasky</Button>
      </div>
      <Drawer placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id="sidebar8">
        <div class="flex items-center">
          <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
           Tasky
          </h5>
          <CloseButton on:click={() => (hidden8 = true)} class="mb-4 dark:text-white" />
        </div>
        <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
          {item.description}
        </p>
      </Drawer>      
    <button
    on:click={()=>handleClick(item.id)}
    class="text-white hover:text-gray-500 text-sm ml-2 font-bold leading-snug transition-colors"
    >Delete</button>
  </div>
  {/each  }
  {:else}
  <p class="text-white">No data</p>
  {/if}

</section>