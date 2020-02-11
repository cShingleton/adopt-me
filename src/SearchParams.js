import React, { useState, useEffect } from "react";
import PetAPI, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // [<currentState>, <updaterFunction>] = <hook>
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pets.animals({
      location,
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
            value={location}
            placeholder="Location"
            onChange={ev => setLocation(ev.target.value)}
          />
          <AnimalDropdown />
          <BreedDropdown />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
