<script>
    import courses from '$lib/courses.js';
</script>


<h1>Isabelle May - Basic Svelte Tutorial Work Examples:</h1>
<div class="flex w-full h-full flex-wrap">
    {#each courses as course}
        <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h2>{course.title}</h2>
            <ol>
                {#each course.topics as topic}
                    <li><a href="{course.link}{topic.link}" aria-label="Go to {topic.title} page.">{topic.title}</a></li>
                {/each}
            </ol>
        </div>
    {/each}
</div>

