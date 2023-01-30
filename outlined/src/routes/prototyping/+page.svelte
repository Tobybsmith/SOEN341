<script>
    import { each } from 'svelte/internal';

    //Load the import stuff
    import Post from '../../components/post/PostInList.svelte'

    //This will come from a database eventually
    let job_titles = ["ACME Trap Designer", "Microbrewer", "Macrobrewer"]
    let job_descs = ["Senior trap designer needed. Coyote experience required. Explosives knowledge preferred", 
    "Microbrewer needed. Must be < 6 inches tall.", 
    "Macrobrewer needed. Must be > 6 feet tall. 5 years experience required."];
    //In the database, each post should have title, desc, ID, tags (words), quals, and a parent company
    //Searching should be by keyword matching with no loose searching functionality
    //Will use either MySQL, MongoDB, or FireBase depending
</script>

<style type="text/scss">
    @import "../../styles/global.scss";
</style>
 

<main>
    <h1>
        This is the prototype page for testing new features visually
    </h1>
    <div class="post_container">
        {#each job_titles as title, index}
            <Post title={title} description={job_descs[index]} job_id={index}/>
        {/each}
    </div>
</main>