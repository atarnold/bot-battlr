import React from "react";
import { FaHeartbeat, FaAmbulance  } from 'react-icons/fa';
import { BsFillLightningFill, BsShieldShaded } from 'react-icons/bs'
import { IoAirplane } from "react-icons/io5";
import { GiWitchFlight, GiAbstract058 } from "react-icons/gi";
import { MdAssistantPhoto } from "react-icons/md";

function BotItem({avatar_url, name, health, damage, armor, bot_class, catchphrase,item,callback,position}) {

    const state = {
        bots: [],
        position: position
    }
 
    const sendDataToParent = (item) => { 
        state.bots.push(item)
        callback(state)
    };

    let botIcon; 

    switch (bot_class) {
        case "Support":
            botIcon = <MdAssistantPhoto />
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
        <div className="col-3 p-1" disabled onClick={() => sendDataToParent(item)}>
            <div className="card h-100">
            <img className="card-img-top" style={{background: 'lightgrey'}} src={avatar_url}></img>
                <div className="card-body">
                    <h3 className="card-title">{name}  {botIcon}
                    </h3>
                    <p className="card-text">{catchphrase} </p>
                </div>

                <div className="card-footer ">
                <FaHeartbeat /> {health}  <BsFillLightningFill /> {damage}  <BsShieldShaded /> {armor}
                </div>
            </div>
        </div>
    )
}

export default BotItem