<script>
    import Login from "./+page.svelte";
    import Register from "../register/+page.svelte";
    import Home from "./home.svelte";
    import Router, {link} from "svelte-spa-router";

    const routes = {
        '/': Home,
        '/login': Login,
        '/register': Register,
    };
</script>

<header class="p-3 bg-dark text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
            </ul>
            <div class="text-end">
                <a href="/login" class="btn btn-outline-light me-2">Login</a>
                <a href="/register" class="btn btn-outline-light me-2">Register</a>
            </div>
        </div>
    </div>
</header>