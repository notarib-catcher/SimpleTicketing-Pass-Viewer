<script>
    import GitHub from "../assets/github-mark.svg"
    import {browser} from "$app/environment";
    const pushGithub = async () => {
        if(browser){
            window.location = "https://github.com/notarib-catcher/SimpleTicketing-Pass-Viewer"
        }
    }
</script>

<div class="fixed z-10 bottom-0 left-0 h-fit w-screen flex-nowrap text-center flex flex-row items-center justify-center py-2 bg-gradient-to-l from-gray-800 to-black font-semibold">
    <button class=" font-normal hover:font-semibold flex flex-row whitespace-nowrap bg-white focus:bg-opacity-10 p-2 rounded-lg hover:bg-opacity-10 bg-opacity-0  transition-all duration-200">
        <div class="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 whitespace-nowrap to-pink-700 text-xs" on:click={pushGithub}>Built with 💓 by Aaryan - Source code on </div>
        <div class=" ml-[4px]"><img src = {GitHub} class=" object-cover h-[17px] pb-[2px]"></div>
    </button>
</div>

<style>
</style>