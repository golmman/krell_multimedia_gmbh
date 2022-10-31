fetch('components/km-video-element/component.html')
    .then((stream) => stream.text())
    .then((html) => {
        console.log('km-video-element');

        class KmVideoElement extends HTMLElement {
            constructor() {
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

                //console.log(shadow);
                console.log(templateContent);
            }
        }

        customElements.define('km-video-element', KmVideoElement);
    });
