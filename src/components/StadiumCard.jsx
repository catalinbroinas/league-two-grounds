import mkStadium from '../assets/img/MKStadium.jpg';
import mkLogo from '../assets/img/mkDons.avif';

function StadiumCard() {
    return (
        <div className="card card-stadium h-100">
            <div
                className="bg-image hover-overlay"
                data-mdb-ripple-init
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

            <div className="card-header">
                <img
                    src={mkLogo}
                    alt="MK Dons"
                    className="team-icon"
                />
                <h3 className="card-title">Stadium MK</h3>
            </div>

            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">Capacity: 30.000</li>
                    <li className="list-group-item">Build: 2010</li>
                </ul>
            </div>
        </div>
    );
}

export default StadiumCard;
