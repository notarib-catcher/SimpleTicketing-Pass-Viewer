<script>
    import {signOut} from "@auth/sveltekit/client";
    export let name;
    let LGText;
    const onClickLogout = async () => {
        LGText.innerText = "WAIT..."
        signOut({callbackUrl:"/"})
    }
</script>
<div class="fixed top-1 right-1 flex flex-row items-center loadinwithimg">
    <div class=" font-bold bchcry bg-[#dad9ca] max-sm:fixed max-sm:left-2 max-sm:top-3 bg-clip-text text-transparent">
        Greetings, {name}
    </div>
    <button class="focus:animate-pulse mr-1 ml-2 bg-opacity-5 p-2 rounded-xl bchcry uppercase text-white hover:bg-white hover:bg-opacity-10 bg-white focus:bg-opacity-10 transition-all duration-300 font-light flex flex-row " on:click={onClickLogout}>
        <div bind:this={LGText}>Logout</div>
    </button>
</div>

<style>
    @keyframes animloadinwithimg {
        0%{
            opacity: 0;

        }

        100%{
            opacity: 1;

        }
    }

    .loadinwithimg{
        animation-name: animloadinwithimg;
        animation-duration: 800ms;
        animation-fill-mode: forwards;
    }
</style>

