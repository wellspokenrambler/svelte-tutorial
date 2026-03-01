<script lang="ts">
    //DOM Events
    let m = $state({x: 0, y: 0});
    function onpointermove(event: PointerEvent) {
        m.x = event.clientX;
        m.y = event.clientY;
    };

    //Component Events
    import Stepper from './Stepper.svelte';
    let value = $state(0);

    //Spreading Events
    import BigRedButton from './BigRedButton.svelte';
    import kaboom from './loud-explosion-425457.mp3'

    function playKaboom() {
        const audio = new Audio(kaboom);
        audio.play();
    }
</script>

<h1>5 - Events</h1>

<h2>DOM Events</h2>
<p>The pointer is at ({Math.round(m.x)}, {Math.round(m.y)})</p>
<div class="w-72 h-72 bg-green-300" {onpointermove}></div>

<h2>Capturing</h2>
<p>input bubbles first, then div</p>
<div onkeydown={(e) => alert(`<div>${e.key}`)} role="presentation">
    <input type="text" placeholder="Focus and press a key" 
           onkeydown={(e) => alert(`<input>${e.key}`)} />
</div>
<p>div bubbles first, then input</p>
<div onkeydowncapture={(e) => alert(`<div>${e.key}`)} role="presentation">
    <input type="text" placeholder="Focus and press a key" 
           onkeydowncapture={(e) => alert(`<input>${e.key}`)} />
</div>

<h2>Component Events</h2>
<p>value: {value}</p>
<Stepper 
    increment={() => value += 1}
    decrement={() => value -= 1} />

<h2>Spreading Events</h2>
<p class="text-red-500">warning: goes kaboom</p>
<BigRedButton onclick={playKaboom}/>