// @ts-nocheck
// import * as db from '$lib/server/database';
/** @param {Parameters<import('./$types').PageLoad>[0]} event */

// export function load( { fetch }) {

export const load = async({ fetch, params }) => {

    // console.log(params)

    // const userRes = await fetch('https://dummyjson.com/users?limit=10')
    // const userData = await userRes.json()
    // const users = userData.users


    //Fetch Dummy data from dummys
    const fetchUser = async (id) => {
        const res = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await res.json()
        return data
    }

    return{
        user: fetchUser(params.userid)
    }

}