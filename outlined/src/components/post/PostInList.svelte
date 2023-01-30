<!--
    Create a div to contain everything
-->

<script>
    export let title = "null"
    export let description = "null"
    export let job_id = -1

    function HandleClick()
    {
        //Get clicked button ID - go to apply page with that data loaded
        console.log("Clicked Apply!");
        console.log(job_id);
    }
</script>

<style lang="scss">
    .outer-container
    {
        background-color: var(--main-high);
        height: 10rem;
        width: 20rem;
        margin: 1rem;
        border-radius: var(--corner-curve);
        display: flex;
        flex-direction: column;
        padding-left: 2.5rem;
        padding-top: 0.75rem;
        border: 0.25rem solid var(--sec-color);
        color: var(--main-text);

        .title
        {
            font-size: larger;
            color: var(--main-color);
            background-color: var(--main-high);
            margin-bottom: 2rem;
        }
        .content
        {
            background-color: var(--main-color);
        }
        .description
        {
            background-color: var(--main-color);
        }
        .apply-button
        {
            margin-top: 1rem;
            width: 7rem;
            border: none;
            background-color: var(--main-high);
            color: var(--main-text);
        }
        .apply-button:hover
        {
            background-color: var(--main-text);
            color: var(--main-high);
        }
    }
</style>

<div class="outer-container">
    <div class="title" id='title-text'>{title}</div>
    <div class="content">
        <div class="description">{description}</div>
        <button on:click|once={HandleClick} class="apply-button">Apply!</button>
    </div>
</div>