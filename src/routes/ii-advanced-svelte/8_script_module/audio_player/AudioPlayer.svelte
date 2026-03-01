<script module>
    let current;

    export function pauseAll() {
        current?.pause();
    }
</script>

<script lang="ts">
    let { src, title, artist } = $props();

    let time = $state(0);
    let duration = $state(0);
    let paused = $state(true);

    function format(time) {
        if(isNaN(time)) return '...';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    function seek(event) {
        const div = event.currentTarget;

        const { left, width } = div.getBoundingClientRect();

        let p = (event.clientX - left) / width;
        if (p < 0) p = 0;
        if (p > 1) p = 1;

        time = p * duration;
    }

    function addSeeker(event) {
        seek(event);
        window.addEventListener('pointermove', seek(event));
        window.addEventListener('pointerup', () => {
            window.removeEventListener('pointermove',seek);
        },{once: true});
    }
</script>

<div class="w-full md:w-3/4 flex items-center gap-2 rounded-lg border border-gray-500 p-4 {paused ? 'bg-gray-200' : 'bg-gray-100' }">
    <audio {src}
        bind:currentTime={time}
        bind:duration
        bind:paused
        onplay={(e) => {
            const audio = e.currentTarget;
            if(audio !== current) {
                current?.pause();
                current = audio;
            }
        }}
        onended={() => {time=0;}}
        ></audio>
    <button class={`flex justify-center items-center w-12 h-12 p-1 rounded-full ${paused ? 'bg-gray-500' : 'bg-blue-500' }`}
        aria-label={paused ? 'Play' : 'Pause'}
        onclick={() => paused = !paused}>
        {#if paused}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6" width="12" height="12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6" width="12" height="12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
        {/if}
    </button>

    <div class="flex flex-col w-48">
        <h3><strong>{title}</strong></h3>
        <p class="text-sm">{artist}</p>
    </div>

    <div class="flex-1">
        <div onpointerdown={addSeeker} class="flex w-full h-2 rounded-lg bg-gray-500 overflow-hidden">
            <div class="h-2 rounded-lg bg-blue-400"
                style="width: calc(100% * {time/duration})"></div>
        </div>
        <span class="text-xs">{format(time)}/{duration ? format(duration) : '--:--'}</span>
    </div>
</div>