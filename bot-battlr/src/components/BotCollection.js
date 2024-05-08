import React, { useEffect, useState } from "react";
import BotDetails from "./BotDetails";
import BotItem from "./BotItem";

const BOT_API = "https://api.npoint.io/520c33cd3b0eac4de1c2"
// const API = "http://localhost:3000/bots"


function BotCollection() {
   
    // sets the Robot's data collection
    const [robot, setRobot] = useState([])

    //sets the robot army
    const [selected, setSelected] = useState([])


    const [item, setItem] = useState({})
    // function to add individual robots if they have not been selected otherwise it does not appear
    const callback = payload => {
        console.log(payload)
        setItem(payload.bots[0])
        console.log(item)
        if(!selected.includes(payload.bots[0])){
        } else if(payload.position == "down") {
            let newArray = selected.filter((item) => (item.id != payload.bots[0].id))
            setSelected(newArray)
            setItem({})    
        }
    
    }

    // function to go back to default page
    const goBackCallback = payload => {
        console.log(payload)
        if(payload.action == "go back"){
            setItem({})    
        } else if(!selected.includes(payload.item)) {
            let item = {}
            robot.forEach(bot =>{  if(bot.id == payload.item.id){item=bot} })
            setSelected(current =>[...current,item])
            setItem({})    
        }
       
    }


    useEffect(() => {
        fetch(BOT_API)
        .then(response => response.json())
        .then(data => {
            setRobot(data.bots)
        })
    }, [])

    // give a position value of up and down to be used for the bot can be enlisted only **once**.
    const robotElems = robot.map((value) => <BotItem name={value.name} health={value.health} damage={value.damage} armor={value.armor} catchphrase={value.catchphrase} bot_class={value.bot_class} avatar_url={value.avatar_url} created_at={value.created_at} updated_at={value.updated_at} item={value} callback={callback} position="up"/> )

  

    return (
        <>
        {/* container that holds the list of robot army that have been enlisted */}
        <div className="row mt-4" style={{minHeight:"400px",background:"green"}}>
            {
                (selected != undefined)? 
                selected.map(value => 
                    <BotItem name={value.name} health={value.health} damage={value.damage} armor={value.armor} catchphrase={value.catchphrase} bot_class={value.bot_class} avatar_url={value.avatar_url} item={value} callback={callback} position="down"/>
                )
                : <></>
            }

        </div>
        {/* container that holds the list of robots */}
         <div className="row mt-4">
            { (item.name == undefined) ? 
               robotElems :
              <BotDetails name={item.name} health={item.health} damage={item.damage} armor={item.armor} catchphrase={item.catchphrase} bot_class={item.bot_class} avatar_url={item.avatar_url} goBackCallback={goBackCallback} item_id={item.id} item={item}/>
            }
        </div>
        </>
           
    )
}

export default BotCollection