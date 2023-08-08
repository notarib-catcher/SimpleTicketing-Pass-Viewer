<script>
    import {browser} from "$app/environment";
    import {onMount} from "svelte";
    import Carousel from "$lib/Carousel.svelte";
    import LogoutBtn from "$lib/LogoutBtn.svelte";
    export let data

    let passstrArr = []
    /**
     * @type {any[]}
     */
    let passtypeArr = []

    if(data.passes) {
        for (let i in data.passes) {
            passstrArr.push(data.passes[i].token)
            passtypeArr.push(data.passes[i].type)
        }
    }

    let isAuth = false
    onMount(() => {
        if(browser){
            const urlParams = new URLSearchParams(window.location.search);
            isAuth = urlParams.has('signedin');

            window.history.pushState({}, document.title, window.location.pathname);
        }
    })
</script>

<div class="z-10">
    <LogoutBtn name={data.session.user.name}/>
</div>
{#if isAuth}
    <div class=" fixed top-0  text-2xl font-semibold h-[50px] bg-black bg-opacity-40 w-fit p-2 rounded-lg mx-auto ModalPopIn backgroundpan">
        <div class="bg-clip-text bg-gradient-to-bl from-blue-700 to-pink-900 text-transparent">
            Welcome, {data.user.name}!
        </div>

    </div>

{/if}
<Carousel codeDataArr = {passstrArr} typeArr={passtypeArr} />




<style>
    .ModalPopIn{
        transform: translateY(-100px);
        animation-name: login;
        animation-duration: 4000ms;
        animation-iteration-count: 1;
        animation-fill-mode: forward;
    }



    @keyframes login{
        0%{
            transform: translateY(-55px);
        }
        25%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(0px);
        }
        100%{
            transform: translateY(-55px);
        }
    }
</style>