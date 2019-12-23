"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
// Create object that satisfies the 'DataReader' interface
var csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
// Create an instance of MatchReader and pass in somthing satisfy the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
var manUnitedWins = 0;
// const dateOfFirstMatch = reader.data[0][0];
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
