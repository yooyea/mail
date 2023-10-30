<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		event: null; // does not accept a payload
		click: string; // has a required string payload
		type: string | null; // has an optional string payload
	}>();
</script>

<svelte:head>
	<title>Yoo Yea</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<button on:click={() => 1}> Increment X </button>

<button on:click={() => 1}> Increment Y </button>

<style>
</style>
