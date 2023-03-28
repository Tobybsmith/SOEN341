<script lang="ts">
    // import { SystemDrive } from "$env/static/private";
    /** @type {import('./$types').PageData} */
    

    import Profile from "../../components/profile/Profile.svelte"
    //Need to get user stuff from a database, but this will be hard-coded for now
    
    
    export let data; //ADDED for DB
    const users = data.users

    const img = "../../gogh.jpg";
    const username = "vinnyG";
    const display_name = "Vincent Van Gogh";
    const user_id = 69;
    const description = "🖌️ I love painting and cutting my own ear off";
    const location = "The Hague, Netherlands";

    // const img = users(image);
    // const username = data.user_data.db_username;
    // const display_name = data.user_data.db_display_name;
    // const user_id = data.user_data.db_user_id;
    // const description = data.user_data.db_description;
    // const location = data.user_data.db_location;


</script>

<body>
    <Profile user_desc={description} user_photo_ref={img} display_name={display_name} user_id={user_id} username={username} user_location={location}/>
</body>

<style>
    body
    {
        margin: 0;
    }
</style>