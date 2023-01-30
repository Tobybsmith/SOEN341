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
    }
    p
    {
        color: var(--main-text);
        a
        {
            color: var(--main-high);
        }
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

