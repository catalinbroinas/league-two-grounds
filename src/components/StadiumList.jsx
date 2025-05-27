import StadiumCard from "./StadiumCard";

function StadiumList() {
    return (
        <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-xl-5 g-4">
            <div className="col">
                <StadiumCard />
            </div>
        </div>
    );
}

export default StadiumList;
