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

</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h2 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
        </div>
        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
        </div>
        <button class="btn" type="submit" on:click|preventDefault={GoToProfile}>Submit</button>
        <button class="btn" on:click|preventDefault={GoToProfile}>Register</button>
    </form>
</main>
