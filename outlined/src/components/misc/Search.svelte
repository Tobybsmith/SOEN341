<script>
    import { construct_svelte_component } from "svelte/internal";

    export let search_query = "";
    export let value = 40;
    export let en = false;
    export let fr = false;
    export let bi = false;
    export let contract = false;
    export let customer = false;
    export let degree = false;

    function Clear()
    {
        search_query = "";
    }

    function Search()
    {
        //Do all the search stuff
        console.log("Search Query:");
        console.log(search_query);
        console.log(value);
        console.log(en);
        console.log(fr);
        console.log(bi);
        console.log(contract);
        console.log(customer);
        console.log(degree);
        console.log();
    }
</script>

<style>
    body
    {
        color: #212121;
        height: 20rem;
    }
    input
    {
        margin-top: 0;
        border: none;
        background-color: #eceff1;
        border-radius: 1rem;
    }
    input:focus
    {
        outline: none;
    }
    .bar-container
    {
        background-color: #eceff1;
        padding: 0;
        margin-bottom: 2rem;
        border: 0.125rem solid #212121;
        border-radius: 1rem;
        padding-left: 0.35rem;
        padding-bottom: 0.1rem;
    }
    .search-button
    {
        margin-top: 0;
        border: 0.125rem solid #37474f;
        width: 8rem;
        height: 1.5rem;
        background-color: #eceff1;
    }
    .search-button:hover
    {
        background-color: #f9a825;
        color: #eceff1;
    }
    .search-button:active
    {
        background-color: #eceff1;
        color: #f9a825;
    }
    .salary-slider
    {
        margin-bottom: 2rem;
    }
    .check-container
    {
        margin-bottom: 2rem;
    }
    .wide
    {
        width: 8rem;
    }
    .clear
    {
        border: none;
        background-color: #eceff1;
    }
    .clear:hover
    {
        background-color: #f9a825;
        color: #eceff1;
    }
    .clear:active
    {
        background-color: #eceff1
    }
    .search-bar
    {
        width: 10rem;
    }
    input[type="checkbox"]
    {
        accent-color: #f9a825;
    }
    input[type="range"]
    {
        accent-color: #f9a825;
    }
</style>

<body>
    <div class="main-container">
        <div>Search by keyword</div>
        <div class="bar-container">
            <!--Two way binding is so sexy omg-->
            <input type="text" name="searchbar" id="searchbar" class="search-bar" bind:value={search_query}>
            <button class="clear" on:click={Clear}>X</button>
        </div>
        <div class="salary-slider">
            <div>Minimum salary: ${value}k</div>
            <input type="range" min="40" max="160" step="10" bind:value>
        </div>
        <div class="check-container">
            <!--Tag system, 6 tags: English Only, French Only, Customer Facing, Degree Required, Freelance/Contract Work, Bilingual-->
            <input type="checkbox" name="en" id="en" bind:checked={en}>
            <label for="en">English Only</label><br>
            <input type="checkbox" name="fr" id="fr" bind:checked={fr}>
            <label for="fr">French Only</label><br>
            <input type="checkbox" name="bi" id="bi" bind:checked={bi}>
            <label for="bi">Biligual Required</label><br>
            <input type="checkbox" name="customer" id="customer" bind:checked={customer}>
            <label for="customer">Customer Facing</label><br>
            <input type="checkbox" name="degree" id="degree" bind:checked={degree}>
            <label for="degree">Degree Required</label><br>
            <input type="checkbox" name="contract" id="contract" bind:checked={contract}>
            <label for="contract">Freelance/Contract Work</label><br>
        </div>
        <div>
            <button class="search-button" on:click={Search}>Search 🔍</button>
        </div>
    </div>
</body>