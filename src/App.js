import React from "react"
// import Joke from "./components/Joke"
// import jokeData from "./jokeData"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import diver from "./images/diver.png"
import wedding from "./images/wedding.png"
import bike from "./images/mountain-bike.png"

export default function App() {
    // const jokeElement = jokeData.map(joke =>  
    //     <Joke 
    //         setup={joke.setup}
    //         punchline={joke.punchline}
    //     />
    // )
    // console.log(jokeElement)
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="card-component">
                <Card
                    img={diver}
                    rating="5.0" 
                    reviewCount={6}
                    country="Switzerland"
                    title="Life lessons with Katie Zaferes"
                    price="136"
                />
                <Card 
                    img={wedding}
                    rating="5.0" 
                    reviewCount={30}
                    country="United Kingdom"
                    title="Learn wedding photography"
                    price="125"
                />
                <Card 
                    img={bike}
                    rating="4.8" 
                    reviewCount={2}
                    country="USA"
                    title="Group Mountain Biking"
                    price="50"
                />
            </div>
        </div>
    )
}

            // <Joke 
            //     setup="I got my daughter a fridge for her birthday."
            //     punchline="I can't wait to see her face light up when she opens it."
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?"
            //     punchline="He just ransomware!"
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?"
            //     punchline="Scurvy."
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?"
            //     punchline="Swarm."
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?"
            //     punchline="I don't know, but the flag is a big plus!"
            // />

