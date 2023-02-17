<script lang="ts">
    import Profile from "../../components/profile/Profile.svelte"
    //Need to get user stuff from a database, but this will be hard-coded for now
    const img = "../../../gogh.jpg";
    const username = "vinnyG";
    const display_name = "Vincent Van Gogh";
    const user_id = 69;
    const description = "🖌️ I love painting and cutting my own ear off";
    const location = "The Hague, Netherlands"
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