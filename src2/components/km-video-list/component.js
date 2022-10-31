fetch('components/km-video-list/component.html')
    .then((stream) => stream.text())
    .then((html) => {
        console.log('loading template km-video-list');

        class KmVideoList extends HTMLElement {
            constructor() {
                console.log('constructing KmVideoList');
                super();

                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = html;

                const template = shadow.getElementById('km-video-list');
                const templateContent = template.content;

                shadow.appendChild(templateContent.cloneNode(true));

                //console.log(shadow);
                console.log(templateContent);
            }
        }

        customElements.define('km-video-list', KmVideoList);
    });
