// import * as db from '$lib/server/database';
/** @type {import('./$types').PageLoad} */

// export function load( { fetch }) {
import users from '$lib/users.json';

export const load = async({ fetch, params }) => {


    
    //Fetch Dummy data from dummys
    const fetchUser = async (id) => {
        // const res = await fetch(`https://dummyjson.com/users/${id}`)
        // const data = await res.json()
        let user_info = null;
        for(let i=0; i<users.length; i++){
            
            if(users[i].id == id){
                user_info = users[i];
            }

        }

        return user_info
    }

    

    return{
        user: fetchUser(params.userid)
    }

}