<script>
    import { TileGroup, ClickableTile, Button } from 'carbon-components-svelte';

    const values = ['Lite plan', 'Standard plan', 'Plus plan'];

    let selected = values[0];
</script>

<h1>TEST</h1>

<table border="1">
    <tr>
        <td
            ><ClickableTile>
                <img src="https://vumbnail.com/86619623_small.jpg" alt="" />
            </ClickableTile></td
        >
        <td
            ><ClickableTile>
                <img src="https://vumbnail.com/86619623_small.jpg" alt="" />
            </ClickableTile></td
        >
    </tr>
    <tr>
        <td
            ><ClickableTile>
                <img src="https://vumbnail.com/86619623_small.jpg" alt="" />
            </ClickableTile></td
        >
        <td
            ><ClickableTile>
                bla
            </ClickableTile></td
        >
    </tr>
</table>

<div>
    Selected: <strong>{selected}</strong>
</div>

<Button size="small" disabled={selected === values[1]} on:click={() => (selected = values[1])}>
    Set to "{values[1]}"
</Button>

