import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReports';


// Create object that satisfies the 'DataReader' interface

const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in somthing satisfy the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
); 

summary.buildAndPrintReport(matchReader.matches);
