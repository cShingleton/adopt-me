import React, { useState, useEffect } from "react";
import PetAPI, { ANIMALS } from "@frontendmasters/pet";
import { connect } from "react-redux";

import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = props => {
  // [<currentState>, <updaterFunction>] = <hook>
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await PetAPI.animals({
      location: props.location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  // scheduled to run after render -- have to declare dependencies list
  // to watch for changes in them, otherwise will fire on every re-render
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    PetAPI.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedNames = apiBreeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={ev => {
          ev.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={props.location}
            placeholder="Location"
            onChange={ev => props.updateLocation(ev.target.value)}
          />
          <AnimalDropdown />
          <BreedDropdown />
          <label htmlFor="theme">
            Theme
            <select
              value={props.theme}
              onChange={e => props.setTheme(e.target.value)}
              onBlur={e => props.setTheme(e.target.value)}
            >
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="mediumorchid">Medium Orchid</option>
              <option value="chartreuse">Chartreuse</option>
            </select>
          </label>
        </label>
        <button style={{ backgroundColor: props.theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location }) => ({ theme, location });

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(changeTheme(theme)),
  updateLocation: location => dispatch(changeLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
