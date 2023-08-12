<script lang="ts">
  
	import { validateTaskPartial, type Task } from '../../schema/task';
  const TaskModel:Task ={
    Title: '',
    Description: '',
    CreationDate: new Date(),
    DueDate: new Date(),
    Status: 'pending',

  }

  const handleClick = async () => {
    //@ts-ignore-next-line
    TaskModel.DueDate = new Date(TaskModel.DueDate);

    const valid = validateTaskPartial(TaskModel)
    if(valid){
      const reps = await fetch('/task',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(TaskModel)
      })
      const data = await reps.json();
      if(data){
        alert('Tasky created');

        //limpiar el formulario
        TaskModel.Title = '';
        TaskModel.Description = '';
        
      }
    }
  }

</script>

<section class="py-8 px-4">
  <h1
  class="text-3xl font-bold text-dark dark:text-white"
  >Create Tasky</h1>
  <div class="mt-4">
   <label 
   class="block text-md font-medium text-dark dark:text-white"
   >
    Title
    <input type="text" class="
    rounded-full border border-neutral-950 dark:border-white py-2 px-4 w-full bg-transparent 
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    "
    placeholder="Your title here"
    bind:value={TaskModel.Title}
    >
   </label>
   

  <label
  class="block text-md font-medium text-dark dark:text-white mt-4"
  >
  Description
   <textarea rows="3"
    class="rounded-lg border border-neutral-950 dark:border-white py-2 px-4 w-full bg-transparent
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    "
   placeholder="Your description here"
  
   bind:value={TaskModel.Description}
   ></textarea>

   

</label>
<label 
   class="block text-md font-medium text-dark dark:text-white mt-4"
   >
   Due Date
  <input type="date" 
  class="rounded-full border border-neutral-950 dark:border-white py-2 px-4 w-full bg-transparent
  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
  "
  bind:value={TaskModel.DueDate}
  >
  </label>

    

    <div class="mt-4 flex justify-center">
      <button class="border border-neutral-950 dark:border-white rounded-full dark:text-white font-bold py-2 px-4 hover:bg-white hover:dark:text-orange-500 hover:text-orange-500 transition-colors" 
      on:click={handleClick}
      >
        Create Tasky
      </button>

    </div>
    
  </div>

</section>