<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let name = ' ', email = ' ', password = ' '

    $:submit = async () => {
        await axios.post('register', {
            name,
            email,
            password
        });

        await push ('/login');
    }
</script>

<main class="formm-signin">
    <form on:submit={submit}>
        <h1 class="h3 mb-3 fw-normal">You can register here</h1>

        <div class="form-floating">
            <input bind:value={name} class="form-control" placeholder="Name">
            <label><input type='text'>Name</label>
        </div>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <label><input type='text'>Email Adress</label>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
            <label><input type='text'>Password</label>
        </div>

        <button class="w-100 btn btn-lg btn primary" type="submit">Submit</button>
    </form>
</main>