<script>
    import {signOut} from "@auth/sveltekit/client";
    export let name;
</script>
<div class="fixed top-1 right-1 flex flex-row items-center">
    <div class=" font-bold bg-[#dad9ca] max-sm:fixed max-sm:left-1 max-sm:top-3 max-sm:w-screen bg-clip-text text-transparent">
        Welcome, {name}
    </div>
    <button class=" ml-3 bg-opacity-5 p-2 rounded-xl text-white hover:bg-white hover:bg-opacity-10 bg-white focus:bg-opacity-10 transition-all duration-300 font-light " on:click={() => {signOut({callbackUrl:"/"})}}>
        Logout
    </button>
</div>