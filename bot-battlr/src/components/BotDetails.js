import React from "react";
import { FaHeartbeat, FaAmbulance  } from 'react-icons/fa';
import { BsFillLightningFill, BsShieldShaded } from 'react-icons/bs'
import { IoAirplane } from "react-icons/io5";
import { GiWitchFlight, GiAbstract058 } from "react-icons/gi";
import { MdAssistantPhoto } from "react-icons/md";
import "../App.css"

function BotDetails({avatar_url, name, health, damage, armor: armor, bot_class, catchphrase,goBackCallback,item_id,item}) {

    const sendDataToParent = (action,item) => { 
        goBackCallback({action:action,item:item})
    };

    let botIcon; 

    switch (bot_class) {
        case "Support":
            botIcon = <MdAssistantPhoto/>
            break;
        case "Medic":
            botIcon = <FaAmbulance />
            break;
        case "Witch":
            botIcon = <GiWitchFlight />
            break;
        case "Defender":
            botIcon = <BsShieldShaded />
            break;
        case "Assault":
            botIcon = < IoAirplane />
            break;
        case "Captain":
            botIcon = <GiAbstract058 />
        default:
            botIcon = ""
            break;
    }


    return (
        <div id="botDetail" className="card ">
            <div className="row g-0">

                <div className="col-4">
                    <img id="botDetailImage" class="img-fluid mt-5" src={avatar_url}  />
                </div>

                <div className="col-8">
                    <div className="card-body" >
                        <h5 class="card-title">Name: {name}</h5>
                        <p class="card-text">Catchphrase: {catchphrase}</p>
                        <p>Class: {bot_class} <span className="icon"> {botIcon}</span></p>

                        <div className="card-text mb-3" id="detail-icon">
                            <FaHeartbeat className="icon" /> {health}  <BsFillLightningFill className="icon"/> {damage}  <BsShieldShaded className="icon"/> {armor}
                        </div>
                        <button onClick={() => sendDataToParent("go back",item)} className="armyBtn">Go Back</button>
                        
                        <button onClick={() => sendDataToParent(item_id,item)}  className="armyBtn">Enlist</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotDetails