<script>
  import ButtonOpcions from '$lib/images/components/ButtonOpcions.svelte';
import Card from '$lib/images/components/Card.svelte';
import Title from '$lib/images/components/Title.svelte';
import { Icon } from 'flowbite-svelte-icons';
 
</script>

<section>
  <div class="py-8 px-4">
    
  <Title />
  <section class="mt-2">
   
    <ButtonOpcions text="Create new tasky" href="/task" />
    
      <ButtonOpcions text="Watch all taskys" href="/error" />
    
  </section>
  <section class="mt-8 flex gap-2">
    
    
    <Card isLeft={true} text="Task for" secondaryText="The day">
      <div class="bg-orange-800 rounded-full px-4  h-10 flex justify-start items-center mt-2">
        <Icon name="check-circle-solid" class=" text-white"  />
        <p
        class="text-slate-100 text-sm ml-2 font-bold"
        >Create a new library</p>
      </div>
      <div class="bg-orange-800 rounded-full px-4  h-10 flex justify-start items-center mt-2">
        <Icon name="check-circle-solid" class=" text-gray-500"  />
        <p
        class="text-gray-500 text-sm ml-2 font-bold line-through leading-snug"
        >Wake Up and eat</p>
      </div>
      <div class="bg-orange-800 rounded-full px-4  h-10 flex justify-start items-center mt-2">
        <Icon name="check-circle-solid" class=" text-gray-500"  />
        <p
        class="text-gray-500 text-sm ml-2 font-bold line-through leading-snug"
        >Go to the University</p>
      </div>
    </Card>
       
        <Card isLeft={false} text="Image" secondaryText="Notes">
          <div class="w-full flex justify-center">
            <img src="/cat.png" alt="cat" width="150" height="150" />
          </div>
          </Card>
      
    
  </section>
  </div>
</section>

