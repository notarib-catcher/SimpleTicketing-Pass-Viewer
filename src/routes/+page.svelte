<script>
    import {signIn} from "@auth/sveltekit/client";
</script>

<button class=" p-2 border-2 border-[#1a0523] bg-opacity-30 bg-black rounded-lg hovtext transition-all duration-200 hover:font-semibold bg-black hover:scale-110 active:border-blue-500 bg-opacity-5 hover:bg-opacity-20" on:click={() => {signIn('google',{callbackUrl:"/pass?signedin"})}}>
    <div class=" font-semibold bg-clip-text text-transparent transition-all duration-300  bg-gradient-to-l from-blue-500 whitespace-nowrap to-pink-700 ">
        Login with Google
    </div>
</button>

<style>

    .hovtext:hover > div{
        color: white;
    }
    .hovtext:focus > div{
        color: white;
    }
</style>