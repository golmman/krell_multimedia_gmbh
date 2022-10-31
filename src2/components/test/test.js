fetch('components/test/test.html')
    .then((stream) => stream.text())
    .then((html) => {
        class KmTest extends HTMLElement {
            constructor() {
                super();

                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = html;

                const template = shadow.getElementById('km-test');
                const templateContent = template.content;

                shadow.appendChild(templateContent.cloneNode(true));

                //console.log(shadow);
                console.log(templateContent);
            }
        }

        customElements.define('km-test', KmTest);
    });
