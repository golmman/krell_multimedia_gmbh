<script>
    import Player from '@vimeo/player';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('mounttttt');

        new Player('vimeo_video', {
            id: 86619623,
            width: 700,
        });
    });
</script>

<h1>VIDEO</h1>
<a href="/">back</a>

<div id="vimeo_video" />
