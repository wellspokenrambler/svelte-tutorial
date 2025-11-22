<script lang="ts">
    //Your first component - adding data
    let name = "[Insert Name Here]";
    //Dynamic Attributes
    let croutonSrc = "https://crouton.net/crouton.png";
    let croutonAlt = "Crouton";

    //Nested Components
    import Nested from './nested.svelte';

    //HTML Tags
    let insertedHTML: string = "<strong>This is inserted HTML</strong>";
</script>

<h1>1 - Introduction</h1>

<h2>Your first component - adding data</h2>
<p>Hello, {name.toLocaleUpperCase()}!</p>

<h2>Dynamic Attributes</h2>
<img src={croutonSrc} alt={croutonAlt} width="50"/>

<h2>Styling</h2>
<p class="styledParagraph p-1 border-2 border-red-500">
    This is a styled paragraph.
    <br/>
    My colour and font weight are set in a scoped style block.
    <br/>
    The rest of my styles are from global styles using Tailwind CSS.
</p>

<h2>Nested Components</h2>
<Nested/>

<h2>HTML Tags</h2>
<p>{@html insertedHTML}, whereas this is not inserted HTML.</p>

<style>
    /*Styling*/
    .styledParagraph {
        color: purple;
        font-weight: bold;
    }
</style>