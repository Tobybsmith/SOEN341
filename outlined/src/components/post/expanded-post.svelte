<script>
    import Post from "../post/PostInList.svelte"

    export let poster = 'Matrox Graphics Inc.'
    export let description = 'null'
    export let title = 'null'
    export let job_id = -1;
    export let date = string(job_id) + ' days ago';
    export let salary = 0;
    
    //EN, FR, BI, CUSTOMER, DEGREE, CONTRACT
    export let tags = [false, false, false, false, false, false];

    function handleApply(){
        

    }
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
button:active{
        background-color: #f9a825;
        transition-duration: 0;

}
button{
        height: 2rem;
        width: 8rem;
        font-size: 1rem;
        margin-left: auto;
        border: 0.125rem solid #37474f;
        border-radius: 25px;
        color: #eceff1;
        background-color: #f9a825;
        position: relative;
 }
 button:hover{
        color: #37474f;
        background-color: #eceff1;
}
</style>

<body>
    <div class= "outer-container">
        <div class = "title">{title}</div>
        <div class = "information">
            <div class = "description"> {description}</div>
            <div class = "bottom">
                <span class="poster"> Posted by: {poster}</span>
                <button on:click={handleApply} class="apply-button">Apply!</button>
                <span class="date"> Posted: {date} </span>
            </div>
        </div>
    </div>
</body>