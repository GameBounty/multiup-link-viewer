// ==UserScript==
// @name         multiup link viewer
// @namespace    http://your-namespace.com
// @version      1.0
// @description  Change hidden inputs to visible inputs on multiup.io
// @author       zdashero
// @match        https://multiup.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function modifyHiddenInputs() {
        const hiddenInputs = document.querySelectorAll('input[type="hidden"].hidden');
        hiddenInputs.forEach(hiddenInput => {
            hiddenInput.type = 'text';
            hiddenInput.classList.remove('hidden');
            hiddenInput.classList.add('visible');
        });
    }
    window.addEventListener('load', modifyHiddenInputs);
})();
