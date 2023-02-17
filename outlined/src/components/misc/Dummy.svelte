<script lang="js">
	/**
     * @type {any}
     */
	 export let content;
</script>

<div>
	{content}	<br/>
	<slot />
</div>

<style>
	div { border: 1px solid red; }
</style>