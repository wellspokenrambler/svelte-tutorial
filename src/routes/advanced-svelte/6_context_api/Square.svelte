<script>
    import { getContext } from "svelte";

    let {x,y,size,rotate} = $props();

    getContext('canvas').addItem(draw);

    function draw(context) {
        context.save();

        context.translate(x,y);
        context.rotate(rotate);

        context.strokeStyle = 'black';
        context.strokeRect(-size/2,-size/2,size,size);

        context.restore();
    }
</script>