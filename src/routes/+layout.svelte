<script>
    import "../app.css"
    import Footer from "$lib/Footer.svelte";
    import bg from  "../assets/closetedbg.webp"



</script>
<!-- oldbg bg-gradient-to-t from-[#35180a] via-[#180524] to-[#2c0418] -->

<div class=" relative w-screen h-[100dvh] bg-transparent  flex flex-col items-center justify-center" >
    <img src={bg} class="loadinimg fixed top-0 -z-10 left-0 w-screen h-screen blur-sm invert">
    <slot />
    <div class="loadinwithimg absolute bottom-0">
        <Footer />
    </div>
</div>


<style>
    div{
        overflow: hidden;
    }
    img {
        -webkit-filter: invert(1);
        filter: invert(1) brightness(15%);

    }

    @keyframes animloadinimg {
        0%{
            opacity: 0.5;
            filter: invert(50%) brightness(20%);
        }
        50%{
            opacity: 0.5;
            filter: invert(50%) brightness(20%)
        }
        100%{
            opacity: 1;
            filter: invert(100%) brightness(15%)
        }
    }


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

    .loadinimg{
        animation-name: animloadinimg;
        animation-duration: 800ms;
        animation-fill-mode: forwards;
    }
</style>
