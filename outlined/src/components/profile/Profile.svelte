<script lang="ts">
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
    //We need like 10 maybe
    let applied_to : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "Svelte Engineer",  description: "Does Stuff fr :)", id:0}],
        [Post, {title: "Textbook Author", description: "W", id: 1}],
        [Post, {title: "Farmer", description: "Must Be Good With Sheep", id: 2}],
        [Post, {title: "Sheep", description: "Must Be Good With Farmers", id: 3}],
    ];

    let shortlisted : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "Sitcom Extra",  description: "Must have white teeth", id:7}],
        [Post, {title: "Technical Writer", description: "4 Years experience required, more wanted", id: 31}],
        [Post, {title: "Human Test Subject", description: "Looking for a [REDACTED] to participate in [REDACTED]", id: 11}],
        [Post, {title: "Micro-Brewer", description: "Must be less than 6 inches tall. 5 years experience required.", id: 19}],
    ];
</script>

<div class="display-name wide bigger">{display_name}'s Profile</div>
<main>
    <img src={user_photo_ref} alt="User's Profile" class="user-photo left one-rem-il one-rem-bl">
    <div class="text-container">
        <!--Utility Class moment lmao-->
        <div class="username left one-rem-il one-rem-bl"><span class="big">Username: </span>{username}</div>
        <div class="user-desc left one-rem-il one-rem-bl"><span class="big">User Bio: </span>{user_desc}</div>
        <div class="user-location left one-rem-il one-rem-bl"><span class="big">User Location: </span>{user_location}</div>
        <div class="user-resume left one-rem-il one-rem-bl"><span class="big">User Resume: </span>{user_resume_ref}</div>
    </div>
    <div class="hist right">
        <div class="applied-to one-rem-il">
            <p class="big">Previously Applied To:</p>
            {#each applied_to as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
        </div>
        <div class="viewed one-rem-il">
            <p class="big">Short-Listed Posts:</p>
            {#each shortlisted as [listing, props]}
                <svelte:component this={listing} {...props} />
            {/each}
        </div>
    </div>
</main>

<style lang="scss">
    main
    {
        border: 1px solid lime;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: var(--main-col);
        width: auto;
        margin: auto;
    }
    img
    {
        max-width: 350px;
        aspect-ratio: 1/1;
        background-color: var(--main-high);
        grid-column: 1/2;
        grid-row: 1/2;
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
    .left
    {
        
    }
    .right
    {
        
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
        border: 1px solid red;
        display: flex;
        flex-direction: row;
        grid-row: 0/2;
        grid-column: 2/2;
    }

</style>