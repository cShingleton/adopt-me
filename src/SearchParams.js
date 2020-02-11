import React, { useState } from "react";

const SearchParams = () => {
  // [<currentState>, <updaterFunction>] = <hook>
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={ev => setLocation(ev.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
