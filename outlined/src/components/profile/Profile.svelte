<script>
    //All this will be filled in with a database query by the app when the user logs in
    export let username = "null";
    export let display_name = "null";
    export let user_id = 0;
    export let user_photo_ref = "null"
    export let user_desc = "null";
    export let user_location = "null";
    export let user_resume_ref = "null";
</script>

<style lang="scss">

</style>

<main>
    <div class="username">{username}</div>
    <div class="display-name">{display_name}</div>
    <img src={user_photo_ref} alt="User's Profile" class="user-photo">
    <div class="user-desc">{user_desc}</div>
    <div class="user-location">{user_location}</div>
    <div class="user-resume">{user_resume_ref}</div>
</main>