<script>
    import { browser } from "$app/environment"
    import QRCode from "$lib/QRJS.svelte"




    const passNameDisplay = {
        "EXAMPLE_TYPE":"examplepass",
        "MASQR": "2 September 2023, 6PM"
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

</script>

{#if codeDataArr.length == 0}
    <div class=" text-gray-400 font-semibold">
        {#if !error}
            No passes to display
        {:else}
            Error, Please contact support
        {/if}
    </div>
{:else}
    <div class=" loadinafterimg items-center justify-center max-sm:h-full max-sm:w-screen z-0  absolute max-sm:rounded-none text-white  flex flex-col px-10 pb-10 pt-4 rounded-lg">
        <div class="w-full  text-center bg-clip-text text-[#f8f7e6] titleshadow text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl bchcry  mb-5 sm:mb-10">
            MASQUERADE BALL
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
            <div class="w-full text-center bg-clip-text text-transparent bg-gradient-to-r text-2xl  via-[#59e8f8] to-[#6088f9] from-[#6088f9]  mt-4">
                <button on:click={next} class=" w-fit px-4 rounded-lg h-full active:text-zinc-800 bg-clip-border duration-200">next</button>
            </div>
        {/if}
        <div class=" w-full text-center pt-10 text-[#f8f7e6] ">
            This QR is your ticket.<br>Take a screenshot, <i>Just in case.</i>
        </div>

    </div>
{/if}

<style>
    .titleshadow{
        /*text-shadow: 3px 2px #523e00;*/
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
</style>

