<script lang="ts">
    import { goto } from "$app/navigation";
    import Post from "../post/PostInList.svelte"
    
    import type {SvelteComponent, SvelteComponentTyped} from 'svelte';
    //All this will be filled in with a database query by the app when the user logs in
    export let username = "null";
    export let display_name = "null";
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
        goto("/profile/more");
    }
    function see_more_list()
    {
        goto("/profile/more");
    }
</script>

<body>
    <div class="display-name wide bigger top-curve">{display_name}'s Profile</div>
    <main>
    <img src={user_photo_ref} alt="User's Profile" class="user-photo left one-rem-il one-rem-bl">
    <div class="text-container">
        <!--Utility Class moment lmao-->
        <div class="username left one-rem-il one-rem-bl"><span class="big">Username: </span>{username}</div>
        <div class="user-desc left one-rem-il one-rem-bl">
            <span class="big">User Bio: </span>
            <!--Two way binding, user_desc will change as the user updates the form!-->
            <!--The save button isn't needed at all, but this is called User Experience ;)-->
            <input type="text" name="user-bio" class="user-bio" bind:value={user_desc}>
            <button on:click={button_func}>Save</button>
        </div>
        <div class="user-location left one-rem-il one-rem-bl"><span class="big">User Location: </span>{user_location}</div>
        <div class="user-resume left one-rem-il one-rem-bl"><span class="big">Degree: </span>{user_resume_ref}</div>
    </div>
    <div class="hist right">
        <div class="applied-to one-rem-il">
            <p class="big">Previously Applied To:</p>
            {#each applied_to as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
            <button on:click={see_more_hist} class="see-more">See More</button>
        </div>
        <div class="viewed one-rem-il">
            <p class="big">Short-Listed Posts:</p>
            {#each shortlisted as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
            <button on:click={see_more_list} class="see-more">See More</button>
        </div>
    </div>
    </main>
</body>

<style lang="scss">
    body
    {
        border: 0.25rem solid #37474f;
        border-radius: 25px;
        color: #37474f;
    }
    main
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: var(--main-col);
        width: auto;
        margin: 0;
    }
    img
    {
        max-width: 350px;
        aspect-ratio: 1/1;
        background-color: var(--main-high);
        grid-column: 1/2;
        grid-row: 1/2;
        border: 0.25rem solid #37474f;
    }
    a:hover
    {
        color: #37474f;
    }
    .text-container
    {
        grid-column: 1/2;
        grid-row: 2/2;
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