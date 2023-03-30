<script>
    import Post from "../post/PostInList.svelte"

    export let poster = 'null'
    export let description = 'null'
    export let title = 'null'
    export let date = 'null'
    export let salary = 0;
    export let job_id = -1;
    //EN, FR, BI, CUSTOMER, DEGREE, CONTRACT
    export let tags = [false, false, false, false, false, false];
</script>

<style>
body
{
    margin: 0;
    margin-inline: 1rem;
}
.outer-container{
    display: flex; 
    flex-direction: column;
    width: 75rem;
    background-color: var(--main-color);
    color: var(--main-text);
    border: 0.125rem solid #212121;
    border-radius: 1rem;
}
.title{
    padding: 0.5rem;
    background-color: var(--main-high);
    border-radius: 0.95rem 0.95rem 0 0;
    color: var(--main-color);
}
.information{
    display: flex; 
    flex-direction: column;
}
.description{

    padding-left: 0.5rem;
    white-space: pre-wrap;
}
.bottom{
    display: flex; 
    flex-direction: row;
    padding: 0.5rem;
    background-color: var(--main-high);
    border-radius: 0 0 0.95rem 0.95rem;
    color: var(--main-color);
    margin-top: 0.25rem;
}
.date{
    margin-left: auto; 

}
</style>

<body>
    <div class= "outer-container">
        <div class = "title">{title}</div>
        <div class = "information">
            <div class = "description"> {description}</div>
            <div class = "bottom">
                <span class="poster"> Posted by: {poster}</span>
                <span class="date"> Posted: {date} </span>
            </div>
        </div>
    </div>
</body>