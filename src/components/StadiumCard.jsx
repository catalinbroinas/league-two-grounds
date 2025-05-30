import { useEffect } from 'react';
import { Ripple, Tooltip, initMDB } from 'mdb-ui-kit/js/mdb.es.min';

function StarRanking({ stadium }) {
    const { rank } = stadium;
    const stars = [];

    for (let i = 0; i < Math.floor(rank); i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (!Number.isInteger(rank)) {
        stars.push(<i key={`half`} className="fas fa-star-half"></i>);
    }

    return (
        <div
            className="d-inline-block stadium-rank"
            data-mdb-tooltip-init=""
            data-mdb-placement="bottom"
            title={`Stadium rank: ${rank}`}
            aria-label={`Stadium rank: ${rank}`}
        >
            {stars}
        </div>
    );
}

function StadiumCard({ stadium, team }) {
    const { name: stadiumName, image: stadiumImg, buildYear, capacity } = stadium;
    const { name: teamName, image: teamImg } = team;

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
                <a href="#!">
                    <div className="mask mask-light"></div>
                </a>
            </div>

            <div className="card-header text-center">
                <img
                    src={teamImg}
                    alt={teamName}
                    className="team-logo"
                    data-mdb-tooltip-init=""
                    title={teamName}
                />
                <h3 className="card-title m-0">{stadiumName}</h3>
                <StarRanking stadium={stadium} />
            </div>

            <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text m-0">
                        <i
                            className="fas fa-users text-muted me-2"
                            data-mdb-tooltip-init=""
                            title="Capacity"
                            aria-label="Capacity"
                        ></i>
                        {capacity.toLocaleString()}
                    </p>

                    <p className="card-text m-0">
                        <i
                            className="fas fa-calendar text-muted me-2"
                            data-mdb-tooltip-init=""
                            title="Inauguration year"
                            aria-label="Inauguration year"
                        ></i>
                        {buildYear}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StadiumCard;
