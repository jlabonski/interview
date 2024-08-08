#!/usr/bin/env node
import superagent from 'superagent';
import fs from 'node:fs/promises';

const URL='https://6god8pgyzf.execute-api.us-west-2.amazonaws.com/databases';

// TODO:
// * [ ] try/catch
// * [ ] any sort of error handling
// * [ ] cli niceties
// * [ ] hardcoded URL
// * [ ] This lacks the unix nature
// * [ ] functional approach is 'correct' but mildly esoteric, consider
//   switching to imperative depending on maintenance concerns

// IIFE
(async() => {

    const res = await superagent.get(URL);
    let goop = res.body;
    

    //let goop = JSON.parse(await fs.readFile('../../data.json', 'utf8'));
    
    let sorted = goop.databases.map((db) => {
        return {
            name: db.name,
            storage_type: db.storage_type,
            used: db.storage_used,
            percent_used: (db.storage_used / db.storage_size)
        }
    }).toSorted((a, b) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
        // To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.
        b.percent_used - a.percent_used;
    })
    
    console.dir(sorted);


})()
