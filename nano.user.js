// ==UserScript==
// @name         r/place Nano Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Template for nano graphic
// @author       /u/trbinsc
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/trbinsc/r-place-nano-overlay/raw/main/snano.user.js
// @downloadURL  https://github.com/trbinsc/r-place-nano-overlay/raw/main/nano.user.js
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://media.discordapp.net/attachments/912947691661692929/959621911057416282/trans_nano_logo.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
