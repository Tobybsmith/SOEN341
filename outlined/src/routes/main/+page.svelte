<script lang="ts">
    import type {SvelteComponent, SvelteComponentTyped} from 'svelte';
    
    import Red from '../../components/test/Red.svelte'
    import Green from '../../components/test/Green.svelte'

    import Post from '../../components/post/PostInList.svelte'
    import { listen } from 'svelte/internal';
    
    export let posts : [typeof SvelteComponent, Record<string, any>][] =[
        [Post, {title: "Svelte Engineer",  description: "Does Stuff fr :)", id:0}],
        [Post, {title: "Textbook Author", description: "W", id: 1}],
        [Post, {title: "Farmer", description: "Must Be Good With Sheep", id: 2}],
        [Post, {title: "Sheep", description: "Must Be Good With Farmers", id: 3}],
    ]; 

    const options = 
    [
        {color: "red", component: Red},
        {color: 'green', component: Green},
    ];

    //Default
    let selected = options[1];
</script>

<style lang="scss">
    p
    {
        color: rgb(35, 68, 168);
        a
        {
            color: orangered;
        }
    }
    ul
    {
        list-style-type: none;
    }
</style>

<main>
    <h1>
        Job posts can be found here! 
    </h1>
    <p>This is where all the postings go!</p>
    <p>Click <a href="../">ME</a> to go back to the home page</p>

    <ul class="post-container">
        {#each posts as [post, props]}
            <li>
               <svelte:component this={post} {...props}/>
            </li>
            
        {/each}
    </ul>


    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>

    <svelte:component this={selected.component}/>
    
</main>