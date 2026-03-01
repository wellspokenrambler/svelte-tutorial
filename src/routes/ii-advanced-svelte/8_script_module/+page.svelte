<script>
    import AudioPlayer, {pauseAll} from "./audio_player/AudioPlayer.svelte";
    import { tracks } from './audio_player/tracks.js';
</script>
<h1>{'8 - <script module>'}</h1>
<button onclick={pauseAll}>Pause All</button>
<div class="flex flex-col gap-4 w-full">
    {#each tracks as track}
        <AudioPlayer {...track} />
    {/each}
</div>