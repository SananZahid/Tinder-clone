import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from './axios';


function TinderCards() {
    //State to store people
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();

    }, []);

        // Hard coded person card now we will import from mongoDB instead
    //[    {  
        //     name: 'Elon Musk',
        //     url: 'https://www.pngmart.com/files/22/Elon-Musk-PNG-Isolated-File.png'
        // },
        // {
        //     name: 'Kobe Bryant',
        //     url: 'https://www.kindpng.com/picc/m/5-54109_kobe-bryant-scream-basketball-player-transparent-background-hd.png'
    //]     },      );

    // Create two functions to swipe card on screen

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        //setLastDirection(direction);
    };

    const outOfFrame =(name) => {
        console.log(name + "Left the screen!");
    };

  return (
    <div className='tinderCards' >
        <div className='tinderCards__cardContainer'>

            {people.map((person) => (
                //we are importing tindercard from react-tinder-card a buildIn react library
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >

                <div
                    style={ {backgroundImage: `url(${person.imgUrl})`}}
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>

                </TinderCard>
            ))}

        </div>
        

    </div>
  )
}

export default TinderCards