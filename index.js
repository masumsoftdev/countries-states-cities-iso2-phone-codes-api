const data = require('./data/data.json');

class CountriesAPI {
  // Get all countries list
  static getCountryList() {
    return data.countries.map(country => ({
      name: country.name
    }));
  }
  // Get all countries with iso2 and phone code
  static getCountries() {
    return data.countries.map(country => ({
      name: country.name,
      iso2: country.iso2,
      phone_code: country.phone_code
    }));
  }
  // Get ISO2 code by country name
  static getIso2ByCountryName(countryName) {
    const country = data.countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    return country ? country.iso2 : null;
  }
  // Get states by country ISO2 code
  static getStatesByCountry(iso2) {
    const country = data.countries.find(c => c.iso2 === iso2.toUpperCase());
    return country ? country.states.map(state => state.name) : null;
  }

  // Get cities by country ISO2 code and state name
  static getCitiesByState(iso2, stateName) {
    const country = data.countries.find(c => c.iso2 === iso2.toUpperCase());
    if (country) {
      const state = country.states.find(state => state.name.toLowerCase() === stateName.toLowerCase());
      return state ? state.cities : null;
    }
    return null;
  }

  // Get phone code by country ISO2 code
  static getPhoneCodeByCountry(iso2) {
    const country = data.countries.find(c => c.iso2 === iso2.toUpperCase());
    return country ? country.phone_code : null;
  }
}

module.exports = CountriesAPI;
