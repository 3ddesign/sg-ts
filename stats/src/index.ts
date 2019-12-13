import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';

// Create object that satisfies the 'DataReader' interface

const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in somthing satisfy the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

let manUnitedWins = 0;

// const dateOfFirstMatch = reader.data[0][0];

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);