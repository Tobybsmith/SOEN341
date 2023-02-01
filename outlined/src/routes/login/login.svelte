<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let email = ' ', password = ' '

    $:submit = async () => {
        await axios.post('login', {
            email,
            password
        }, {withCredentials: true});
        
        if(Response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${Response.data.token}`;
        }
        await push ('/');
    }
</script>

<main class="formm-signin">
    <form on:submit={submit}>
        <h1 class="h3 mb-3 fw-normal">Sign here!</h1>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <label><input type='text'> Email Adress</label>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
            <label><input type='text'>Password</label>
        </div>

        <button class="w-100 btn btn-lg btn primary" type="submit">Submit</button>
    </form>
</main>