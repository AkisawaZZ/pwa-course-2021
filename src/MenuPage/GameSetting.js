import { Link } from "react-router-dom";
import './GameSetting.css';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

function GameSetting(){
    return(
        <div className="col-6 col-s-9 Menu">
            <div className="Menu-header">
                <div className="Menu-Back-Button">
                    GameSetting
                <Link to = "/menu">
                <img src= "back-32.png" align ="left"/>
                </Link>
                </div>
            </div>    
            <div className="Menu-box">
            </div> 
        </div>
          
    );
};


export default GameSetting;