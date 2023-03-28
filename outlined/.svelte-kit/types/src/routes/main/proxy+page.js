// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */

export const load = async({ fetch, params }) => {


    const res = await fetch('https://dummyjson.com/todo')
    const data = await res.json()
    const job = data.todos

return{
    jobs: job

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
