<script>
    import { goto } from '$app/navigation';
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let name = ' ', email = ' ', password = ' ', confirmpassword = ' '

    $:submit = async () => {
        await axios.post('register', {
            name,
            email,
            password,
            confirmpassword
        });

        await push ('/login');
    }

    function GoToMain(){
        goto("/main");
    }

</script>

<main class="root">
    <form on:submit|preventDefault={submit}>
        <h1 class="main">You don't want to miss out! Register yourself here!</h1>
        
        <h2 class="main">Name</h2>
        <div class="form-floating">
            <input bind:value={name} class="main" placeholder="Full Name">
        </div>

        <h2 class="main">Email Address</h2>
        <div class="form-floating">
            <input bind:value={email} type="email" class="main" placeholder="name@example.com">
        </div>

        <h2 class="main">Password</h2>
        <div class="form-floating">
            <input bind:value={password} type="password" class="main" placeholder="Password">
        </div>

        <h2 class="main">Confirm Password</h2>
        <div class="form-floating">
            <input bind:value={confirmpassword} type="password" class="main" placeholder="Confirm Password">
        </div>

        <button class="button-container" type="submit" on:click|preventDefault={GoToMain}>Submit</button>
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