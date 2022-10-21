<script>
    import 'carbon-components-svelte/css/all.css';
    import { Toggle } from 'carbon-components-svelte';

    let theme = "g80";

    document.documentElement.setAttribute("theme", theme);

    function toggleDarkMode(event) {
        console.log(event.detail.toggled);
        if (event.detail.toggled) {
            theme = 'g80';
        } else {
            theme = 'white';
        }

        document.documentElement.setAttribute("theme", theme);
    }
</script>

<h3>
    <a href="/">HOME</a>
    <a href="/test">TEST</a>
    <a href="/video">VIDEO</a>
    <Toggle size="sm" labelText="Dark Mode" toggled="true" on:toggle={toggleDarkMode} />
</h3>

<slot />
