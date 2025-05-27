import { useEffect } from 'react';
import { Ripple, Tooltip, initMDB } from 'mdb-ui-kit/js/mdb.es.min';

import mkStadium from '../assets/img/MKStadium.jpg';
import mkLogo from '../assets/img/mkDons.avif';

function StadiumCard() {
    useEffect(() => {
        initMDB({ Ripple, Tooltip });
    }, []);

    return (
        <div className="card card-stadium h-100">
            <div
                className="bg-image hover-overlay"
                data-mdb-ripple-init=""
                data-mdb-ripple-color="light"
            >
                <img
                    src={mkStadium}
                    alt="Stadium MK"
                    className="w-100"
                />
                <a href="#!">
                    <div className="mask mask-light"></div>
                </a>
            </div>

            <div className="card-header text-center border-0">
                <img
                    src={mkLogo}
                    alt="MK Dons"
                    className="team-logo"
                    data-mdb-tooltip-init=""
                    title='MK Dons'
                />
                <h3 className="card-title m-0">Stadium MK</h3>
            </div>

            <div className="card-body py-0">
                <ul className="list-group list-group-light">
                    <li className="list-group-item">Capacity: 30.000</li>
                    <li className="list-group-item">Build: 2010</li>
                </ul>
            </div>
        </div>
    );
}

export default StadiumCard;
