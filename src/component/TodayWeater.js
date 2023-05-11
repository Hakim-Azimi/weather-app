const TodayWether = ({data}) => {
    console.log(data.main.temp)
    return ( 
        <div className="today-box">
           <div className="today-box-left">
           <h1> `temp: {data.main.temp}`</h1>
            <p>Sunny</p> 
            <span>icon</span>
            <p>
                monday 24, july 2020
            </p>
           </div>
           <div className="today-box-mid">

           </div>
           <div className="today-box-right">
<p>RealFeel 37"</p>
<p>humidity 37"</p>
<p>UV index 12"</p>
<p>RealFeel 37"</p>
<p>RealFeel 37"</p>
<p>RealFeel 37"</p>
           </div>
        </div>
     );
}
 
export default TodayWether;