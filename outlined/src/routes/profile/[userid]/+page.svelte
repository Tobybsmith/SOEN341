<script lang="ts">
    // import { SystemDrive } from "$env/static/private";
    /** @type {import('./$types').PageData} */
    

    import Profile from "../../../components/profile/Profile.svelte"
    //Need to get user stuff from a database, but this will be hard-coded for now
    
    
    export let data; //ADDED for DB
    // const users = data.users
    const { user } = data

    const img = user.image;
    const username = user.firstName + " " + user.lastName;
    const display_name = user.firstName;
    const user_id = user.id;
    const description = user.company.title;
    const location = user.address.city;


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