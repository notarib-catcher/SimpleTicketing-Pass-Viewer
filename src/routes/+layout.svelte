<script>
    import "../app.css"
    import Footer from "$lib/Footer.svelte";
</script>

<div class=" relative h-screen w-screen bg-gradient-to-t from-[#35180a] via-[#180524] to-[#2c0418] flex flex-row items-center justify-center">
    <slot />
    <div class="absolute bottom-0">
        <Footer />
    </div>
</div>


<style>
    div{
        overflow: hidden;
    }
</style>
