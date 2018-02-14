import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <section>
        <div className="title"> <h2><Link to='/books'>Books</Link></h2> </div>
      </section>
      <section>
        <div className="title"><h2><Link to='/authors'>Authors</Link></h2></div>
      </section>
    </div>
  )
}

export default Home
