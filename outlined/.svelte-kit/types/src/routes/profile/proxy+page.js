// @ts-nocheck

// import * as db from '$lib/server/database';
/** @param {Parameters<import('./$types').PageLoad>[0]} event */

// export function load( { fetch }) {

export const load = async({ fetch, params }) => {



    const userRes = await fetch('https://dummyjson.com/users?limit=10')
    const userData = await userRes.json()
    const users = userData.users


    //Fetch Dummy data from dummys



return{
    users: users

    // users: {
    //     db_img: "../../../gogh.jpg",
    //     db_username: "vinnyGDASD",
    //     db_display_name: "Vincent Van Gogh",
    //     db_user_id: 69,
    //     db_description: "I love painting and cutting my own ear off",
    //     db_location: "The Hague, Netherlands"
    // }

    
}

}
