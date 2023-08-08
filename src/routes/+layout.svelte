<script>
    import "../app.css"
    import Footer from "$lib/Footer.svelte";
    import bg from  "../assets/bgggg.jpg"



</script>
<!-- oldbg bg-gradient-to-t from-[#35180a] via-[#180524] to-[#2c0418] -->

<div class=" relative w-screen h-[100dvh] bg-transparent  flex flex-col items-center justify-center" >
    <img src={bg} class=" fixed top-0 -z-10 left-0 w-screen h-screen blur-sm invert">
    <slot />
    <div class="absolute bottom-0">
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
</style>
