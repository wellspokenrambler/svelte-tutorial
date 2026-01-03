<script>
    const courses = [
        {
            title: 'Basic Svelte',
            link: '/basic-svelte/',
            topics: [
                {
                    title: 'Introduction',
                    link: '1_introduction'
                },
                {
                    title: 'Reactivity',
                    link: '2_reactivity'
                },
                {
                    title: 'Props',
                    link: '3_props'
                },
                {
                    title: 'Logic',
                    link: '4_logic'
                },
                {
                    title: 'Events',
                    link: '5_events'
                },
                {
                    title: 'Bindings',
                    link: '6_bindings'
                },
                {
                    title: 'Classes & Styles',
                    link: '7_classes_styles'
                },
                {
                    title: 'Actions',
                    link: '8_actions'
                },
                {
                    title: 'Attachments',
                    link: '9_attachments'
                },
                {
                    title: 'Transitions',
                    link: '10_transitions'
                }
            ]
        },
        {
            title: 'Advanced Svelte',
            link: '/advanced-svelte/',
            topics: [
                {
                    title: 'Advanced Reactivity',
                    link: '1_advanced_reactivity'
                },
                {
                    title: 'Reusing Content',
                    link: '2_reusing_content'
                },
                {
                    title: 'Motion',
                    link: '3_motion'
                },
                {
                    title: 'Advanced Bindings',
                    link: '4_advanced_bindings'
                },
                {
                    title: 'Advanced Transitions',
                    link: '5_advanced_transitions'
                },
                {
                    title: 'Context API',
                    link: '6_context_api'
                },
                {
                    title: 'Special Elements',
                    link: '7_special_elements'
                },
                {
                    title: '<script module>',
                    link: '8_script_module'
                }
            ]
        },
    ];
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

