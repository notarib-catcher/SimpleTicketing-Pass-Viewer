<script>
    import {signIn} from "@auth/sveltekit/client";
</script>

<button class=" p-2 border-2 border-blue-950 rounded-lg  transition-all duration-200 hover:font-semibold bg-black hover:scale-110 hover:border-blue-500 bg-opacity-5 hover:bg-opacity-20" on:click={() => {signIn('google',{callbackUrl:"/pass?signedin"})}}>
    <div class=" bg-clip-text text-transparent bg-gradient-to-l from-blue-500 whitespace-nowrap to-pink-700 ">
        Login with Google
    </div>
</button>
