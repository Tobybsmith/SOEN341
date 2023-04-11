<script>
    import { goto } from '$app/navigation';

// @ts-nocheck

    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let email = '', password = '';

    $: submit = async () => {
        const response = await axios.post('login', {
            email,
            password
        }, {withCredentials: true});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            await push('/');
        }
    }
    function GoToProfile()
    {
        goto("/profile");
    }

    function GoToRegister(){
        goto("/register");
    }

    let show = false
</script>

<main class="root">
    <div class="nav-bar">
        <span class="title">
            <svg class="name-svg" width="400" height="125" viewBox="0 0 400 125" xmlns="http://www.w3.org/2000/svg">
                <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="white" stroke-width="1.5mm" fill="#212121"></g></svg></span></div>
    <form on:submit|preventDefault={submit}>
        <h1 class="main">Please sign in</h1>

        <h3 class="main">Email Address:</h3>
        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
        </div>
        <h3 class="main">Password:</h3>
        <div class="pw">
            <input id="pw" type={show ? "text" : "password"} placeholder="enter your password "/> 
            <button id="eye" on:click|preventDefault={() => show = !show}>
                {#if show}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {/if}
            </button>
        </div>
        <h2>   </h2>
        <button class="button" type="submit" on:click|preventDefault={GoToProfile}>Submit</button>

        <h1 class="main">Do not have account yet? Register here!</h1>
        <button class="button" on:click|preventDefault={GoToRegister}>Register</button>
    </form>
</main>

<style>
:root
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    --corner-curve: 25px;
    --main-color: #eceff1;
    --sec-color: #37474f;
    --main-text: #212121;
    --main-high: #f9a825;

    background-color: var(--main-color);
    color: var(--main-text);
    margin: 0;
    overflow-x: hidden;
}
button
    {
        height: 2rem;
        width: 5rem;
        font-size: 1rem;
        border: 0.125rem solid #37474f;
        border-radius: 25px;
        color: #eceff1;
        background-color: #f9a825;
        position: relative;
    }
main
{
    margin: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
button svg {
		width: 20px;
		height: 0.75rem;
	}
	#eye {
		margin: -10px;
	}
input {
    height: 1.5rem;
    width: 10rem;
    border: 0.125rem solid #37474f;
    border-radius: 25px;
}
</style>