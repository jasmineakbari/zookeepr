const express = require('express');
const { animals } = require('./data/animals.json');

// Initiates server
const app = express();

function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];

    // saving animalsArray as filtered results
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
        //save personalityTraits as a dedicated Array
        //if persoalityTraits is a string, place into a new array and save
        if (typeof query.personalityTraits === 'string') {
            personalityTraitsArray = [query.personalityTraits];
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        // Loop through each trait in the personalityTraits Array
        personalityTraitsArray.forEach(trait => {
            // Check the trait against each animal in the filteredResults Array
            // Remember, it is initially a copy of the animalsArray
            // but here we're updating for each trait in the .forEach() loop
            // For each trait being targeted by the filter, the filteredResults
            // array will then contain only the entries that contain the trait,
            // so at the end we'll have an array of animals that have every one
            // of the traits when the .forEach() loop is finished.
            filteredResults = filteredResults.filter(
                animal => animal.personalityTraits.indexOf(trait) !== -1
            );
        });
    }
    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === querty.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

// two arguments 1st is route client will 'request' from 2nd is using send from 'response'parameter
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});
// enables server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});