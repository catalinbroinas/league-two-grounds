import '../scss/main.scss';

import { createRoot } from 'react-dom/client';
import StadiumList from '../components/StadiumList';

function MainDomManager() {
    const renderStadiums = () => {
        const stadiumsElement = document.querySelector('#stadiums');
        if (!stadiumsElement) return;

        const root = createRoot(stadiumsElement);
        root.render(<StadiumList />);
    };

    const initApp = () => {
        renderStadiums();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
