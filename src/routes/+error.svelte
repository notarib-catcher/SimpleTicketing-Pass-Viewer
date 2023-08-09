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
    <div class=" text-white text-3xl">
        404: You seem to be alone here
    </div>
    <div>
        Heading back to the party in {count} second{(count > 1) ? "s" : ""}.
    </div>
    
</div>