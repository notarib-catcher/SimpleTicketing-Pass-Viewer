<script>
    import {signIn} from "@auth/sveltekit/client";
    import mask from "../assets/Mmask.png"
    let loginbtninnertext
    const loginBtnClick = async () => {
        loginbtninnertext.innerHTML = "You will be redirected soon"
        setTimeout( () => {
            signIn('google',{callbackUrl:"/pass?signedin"})
        }, 200)
        
    }
</script>


    <img src={mask} height="100px" class="loadinafterimg mclass1">

<button class=" loadinafterimg footercredit p-2 bg-white rounded-lg hovtext transition-all duration-200 hover:scale-110 active:border-blue-500 bg-opacity-10 hover:bg-opacity-20" on:click={loginBtnClick}>
    <div bind:this={loginbtninnertext} class=" innertxtcred bchcry uppercase bg-clip-text bg-opacity-100  text-transparent transition-all duration-300 whitespace-nowrap  ">
        Login with Google
    </div>
</button>

<style>


    .mclass1{
        filter: invert(1);
        height: 20%;
    }

    @keyframes animloadinafterimg {
        0%{
            opacity: 0;
            transform: translateY(-20px);
        }
        50%{
            opacity: 0;
            transform: translateY(-20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    .loadinafterimg{
        animation-name: animloadinafterimg;
        animation-duration: 800ms;
        animation-fill-mode: forwards;
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