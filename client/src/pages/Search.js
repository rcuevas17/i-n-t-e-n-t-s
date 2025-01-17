import React, { useState } from "react";
import Blogs from  "./Blogs"
import axios from "axios";

const Search = () => {
  const [selection,setSelection] = useState();
  console.log(selection)
  
  const [results, setResults] = useState();

  const [showBlog,setShowBlog] =  useState(false);

  const [park,setPark] =  useState();

  const findParks = async () => {
    const response = await axios.get(`/api/parks/${selection}`);
    console.log(response.data);
    setResults(response.data.data);
  };

  const handleChange=(e)=>(
    setSelection(e.target.value)
  )

  const openParkBlog=(parkId)=>{
    setPark(results.find(({id})=>id===parkId))
    setShowBlog(true)
  }

  if (showBlog) {
    return <Blogs park={park} setShowBlog={setShowBlog}/>
  }

  return (
    <div>
      <p>What state is the park in?</p>
      <select onChange={(e)=>handleChange(e)}>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <button id="stateSearch" onClick={findParks}>
        Search
      </button>

      {results
        ? results.map((park) => (
            <div>
              <p key={park.id}>{park.name}</p>
              <button onClick={()=>openParkBlog(park.id)}>GO TO BLOG</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default Search;
