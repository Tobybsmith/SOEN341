<script>
    let temp = "page! :)"
</script>

<!--
    SASS is being used to make CSS nicer.
    Note how the text in the p is green,
    but the nested a text is yellow!
    Order does not matter, since cascading doesn't
    happen with inheritance
-->
<style lang="scss">
    h1
    {
        color: blueviolet;
    }
    p
    {
        a
        {
            color: goldenrod;
        }
        color: green;
    }
    .pro
    {
        color: rgb(125, 75, 25);
    }
</style>

<main>
    <h1>
        This is the landing {temp}
    </h1>
    <p>It is the first page someone will see when they navigate to our site!</p>
    <p>Click <a href="main">ME</a> to go to the main page!</p>
    <p>Click <a href="prototyping" class="pro">ME</a> to go to the prototyping page</p>
</main>

