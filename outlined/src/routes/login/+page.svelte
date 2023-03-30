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
    function GoToMain()
    {
        goto("/main");
    }

    function GoToRegister(){
        goto("/register");
    }

    let show_password = true
    $: type = show_password ? 'text' : 'password'
    let value = '';
	
    function onInput (event) {
	value = event.target.value
    }
</script>

<main class="root">
    <form on:submit|preventDefault={submit}>
        <h1 class="main">Please sign in</h1>

        <h3 class="main">Email Address:</h3>
        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
        </div>
        <h3 class="main">Password:</h3>
        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password" on:input={ onInput }>
            <button type="button" on:click="{ () => show_password = !show_password }">{show_password ? 'Hide' : 'Show'}</button>
        </div>
        <button class="button-container" type="submit" on:click|preventDefault={GoToMain}>Submit</button>

        <h1 class="main">Do not have account yet? Register here!</h1>
        <button class="button-container" on:click|preventDefault={GoToRegister}>Register</button>
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
.button-container
{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}
main
{
    margin: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>