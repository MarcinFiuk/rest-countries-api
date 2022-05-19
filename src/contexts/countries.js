import { createContext } from "react";
import useAxios from "../hooks/useAxios";

export const countriesContext = createContext({
  data: null,
  error: null,
  isLoading: true,
});

export const CountriesProvider = ({ children }) => {
  const response = useAxios(
    "https://restcountries.com/v2",
    "/all",
    { fields: "flags,name,population,region,capital,alpha3Code" },
    (responseData) => {
      const countriesName = {};

      for (const country of responseData) {
        countriesName[country.alpha3Code] = country.name;
      }

      return {
        countries: responseData,
        countriesName,
      };
    }
  );

  return (
    <countriesContext.Provider value={response}>
      {children}
    </countriesContext.Provider>
  );
};
