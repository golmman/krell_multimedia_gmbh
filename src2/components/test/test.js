fetch('components/test/test.html')
    .then((stream) => stream.text())
    .then((text) => define(text));

function define(html) {
    customElements.define(
        'km-test',
        class extends HTMLElement {
            constructor() {
                super();

                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = html;

                console.log(this);
                console.log(document);

                const template = shadow.getElementById('km-test');
                const templateContent = template.content;

                shadow.appendChild(
                    templateContent.cloneNode(true),
                );
            }
        },
    );
}
