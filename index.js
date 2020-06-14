const fs = require("fs");
const csv = require("csvtojson");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";


function main()
{
csv()
  .fromFile(MATCHES_FILE_PATH)
  .then(matches => {
    csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        totalMatchesYearwise = require("./ipl/Q1");
        let matchesPerSeason = totalMatchesYearwise(matches); 

        matchesWonPerTeamPerYear = require("./ipl/Q2");
        let matchesWonByTeam = matchesWonPerTeamPerYear(matches);

        extraRunPerTeam2016 = require("./ipl/Q3");
        let extraRuns = extraRunPerTeam2016(matches, deliveries) ;

        tenEconomicalBowler2015 = require("./ipl/Q4");
        let economicalBowler = tenEconomicalBowler2015(matches,deliveries) 

        storyPlayerDetails = require("./ipl/Q5"); 
         let StoryDetails = storyPlayerDetails(matches,deliveries);
        let Result = []; 
        Result.push({matchesPerSeason: matchesPerSeason});
        Result.push({matchesWonByTeam: matchesWonByTeam});
        Result.push({extraRuns: extraRuns});
        Result.push({economicalBowler:economicalBowler});
        Result.push({StoryDetails: StoryDetails});

        Result = JSON.stringify(Result);
        fs.writeFileSync("./public/data.json",Result, fallback);
        function fallback(err) {
          console.log("Error");
        }
      });
  });
}
  main();
