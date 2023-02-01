<script>
    export let name = "John Smith";
    export let story = "I Like It!";
    export let image_ref = "../../office_man.png";
</script>

<style lang="scss">
    :root
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --main-color: #eceff1;
    --sec-color: #37474f;
    --main-text: #212121;
    --main-high: #f9a825;
}
    main
    {
        height: 25rem;
        width: 15rem;
        border: 0.25rem solid var(--main-text);
        border-radius: 2.5rem;
        margin-top: 2rem;
        margin-inline: 2rem;
        background-color: var(--main-high);
    }
    img
    {
        height: 60%;
        max-width: 80%;
    }
    .name
    {
        font-size: 90%;
    }
    .story
    {
        padding-top: 1rem;
        padding-bottom: 1.5rem;
        padding-inline: 1rem;
        background-color: var(--main-color);
    }
</style>

<main>
    <img src={image_ref} alt="A portrait" class="portrait">
    <div class="name">{name}</div>
    <div class="story">{story}</div>
</main>