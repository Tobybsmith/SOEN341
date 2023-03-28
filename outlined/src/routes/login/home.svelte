<script>
    import {onMount} from 'svelte';
    import axios from 'axios';
    import { push } from 'svelte-spa-router';

    let message = 'You are not logged in';

    onMount(async () => {
        const Response = await axios.get('http://localhost:5173/api/user');

        if (Response.status === 200) {
            message = `Hi ${Response.data.name}`
        }
    });

    $: logout = async () => {
        await axios.post('logout', {}, {withCredentials: true} );
        axios.defaults.headers.common['Authorization'] = '' ;

        await push('\login')
    }
    
</script>

<div class="container mt-5 text-center">
    <h3>
        {message}
    </h3>
    <a href="svelte:void(0)" class="btn btn-lg btn-primary"
    on:click={logout}
    >logout</a>
</div>