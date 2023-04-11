<script>
    import { each } from 'svelte/internal';

    import ExpandedPost from '../../components/post/expanded-post.svelte';
    import Post from '../../components/post/PostInList.svelte'; 



    //This will come from a database eventually
    let job_titles = ["ACME Trap Designer", "Microbrewer", "Macrobrewer"]
    let job_descs = ["Senior trap designer needed. Coyote experience required. Explosives knowledge preferred", 
    "Microbrewer needed. Must be < 6 inches tall.", 
    "Macrobrewer needed. Must be > 6 feet tall. 5 years experience required. This is some extra text to make this longer for testing purposes"];
    //In the database, each post should have title, desc, ID, tags (words), quals, and a parent company
    //Searching should be by keyword matching with no loose searching functionality
    //Will use either MySQL, MongoDB, or FireBase depending

    import Profile from "../../components/profile/Profile.svelte";
    let userid = 0;

    export let title;
    export let description;
    export let poster;
    export let date;
    export let salary;
    export let job_id; 

    function handleMessage(){

    title  = "ll"
    description = "ll"
    poster = "ll"
    date = "ll"
    salary = "ll"
    job_id = "ll" 

}
</script>





<main>
    <h1>
        This is the prototype page for testing new features visually
    </h1>
    <div>
        <Post > 
            <svelte:component on:message={handleMessage}/>
        </Post>
     </div>
    

    <div class="post_container">
       <ExpandedPost poster= {poster} description= {description}
                
       title= {title} date= {date}/>
    </div>
</main>