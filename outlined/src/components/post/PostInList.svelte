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

<style type="text/scss">
    @import "PostInList.scss";
</style>

<div class="outer-container">
    <div class="title" id='title-text'>{title}</div>
    <div class="content">
        <div class="description">{description}</div>
        <button on:click|once={HandleClick} class="apply-button">Apply!</button>
    </div>
</div>