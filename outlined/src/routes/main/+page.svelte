<script>
    import Red from '../../components/test/Red.svelte'
    import Green from '../../components/test/Green.svelte'

    const options = 
    [
        {color: 'red', component: Red},
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
</style>

<main>
    <h1>
        This is the main page!
    </h1>
    <p>This is where all the postings go!</p>
    <p>Click <a href="../">ME</a> to go back to the home page</p>


    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>

    <svelte:component this={selected.component}/>
    
</main>