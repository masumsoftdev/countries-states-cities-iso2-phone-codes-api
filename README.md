
# Countries States Cities API

`countries-states-cities-iso2-phone-codes-api` is an NPM package that provides an easy-to-use interface to access global data related to countries, including their ISO2 codes, phone codes, states or provinces, and cities. The package allows you to fetch lists of countries, retrieve ISO2 codes by country name, get states by country ISO2 code, and fetch cities within a state.

## Features

- Get a complete list of countries.
- Retrieve ISO2 codes and phone codes by country.
- Fetch states or provinces for a specific country using the ISO2 code.
- Retrieve cities for a specific state in a country.
- Get the ISO2 code by country name.
- Lightweight and easy to use.

## Installation

To install this package, use npm:

```bash
npm install countries-states-cities-iso2-phone-codes-api
```

## Usage

Below are some examples of how to use the package:

### 1. Importing the Package

First, require the `countries-states-cities-iso2-phone-codes-api` package:

```javascript
const CountriesAPI = require('countries-states-cities-iso2-phone-codes-api');
```

### 2. Get the List of All Countries

Use the `getCountryList` method to get the list of all countries with their names:

```javascript
const countryList = CountriesAPI.getCountryList();
console.log(countryList);
/*
Output:
[
  { name: 'United States' },
  { name: 'Canada' },
  { name: 'Australia' },
  // ...other countries
]
*/
```

### 3. Get All Countries with ISO2 and Phone Code

You can retrieve a complete list of countries with their ISO2 code and phone code using the `getCountries` method:

```javascript
const countries = CountriesAPI.getCountries();
console.log(countries);
/*
Output:
[
  { name: 'United States', iso2: 'US', phone_code: '+1' },
  { name: 'Canada', iso2: 'CA', phone_code: '+1' },
  { name: 'Australia', iso2: 'AU', phone_code: '+61' },
  // ...other countries
]
*/
```

### 4. Get ISO2 Code by Country Name

To retrieve the ISO2 code of a country by its name, use the `getIso2ByCountryName` method:

```javascript
const iso2 = CountriesAPI.getIso2ByCountryName('Canada');
console.log(iso2); // Output: "CA"
```

### 5. Get States by Country ISO2 Code

Retrieve a list of states or provinces in a specific country by providing the ISO2 code using `getStatesByCountry`:

```javascript
const states = CountriesAPI.getStatesByCountry('US');
console.log(states);
/*
Output:
[
  'California',
  'Texas',
  'New York',
  // ...other states
]
*/
```

### 6. Get Cities by Country ISO2 Code and State Name

To get a list of cities within a specific state of a country, use the `getCitiesByState` method by passing the country ISO2 code and state name:

```javascript
const cities = CountriesAPI.getCitiesByState('US', 'California');
console.log(cities);
/*
Output:
[
  'Los Angeles',
  'San Francisco',
  'San Diego',
  // ...other cities
]
*/
```

### 7. Get Phone Code by Country ISO2 Code

You can retrieve the phone code for a country using its ISO2 code with `getPhoneCodeByCountry`:

```javascript
const phoneCode = CountriesAPI.getPhoneCodeByCountry('CA');
console.log(phoneCode); // Output: "+1"
```

## API Methods

### `getCountryList()`
Returns an array of all countries with their names.

**Returns:**
- `Array`: A list of country objects `{ name: string }`.

### `getCountries()`
Returns an array of all countries with their names, ISO2 codes, and phone codes.

**Returns:**
- `Array`: A list of country objects `{ name: string, iso2: string, phone_code: string }`.

### `getIso2ByCountryName(countryName)`
Returns the ISO2 code for the given country name.

**Arguments:**
- `countryName` (string): The name of the country.

**Returns:**
- `String` or `null`: The ISO2 code if found, otherwise `null`.

### `getStatesByCountry(iso2)`
Returns an array of states or provinces for the given country ISO2 code.

**Arguments:**
- `iso2` (string): The ISO2 code of the country.

**Returns:**
- `Array` or `null`: A list of state names if the country exists, otherwise `null`.

### `getCitiesByState(iso2, stateName)`
Returns an array of cities for the given state name in the specified country.

**Arguments:**
- `iso2` (string): The ISO2 code of the country.
- `stateName` (string): The name of the state or province.

**Returns:**
- `Array` or `null`: A list of city names if the state exists, otherwise `null`.

### `getPhoneCodeByCountry(iso2)`
Returns the phone code for the given country ISO2 code.

**Arguments:**
- `iso2` (string): The ISO2 code of the country.

**Returns:**
- `String` or `null`: The phone code if found, otherwise `null`.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Author

Developed by **Masum Billah** .  
For any issues, suggestions, or contributions, feel free to reach out [here](mailto:office.hellomasum@gmail.com).

---

Feel free to contribute to this repository by submitting issues, suggesting features, or creating pull requests.
