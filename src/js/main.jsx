import '../scss/main.scss';

import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

import React from 'react';
import { createRoot } from 'react-dom/client';

function MainDomManager() {
    const renderStadiums = () => {
        const stadiumsElement = document.querySelector('#stadiums');
        if (!stadiumsElement) return;

        const root = createRoot(stadiumsElement);
        root.render(<h1 style={{color: 'blue'}}>React work!</h1>);
    };

    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse });
        renderStadiums();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
