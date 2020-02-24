import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent
} from "react";
import PetAPI, { Animal, ANIMALS } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";

import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  // [<currentState>, <updaterFunction>] = <hook>
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await PetAPI.animals({
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
          <label htmlFor="theme">
            Theme
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              onBlur={e => setTheme(e.target.value)}
            >
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="mediumorchid">Medium Orchid</option>
              <option value="chartreuse">Chartreuse</option>
            </select>
          </label>
        </label>
        <button type="submit" style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
