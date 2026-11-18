import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'
import { useState } from 'react';


function Home(){
    // let count = 0
    let [count, setCount] = useState(0)

    function increase(){
        setCount(updatedValue)
    }

    return(
        <div>
            <Header/>
            <h1>This is home page</h1>
            <Footer/>

            <button onClick={increase}>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    )
}

export default Home