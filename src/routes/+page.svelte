<script>
    import {signIn} from "@auth/sveltekit/client";
    import mask from "../assets/Mmask.png"
</script>


    <img src={mask} height="100px" class="mclass1">

<button class=" footercredit p-2 bg-white rounded-lg hovtext transition-all duration-200 hover:scale-110 active:border-blue-500 bg-opacity-10 hover:bg-opacity-20" on:click={() => {signIn('google',{callbackUrl:"/pass?signedin"})}}>
    <div class=" innertxtcred bchcry uppercase bg-clip-text bg-opacity-100  text-transparent transition-all duration-300 whitespace-nowrap  ">
        Login with Google
    </div>
</button>

<style>


    .mclass1{
        filter: invert(1);
        height: 20%;
    }


     .footercredit{
     }

    .footercredit:hover > .innertxtcred {
        background-color: #e4ab32;
    }

    .footercredit:focus > .innertxtcred {
        background-color: #e4ab32;
    }

    .innertxtcred {
        background-color: #f8f7e6;
    }

</style>