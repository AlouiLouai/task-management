/**
 * Create an object composed of the picked object properties
 * @param {Object} object - The input object from which properties will be picked.
 * @param {string[]} keys - An array of strings representing the keys (property names) to pick from the input object.
 * @returns {Object} - A new object containing only the selected properties.
 */
const pick = (object, keys) => {
  // Initialize an empty object to store the picked properties.
  return keys.reduce((obj, key) => {
    // Check if the input object exists and has the specified key.
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // Assign the property from the input object to the new object.
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    // Return the new object.
    return obj;
  }, {});
};

module.exports = pick;
