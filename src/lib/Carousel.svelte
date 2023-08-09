<script>
    import { browser } from "$app/environment"
    import QRCode from "$lib/QRJS.svelte"
    import {onMount} from "svelte";
    import noTickets from "../assets/notickets.webp"




    const passNameDisplay = {
        "EXAMPLE_TYPE":"examplepass",
        "MASQR": "2 September 2023, 6PM",
        "STAFF": "STAFF ACCESS"
    }
    // @ts-nocheck

    /**
     * @type {Array<string>}
     */
    export let codeDataArr;
    /**
     * @type {Array<string>}
     */
    export let typeArr;

    let error = false;




    let cursor = 0;
    let currentData = codeDataArr[0];

    const next = () => {
        cursor = (cursor + 1)% codeDataArr.length
    }

    $: currentData = codeDataArr[cursor]

    /**
     * @type {any[]}
     */
    const nameArr = []

    const convertTypeToName = (type = "Custom") => {
        // @ts-ignore
        nameArr.push(passNameDisplay[type] || "Custom Pass")
    }

    typeArr.map(convertTypeToName)

    if(browser){
        if(codeDataArr.length != typeArr.length){
            codeDataArr = []
            error = true;
        }
    }
    const delay = (time) => new Promise((resolve, reject) => setTimeout(resolve, time))
    let titleTxt
    onMount(async () => {
        if(browser){
            let restOfTitle = "MASQUERADE BALL"
            let i = 0
            for(i = 0; i < restOfTitle.length; i++){
                titleTxt.textContent += restOfTitle[i]

                //whitespaces cause it to pause for a sec which is jarring, skip them
                if(restOfTitle[i+1] === ' '){
                    i++
                    titleTxt.textContent += restOfTitle[i]
                }
                await delay(70)
            }
        }
    })

</script>

{#if codeDataArr.length == 0}
    <div class=" text-gray-400 font-semibold">
        {#if !error}
            <div class="relative text-center">
                <div class="absolute z-20 top-[-15px] text-white translate-x-[30px] bchcry uppercase">No tickets?</div>
                <img src = {noTickets} class=" translate-y-2 h-[200px] invmgmind border-black border-2">
            </div>
        {:else}
            Error, Please contact support
        {/if}
    </div>
{:else}
    <div class=" loadinafterimg items-center justify-center max-sm:h-full max-sm:w-screen z-0  absolute max-sm:rounded-none text-white  flex flex-col px-10 pb-10 pt-4 rounded-lg">
        <div bind:this={titleTxt} class="w-full  text-center bg-clip-text text-[#f8f7e6] titleshadow text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl bchcry  mb-5 sm:mb-10">

        </div>
        <div class=" bg-[#FAF6E1] px-4 pt-4 rounded-lg shadow-2xl max-sm:w-fit">
            {#key currentData}
                <QRCode codeValue = {currentData} squareSize = {300}/>
            {/key}
            <div class="w-full text-center text-gray-900 text-2xl font-extrabold  mt-2 mb-3 ">
                {#if typeArr[cursor] == "MASQR"}
                    <div class=" w-full text-xl text-center">
                        6PM, 2<sup>nd</sup> September '23
                    </div>
                {:else}
                    {nameArr[cursor]}
                {/if}
            </div>

        </div>

        {#if codeDataArr.length > 1}
            <div class="w-full text-center bg-clip-text text-transparent text-2xl  mt-4">
                <button on:click={next} class=" bchcry text-white uppercase w-fit px-4 rounded-lg h-full active:text-zinc-800 bg-clip-border duration-200">next</button>
            </div>
        {/if}
        <div class=" w-full text-center pt-10 text-[#f8f7e6] ">
            This QR is your ticket.<br>Take a screenshot, <i>Just in case.</i>
        </div>

    </div>
{/if}

<style>
    .titleshadow{
        text-shadow: 3px 2px #523e00;
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

    .invmgmind{
        filter: invert(100%);
    }

    .blur-box {
        box-shadow: 0 0 200px 100px #1f1f1f;
    }
</style>

