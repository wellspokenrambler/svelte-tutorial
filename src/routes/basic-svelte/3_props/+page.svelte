<script lang="ts">
    //Declaring Props & Default Values
    import Nested from './nested.svelte';
    //Spread Props
    import PackageInfo from './PackageInfo.svelte';
    import PackageInfoSpread from './PackageInfoSpread.svelte';
    const pkg = {
        name: 'svelte',
        version: '5.0.0',
        description: 'Cybernetically enhanced web apps',
        website: 'https://svelte.dev'
    };
</script>

<h1>3 - Props</h1>

<h2>Declaring Props</h2>
<Nested answer={'42'} />

<h2>Default Values</h2>
<Nested />

<h2>Spread props</h2>
<PackageInfo {...pkg} />
<PackageInfoSpread {...pkg} />