// function getJoke() {
// fetch("https://api.chucknorris.io/jokes/random",{method: "GET"})
//     .then((response)=>{
//         response.json()
//             .then((data)=>{
//                 console.log(data);
//             })
//     })
// }


// async function getJoke(){
//     const response = await fetch("https://api.chucknorris.io/jokes/random",{method: "GET"});
//     const data = await response.json();
//     return data.value;
// }


// export default async function Home() {
//      const joke = await getJoke();
//      console.log(joke);
     


// return (
//         <main>
//             <h1> Joke Of The Day!</h1>
//             <p>{joke}</p>
//         </main>
//     );
// }

//CLIENT SIDE DATA FETCHING
// 'use client'
// import { useState, useEffect } from "react";


// export default function Home() {  
// const [loading, setLoading] = useState(true);
// const [joke, setJoke] = useState('');

// useEffect(()=>{
//     getJoke();
//     async function getJoke(){
//         const response = await fetch("https://api.chucknorris.io/jokes/random",{method: "GET"});
//         const data = await response.json();

//         setJoke(data.value);
//         setLoading(false);
//     }
// }, []);

// return (
//         <main>
//             <h1> Joke Of The Day!</h1>
//             {loading && <img src="/loadingGIF.gif"/>}
//             <p>{joke}</p>
//         </main>
//     );
// }


//HYBRID 

// 'use client'
// import { useState} from "react";


// export default function Home() {  
// const [joke, setJoke] = useState("Click the below button to get a joke.");
// const [buttonText, setButtonText] = useState("Get Joke");

// function handleGetJoke(){
//     setButtonText("Fetching Joke...")
//     getJoke();
//         async function getJoke(){
//             const response = await fetch("https://api.chucknorris.io/jokes/random",{method: "GET"});
//             const data = await response.json();
    
//             setJoke(data.value);
//             setButtonText("Get Joke")
//         }
// }

// return (
//         <main>
//             <h1> Joke Of The Day!</h1>
//             <p>{joke}</p>
//             <button onClick={handleGetJoke} disabled={false}>{buttonText}</button>
//         </main>
//     );
// }


'use client'
import { useState, useEffect} from "react";


export default function Home() {  
const [joke, setJoke] = useState("");
const [loading, setLoading] = useState(true);



useEffect(()=>{
    let ignore = false;
    if (loading){
        getJoke();
    }
    async function getJoke(){
        const response = await fetch("https://api.chucknorris.io/jokes/random",{method: "GET"});
        const data = await response.json();

       if (!ignore){
            setJoke(data.value);
            setLoading(false);
       }
    }
    return ()=>{
        ignore = true;
    }
}, [loading]);

function handleGetJoke(){
    setLoading(true);
}

return (
        <main>
            <h1> Joke Of The Day!</h1>
            {loading && <img src="/loadingGIF.gif"/>}
            {!loading && <>
                <p>{joke}</p>
                <button onClick={handleGetJoke} disabled={loading}>Get New Joke</button>
            </>}
        </main>
    );
}


