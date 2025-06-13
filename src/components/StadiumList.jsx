import StadiumCard from "./StadiumCard";
import stadiums from "../data/stadiums";

function StadiumList() {
    return (
        <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-xl-5 g-4 px-4 px-md-3">
            {stadiums.map(item =>
                <div key={item.id} className="col">
                    <StadiumCard stadium={item.stadium} team={item.team} />
                </div>
            )}
        </div>
    );
}

export default StadiumList;
