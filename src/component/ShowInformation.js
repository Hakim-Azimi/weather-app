import TodayWether from "./TodayWeater";
import "./show.css"
const ShowInformation = ({data}) => {
    return (
        <div className="show">
        <div className="show-today">
        <h2>
          Today
        </h2>
        <TodayWether data={data}/>
        </div>
       <div className="show-daily">
       <h2>
          Daily
        </h2>
        <div className="daily">
          sunday
        </div>
       </div>
        </div>
      );
}
 
export default ShowInformation;