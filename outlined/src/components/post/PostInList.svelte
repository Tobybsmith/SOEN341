<!--
    Create a div to contain everything
-->

<script>
    export let title = "null"
    export let description = "null"
    export let job_id = -1

    function HandleClick()
    {
        //worst code ever
        if (true)
        {
            console.log("Clicked Apply!");
            console.log(job_id);
        }
    }
</script>

<style lang="scss">
    :root
    {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        --corner-curve: 25px;
        --main-color: #eceff1;
        --sec-color: #37474f;
        --main-text: #212121;
        --main-high: #f9a825;
    }
    .outer-container
    {
        width: 25rem;
        height: 7.5rem;
        background-color: var(--main-color);
        color: var(--main-text);
        border: 0.125rem solid var(--sec-color);
        border-radius: 1rem;
        margin-block: 1rem;
    }
    .title
    {
        padding: 0.5rem;
        background-color: var(--main-high);
        border-radius: 0.95rem 0.95rem 0 0;
        color: var(--main-color);
    }
    .description
    {
        padding-left: 0.5rem;
        height: 2.75rem;
        overflow: hidden;
        white-space: pre-wrap;
        text-overflow: ellipsis;
    }
    .bottom-row
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.5rem;
    }
    a
    {
        text-decoration: none;
        color: var(--main-high);
        margin-inline: 0.5rem;
    }
</style>

<div class="outer-container">
    <div class="title">{title}</div>
    <div class="content">
        <div class="description">{description}</div>
        <div class="bottom-row">
            <!--<button on:click|once={HandleClick} class="apply-button">Apply!</button>-->
            <a href="." class="apply-link">Read More...</a>
        </div>
    </div>
</div>