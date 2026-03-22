<script lang="ts">
    import courses from '$lib/courses.js';

	import { page } from "$app/state";
	import { version } from '$app/environment';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();

	let currentPage = page.url.pathname;

	let previousPage = $state('');
	let nextPage = $state('');

	courses.forEach((element, courseIndex) => {
		element.topics.forEach((topic, topicIndex) => {
			if (currentPage === `${element.link}${topic.link}`) {
				if (topicIndex == 0 && courses[courseIndex-1]?.topics?.length > 0) {
					previousPage = `${courses[courseIndex-1].link}${courses[courseIndex-1].topics[courses[courseIndex-1].topics.length - 1].link}`;
				} else {
					previousPage = topicIndex > 0 ? `${element.link}${element.topics[topicIndex - 1].link}` : '';
				}
				if (topicIndex == element.topics.length - 1 && courses[courseIndex+1]?.topics?.length > 0) {
					nextPage = `${courses[courseIndex+1].link}${courses[courseIndex+1].topics[0].link}`;
				}
				else {
					nextPage = topicIndex < element.topics.length - 1 ? `${element.link}${element.topics[topicIndex + 1].link}` : '';
				}
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="absolute top-0 left-0 z-10">
	<a href="/" class="p-1 border-2 border-green-500">Home</a>
	{#if previousPage}
		<a href={previousPage} class="p-1 border-2 border-green-500">Previous</a>
	{/if}
	{#if nextPage}
		<a href={nextPage} class="p-1 border-2 border-green-500">Next</a>
	{/if}
</div>
<p class="absolute bottom-0 right-0 p-4 text-sm text-gray-500">v.{version}</p>

{@render children()}
