<!--
    Create a div to contain everything
-->

<script>
    import { goto } from "$app/navigation";


    export let title = "null"
    export let description = "null"
    export let job_id = -1

    export let en = false;
    export let fr = false;
    export let bi = false;
    export let contract = false;
    export let customer = false;
    export let degree = false;

    //thousand USDs
    export let sal = 40;

    function HandleClick()
    {
        //worst code ever
        if (true)
        {
            //goto job ID
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
        background-color: var(--main-color);
    }
    .outer-container
    {
        width: 20rem;
        height: 7.5rem;
        background-color: var(--main-color);
        color: var(--main-text);
        border: 0.125rem solid var(--sec-color);
        border-radius: 1rem;
        margin-bottom: 1rem;
    }
    .title
    {
        padding: 0.5rem;
        background-color: var(--main-high);
        border-radius: 0.95rem 0.95rem 0 0;
        color: var(--main-color);
        -webkit-line-clamp: 1;
        line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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
    button
    {
        height: 2rem;
        width: 8rem;
        font-size: 1rem;
        margin-left: 0.5rem;
        border: 0.125rem solid #37474f;
        border-radius: 25px;
        color: #eceff1;
        background-color: #f9a825;
        position: relative;
    }
    button:hover
    {
        color: #37474f;
        background-color: #eceff1;
    }
    button:active
    {
        background-color: #f9a825;
        transition-duration: 0;

    }
</style>

<div class="outer-container">
    <div class="title">{title}</div>
    <div class="content">
        <div class="description">{description}</div>
        <div class="bottom-row">
            <button on:click|once={HandleClick} class="apply-button">Read More...</button>
            <!--<a href="." class="apply-link">Read More...</a>-->
        </div>
    </div>
</div>