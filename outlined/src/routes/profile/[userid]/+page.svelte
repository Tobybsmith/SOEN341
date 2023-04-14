<script lang="ts">
    // import { SystemDrive } from "$env/static/private";
    /** @type {import('./$types').PageData} */
    

    import Profile from "../../../components/profile/Profile.svelte"
    import Post from "../../../components/post/PostInList.svelte"
    import type {SvelteComponent, SvelteComponentTyped} from 'svelte';
    //Need to get user stuff from a database, but this will be hard-coded for now
    
    
    export let data; //ADDED for DB
    // const users = data.users
    const { user } = data

    // import user from '$lib/users.json';

    // const img = user.image;
    // const username = user.firstName + " " + user.lastName;
    // const display_name = user.firstName;
    // const user_id = user.id;
    // const description = user.company.title;
    // const location = user.address.city;
    console.log(user)

    const img = "null"
    const username = "Guy Guy";
    const display_name = "Mr. Guy";
    const user_id = 100;

   // const description = user.description;
  //  const location = user.location;
  //  const user_resume_ref = user.academicDegree;

    const description = 'Cool guy';
    const location = 'Montreal';
    export let applied : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "FPGA Validation Intern",  description: "Applicant must have GPA > 2.9, and 2+ years experince with C++ and Python", id:0}],
        [Post, {title: "Stock Photo Model", description: "Applicant must either be conventionally beautiful or very weird looking.", id: 1}],
    ];
    export let bk : [typeof SvelteComponent, Record<string, any>][]= [
        [Post, {title: "Millionaire in training",  description: "Applicant must be charismatic and overall chill like that ;)", id:2}],
    ];


</script>

<body>

    <Profile user_desc={description} user_photo_ref={img} display_name={display_name} user_id={user_id} username={username} user_location={location} applied_to={applied} shortlisted={bk}/>

</body>

<style>
    body
    {
        margin: 0;
    }
</style>