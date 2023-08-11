<script>
    import {onMount} from "svelte";
    import {signIn} from "@auth/sveltekit/client";
    export let data;
    onMount(() => {
        if(!data.session?.user?.email && data.slug) {
            setTimeout(()=>{signIn('google',{callbackUrl: `/book/${data.slug}/`})}, 1000)
            return
        }

        setTimeout(() => {window.location = '/pass'}, 3000)
    })
</script>

}

<div class="z-100 fixed overflow-hidden w-screen h-screen bg-black flex flex-col items-center justify-center">

    <div class=" bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 to-pink-700">
        {#if data.session?.user?.email}
            <div class="bg-white bg-opacity-10 p-3 rounded-2xl mb-2">
                <div>
                    Pass assigned to:
                </div>
                <div class=" font-bold text-yellow-500">{data.session.user.email}</div>
            </div>
            <div class="w-full text-center text-[#e4c359] animate-pulse font-semibold">You will be redirected soon</div>
        {:else}
            <div class="bg-clip-text text-transparent bg-[#FAF6E1]  w-full text-center font-semibold">You need to be logged in! Lets do that first...</div>
            <div class="w-full text-center text-[#e4c359] animate-pulse font-semibold">You will be redirected soon</div>
        {/if}
    </div>
</div>