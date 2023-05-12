import TodayWether from "./TodayWeater";
import { format } from 'date-fns';


import "./show.css"
const ShowInformation = ({data}) => {
  const today = new Date();
const formattedDate = format(today, 'MMMM dd, yyyy');
    return (
        <div className="show">
        <div className="show-today">
        <h3>
        {formattedDate}
        </h3>
        <TodayWether data={data}/>
        </div>
       
       



        
       </div>
      
      );
}
 
export default ShowInformation;