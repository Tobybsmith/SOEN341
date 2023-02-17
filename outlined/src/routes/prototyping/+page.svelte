<script>
    import { each } from 'svelte/internal';

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
</script>


<main>
    <h1>
        This is the prototype page for testing new features visually
    </h1>

    <div class="post_container">
        <!--
            {#each job_titles as title, index}
            <Post title={title} description={job_descs[index]} job_id={index}/>
            {/each}
        -->
        <Profile username="tibsmith" display_name="Tobias Smith" user_photo_ref="../../../office_man.png" user_id={userid} user_desc="Just a chill dude, cool like that you know?" user_location="Montreal, QC" user_resume_ref="null"/>
    </div>
</main>