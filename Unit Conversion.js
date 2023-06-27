response.setHeader("Content-Type", "application/javascript");
(function (ext) {
  // Conversion functions

  // Length
  function metersToFeet(meters) {
    return meters * 3.28084;
  }

  function feetToMeters(feet) {
    return feet * 0.3048;
  }

  // Weight
  function kilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
  }

  function poundsToKilograms(pounds) {
    return pounds * 0.453592;
  }

  // Volume
  function ouncesToCups(ounces) {
    return ounces / 8;
  }

  function cupsToOunces(cups) {
    return cups * 8;
  }

  // Temperature
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  // Block definitions
  var descriptor = {
    blocks: [
      // Length conversions
      ['r', 'convert %n meters to feet', 'metersToFeet', 0],
      ['r', 'convert %n feet to meters', 'feetToMeters', 0],

      // Weight conversions
      ['r', 'convert %n kilograms to pounds', 'kilogramsToPounds', 0],
      ['r', 'convert %n pounds to kilograms', 'poundsToKilograms', 0],

      // Volume conversions
      ['r', 'convert %n ounces to cups', 'ouncesToCups', 0],
      ['r', 'convert %n cups to ounces', 'cupsToOunces', 0],

      // Temperature conversions
      ['r', 'convert %n °C to °F', 'celsiusToFahrenheit', 0],
      ['r', 'convert %n °F to °C', 'fahrenheitToCelsius', 32],
    ],
    menus: {},
    color1: '#4C97FF',
    color2: '#0062B1',
    color3: '#003087',
  };

  // Block implementations
  ext.metersToFeet = function (meters) {
    return metersToFeet(meters);
  };

  ext.feetToMeters = function (feet) {
    return feetToMeters(feet);
  };

  ext.kilogramsToPounds = function (kilograms) {
    return kilogramsToPounds(kilograms);
  };

  ext.poundsToKilograms = function (pounds) {
    return poundsToKilograms(pounds);
  };

  ext.ouncesToCups = function (ounces) {
    return ouncesToCups(ounces);
  };

  ext.cupsToOunces = function (cups) {
    return cupsToOunces(cups);
  };

  ext.celsiusToFahrenheit = function (celsius) {
    return celsiusToFahrenheit(celsius);
  };

  ext.fahrenheitToCelsius = function (fahrenheit) {
    return fahrenheitToCelsius(fahrenheit);
  };

  // Extension initialization
  ScratchExtensions.register('Unit Conversion', descriptor, ext);
})({});
