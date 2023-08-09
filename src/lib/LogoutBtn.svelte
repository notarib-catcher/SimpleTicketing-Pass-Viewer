<script>
    import {signOut} from "@auth/sveltekit/client";
    export let name;
    let spinner, LGText
    const onClickLogout = async () => {
        LGText.hidden = true
        spinner.hidden = false
        setTimeout(() => {
            signOut({callbackUrl:"/"})            
        }, 1000);

    }
</script>
<div class="fixed top-1 right-1 flex flex-row items-center loadinwithimg">
    <div class=" font-bold bchcry bg-[#dad9ca] max-sm:fixed max-sm:left-2 max-sm:top-3 max-sm:w-screen bg-clip-text text-transparent">
        Welcome, {name}
    </div>
    <button class="focus:animate-pulse mr-1 ml-2 bg-opacity-5 p-2 rounded-xl bchcry uppercase text-white hover:bg-white hover:bg-opacity-10 bg-white focus:bg-opacity-10 transition-all duration-300 font-light flex flex-row " on:click={onClickLogout}>
        <svg bind:this={spinner} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" hidden><circle class="spinner_qM83" cx="4" cy="12" r="3"/><circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/><circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/></svg>
        <div bind:this={LGText}>Logout</div>
    </button>
</div>

<style>
    .spinner_qM83{animation:spinner_8HQG 1.05s infinite}.spinner_oXPr{animation-delay:.1s}.spinner_ZTLf{animation-delay:.2s}
    @keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}
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
</style>

