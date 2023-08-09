<script>
    import { onMount, onDestroy } from "svelte";
    import {browser} from "$app/environment"
    let count = 5
    let intr1, intr2;
    onMount(() => {
        if(browser){
            intr1 = setInterval(() => {
                count--;
            }, 1000)

            const redirect = () => {
                if(count <= 0){
                    window.location = "/pass"
                }
            }

            intr2 = setInterval(redirect, 500)
        }
    })

    onDestroy(() => {
        if(browser){
            clearInterval(intr1)
            clearInterval(intr2)
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