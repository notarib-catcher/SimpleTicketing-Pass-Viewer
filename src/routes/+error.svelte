<script>
    import { onMount } from "svelte";
    import { navigating } from "$app/stores";
    let count = 5 
    var intervalled = false
    var navigate = true
    $: if($navigating) onNavDisable();
    const onNavDisable = () => {
        navigate = false
    }
    onMount(()=>{
        window.history.pushState({}, document.title, "/404");
        count = 5
        navigate = true
        setTimeout(() => {
            if(navigate){
                window.location.replace("/pass")
            }
        }, 5100);

        if(!intervalled){
            setInterval(() => {
                count--;
            },1000)
            intervalled = true
        }
        
        
    })

    
    
</script>

<div class="flex flex-col items-center justify-center">
    <div class=" bchcry text-white text-xl sm:text-2xl md:text-3xl text-center">
        404: You seem to be alone here
    </div>
    <div class="text-white text-center font-light mt-2">
        {#if count > 0}
            Heading back to the party in {count} second{(count > 1) ? "s" : ""}.
        {:else}
            Redirecting you now...
        {/if}
    </div>
    
</div>