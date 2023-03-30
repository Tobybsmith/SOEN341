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

<header class="root">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
            </ul>
            <div class="text-end">
                <a href="/login" class="main">Login</a>
                <a href="/register" class="main">Register</a>
            </div>
        </div>
    </div>
</header>

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
</style>