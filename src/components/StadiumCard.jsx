import { useEffect } from 'react';
import { Ripple, Tooltip, initMDB } from 'mdb-ui-kit/js/mdb.es.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfStroke,
  faUsers,
  faCalendar,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function StarRanking({ stadium }) {
    const { rank } = stadium;
    if (typeof rank !== 'number' || rank < 0.5 || rank > 5) {
        return (
            <div
            className="d-inline-block stadium-rank"
            data-mdb-tooltip-init=""
            data-mdb-placement="bottom"
            title={`Invalid stadium rank`}
            aria-label={`Invalid stadium rank`}
            role="img"
            >
                <FontAwesomeIcon icon={faCircleExclamation} className="text-danger" />
            </div>
        )
    }

    const stars = [];

    for (let i = 0; i < Math.floor(rank); i++) {
        stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
    }
    if (!Number.isInteger(rank)) {
        stars.push(<FontAwesomeIcon key={`half`} icon={faStarHalfStroke} />);
    }

    while (stars.length < 5) {
        stars.push(<FontAwesomeIcon key={`half-${stars.length}`} icon={faStarRegular} />);
    }

    return (
        <div
            className="d-inline-block stadium-rank"
            data-mdb-tooltip-init=""
            data-mdb-placement="bottom"
            title={`Stadium rank: ${rank}`}
            aria-label={`Stadium rank: ${rank}`}
            role="img"
        >
            {stars}
        </div>
    );
}

function StadiumCard({ stadium, team }) {
    const { name: stadiumName, image: stadiumImg, buildYear, capacity } = stadium;
    const { name: teamName } = team;

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
                    src={stadiumImg}
                    alt={stadiumName}
                    className="w-100"
                />
                <a href="#!" aria-hidden="true">
                    <div className="mask mask-light"></div>
                </a>
            </div>

            <div className="card-header pt-0 px-4 pb-2 text-center">
                <h3 className="badge badge-primary badge-team rounded-pill py-2 px-3 m-0">
                    {teamName}
                </h3>
                <h2 className="card-title mb-0 mt-n2">{stadiumName}</h2>
                <StarRanking stadium={stadium} />
            </div>

            <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text m-0">
                        <span
                            className="text-muted me-2"
                            data-mdb-tooltip-init=""
                            title="Capacity"
                            aria-label="Capacity"
                            role="img">
                                <FontAwesomeIcon icon={faUsers} />
                        </span>
                        {capacity.toLocaleString()}
                    </p>

                    <p className="card-text m-0">
                        <span
                            className="text-muted me-2"
                            data-mdb-tooltip-init=""
                            title="Inauguration year"
                            aria-label="Inauguration year"
                            role="img">
                                <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        {buildYear}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StadiumCard;
