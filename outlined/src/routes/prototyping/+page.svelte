<script>
    import { each } from 'svelte/internal';

    import ExpandedPost from '../../components/post/expanded-post.svelte';

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
       <ExpandedPost poster="Matrox" description="Just a chill dude fr, like just a guy u know that can totally be gamed with.  " title="ASIC/FPGA Validation Intern" date="10/02/2022"/>
    </div>
</main>