<script>
    import Player from '@vimeo/player';
    import {
        Button,
        Tabs,
        Tab,
        TabContent,
        ClickableTile,
        TileGroup,
    } from 'carbon-components-svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('mounttttt');

        const player = new Player('vimeo_video', {
            id: 86619623,
            width: 700,
        });

        player.getVideoHeight().then((height) => {
            console.log(`video height: ${height}`);
        });

        player.ready().then(() => {
            console.log('loaded');
        });
    });
</script>

<h1>VIDEO</h1>

<img src="https://vumbnail.com/86619623_small.jpg" alt="" />

<div style={{ width: '50%' }}>
    <TileGroup>
        <ClickableTile href="#">
            <img src="https://vumbnail.com/86619623_small.jpg" alt="" />
        </ClickableTile>
        <ClickableTile href="#">abc</ClickableTile>
    </TileGroup>

    <Tabs type="container" autoWidth="true" height="500px">
        <!-- https://stackoverflow.com/a/61662687 -->
        <Tab><img src="https://vumbnail.com/86619623_small.jpg" alt="" /></Tab>
        <Tab label="Tab label 2" disabled />
        <Tab label="Tab label 3" />
        <Tab label="Tab label 4" />
        <svelte:fragment slot="content">
            <TabContent>
                <div id="vimeo_video" />
            </TabContent>
            <TabContent>Content 2</TabContent>
            <TabContent>Content 3</TabContent>
            <TabContent>Content 4</TabContent>
        </svelte:fragment>
    </Tabs>
</div>
