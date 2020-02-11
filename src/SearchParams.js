import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // [<currentState>, <updaterFunction>] = <hook>
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

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
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={ev => setAnimal(ev.target.value)}
              onBlur={ev => setAnimal(ev.target.value)}
            >
              <option>All</option>
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={ev => setBreed(ev.target.value)}
              onBlur={ev => setBreed(ev.target.value)}
              disabled={!breeds.length}
            >
              <option>All</option>
              {breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
