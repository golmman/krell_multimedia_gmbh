fetch('components/km-video-element/component.html')
    .then((stream) => stream.text())
    .then((html) => {
        console.log('loading template km-video-element');

        class KmVideoElement extends HTMLElement {
            constructor() {
                console.log('constructing KmVideoElement');
                super();

                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = html;

                const template = shadow.getElementById('km-video-element');
                const templateContent = template.content;

                const clonedContent = templateContent.cloneNode(true);

                const h4 = clonedContent.appendChild(
                    document.createElement('h4'),
                );
                h4.textContent = 'jooo';

                shadow.appendChild(clonedContent);

                const { parentElement } = shadow.host;
                console.log(parentElement);

                if (parentElement.localName !== 'km-video-list') {
                    console.warn(
                        'km-video-element has no km-video-list parent',
                    );
                }


                //console.log(templateContent);
            }
        }

        customElements.define('km-video-element', KmVideoElement);
    });
