<script lang="ts">
    import Post from "../../../components/post/PostInList.svelte"
    
    import type {SvelteComponent, SvelteComponentTyped} from 'svelte';
    //All this will be filled in with a database query by the app when the user logs in
    export let username = "";
    export let display_name = "tibsmith";
    export let user_id = 0;
    export let user_photo_ref = "null"
    export let user_desc = "null";
    export let user_location = "null";
    export let user_resume_ref = "null";
    
    //All this needs to be filled in from a database
    export let applied_to : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "Svelte Engineer",  description: "Applicant must have 3 years experience with SvelteKit and Vite. Starting Salary: 120k + stock options", id:0}],
        [Post, {title: "Textbook Author", description: "Applicant must have a PhD in related field.", id: 1}],
        [Post, {title: "Farmer", description: "Applicant must be comfortable around sheep", id: 2}],
        [Post, {title: "Sheep", description: "10 year's experince required. Must be comfortable around farmers. No black sheep!", id: 3}],
        [Post, {title: "SAE AeroDesign Coordinator", description: "Must hate being alive", id: 1}],
        [Post, {title: "Teacher", description: "Applicant mustn't be a weirdo", id: 2}],
        [Post, {title: "Astronaut", description: "Applciant must be at least 50. Applicant must have a space-themed last name", id: 3}],
    ];

    export let shortlisted : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "SOEN 341 Professor",  description: "Applciant must be a nice guy who gives excellent lectures and has a nice vibe overall", id:7}],
        [Post, {title: "Brewmaster", description: "5 years experince required. Applicant must have BJCP completed at leas 1 year ago. Gluten-Free applicants will be ignored.", id: 31}],
    ];

    function button_func()
    {
        console.log("Saved Description: " + user_desc);
    }
    function see_more_hist()
    {
        console.log("See more");
    }
    function see_more_list()
    {
        console.log("Also see more");
    }
</script>

<body>
    <div class="display-name wide bigger top-curve">All Applied and Shortlisted jobs</div>
    <main>
        <div class="applied-to one-rem-il">
            <p class="big">Previously Applied To:</p>
            {#each applied_to as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
        </div>
        <div class="">
            <p class="big">Short-Listed Posts:</p>
            {#each shortlisted as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
        </div>
    </main>
</body>

<style lang="scss">
    body
    {
        border: 0.25rem solid #37474f;
        border-radius: 25px;
        color: #37474f;
        margin-inline: auto;
    }
    main
    {
        display: flex;
    }
    .display-name
    {
        flex-basis: 100%;
        background-color: var(--main-high);
        text-align: center;
    }
    .wide
    {
        width: 100%;
    }
    .big
    {
        font-size: larger;
        font-weight: 600;
    }
    .bigger
    {
        font-size: x-large;
        font-weight: 800;
    }
    .one-rem-il
    {
        margin-inline: 1rem;
    }
    .one-rem-bl
    {
        margin-block: 1rem;
    }
    .hist
    {
        display: flex;
        flex-direction: row;
        grid-row: 1/2;
        grid-column: 2/2;
        align-self: end;
    }
    .top-curve
    {
        border-radius: 21px 21px 0 0;
    }
    .user-bio
    {
        width: 25rem;
        height: 1.5rem;
        font-size: 1rem;
    }
    button
    {
        height: 2rem;
        width: 4rem;
        font-size: 1rem;
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
    .see-more
    {
        width: 6rem;
    }
</style>