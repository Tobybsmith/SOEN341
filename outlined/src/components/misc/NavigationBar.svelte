<script>
    //Nav bar will go here!
    export let selected_page = "home";
</script>

<main>
    <div class="bar">
        <!--Conditional Logic in HTML? Wowee-->
        <a href="." class="{selected_page === "home" ? "sel" : "no-sel"}">Home</a>
        <a href="." class="{selected_page === "home" ? "sel" : "no-sel"}">Profile</a>
        <a href="." class="{selected_page === "home" ? "sel" : "no-sel"}">Landing Page</a>
    </div>
</main>