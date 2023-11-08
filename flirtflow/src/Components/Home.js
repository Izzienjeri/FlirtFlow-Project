import React from 'react'
import '../App.css';



function Home(){
    return(
        <div className="back">
            <header >
                <navbar className="nav">
                <div className="nav-dt">
                    <div className="logo">FlirtFlow</div>
                    <div className="nav-list">
                            <div>Home</div>
                            <div>Products</div>
                            <div>Login</div>
                    </div>
                </div>
                </navbar>
            </header>
            <body className="App-body">
                <div>
                    <p className='flirt'>Flirt</p>
                    <button className='crt-act' >Create Account</button>
                </div>
            </body>

        </div>
    )
}



export default Home;