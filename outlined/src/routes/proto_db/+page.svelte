<!-- <script lang="ts">
    // import Profile from "../../components/profile/Profile.svelte"
    // //Need to get user stuff from a database, but this will be hard-coded for now
    // const img = "../../../gogh.jpg";
    // const username = "vinnyG";
    // const display_name = "Vincent Van Gogh";
    // const user_id = 69;
    // const description = "🖌️ I love painting and cutting my own ear off";
    // const location = "The Hague, Netherlands"





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


 -->


 <script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	let timer: NodeJS.Timeout;
	let searchTerm = '';

	function fetchTracks() {
		fetch(`/api/searchTracks?searchTerm=${searchTerm}`)
			.then((res) => res.json())
			.then((data) => {
				tracks = data;
			});
	}

	function handleSearch(e: Event) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			const target = e.target as HTMLInputElement;
			searchTerm = target.value;
			fetchTracks();
		}, 300);
	}

	let tracks = data.tracks;
</script>

<div class="px-4">
	<h1 class="is-size-1 mb-5">Tracks</h1>

	<input
		type="search"
		placeholder="Search..."
		class="input mb-5"
		style="max-width: 80ch;"
		value={searchTerm}
		on:keyup={handleSearch}
	/>

	<table class="table">
		<thead>
			<tr>
				<th>Track</th>
				<th>Artist</th>
				<th>Album</th>
				<th>Genre</th>
			</tr>
		</thead>
		<tbody>
			{#each tracks as track}
				<tr>
					<td>{track.trackName}</td>
					<td>{track.artistName}</td>
					<td><a href={`/album/${track.albumId}`}>{track.albumTitle}</a></td>
					<td>{track.genre}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
