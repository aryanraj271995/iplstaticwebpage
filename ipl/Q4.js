function tenEconomicalBowler2015(match, deliveries) 
{
  let economy2015 = {};
  let matches2015 = filter(match, a => a["season"] == 2015);
  let matchId2015 = map(matches2015, x => x["id"]);

  economy2015 = reduce(deliveries,(matchdetail, delivery) => {
      if (matchId2015.includes(delivery["match_id"])) 
      {
        if (delivery["bowler"] in matchdetail) 
        {
          if (delivery["wide_runs"] != 0 || delivery["noball_runs"] != 0) {
          } else 
          {
            matchdetail[delivery["bowler"]]["balls"]++;
          }
          matchdetail[delivery["bowler"]]["run"] = parseInt(matchdetail[delivery["bowler"]]["run"]) + parseInt(delivery["noball_runs"]) 
          + parseInt(delivery["wide_runs"]) + parseInt(delivery["batsman_runs"]);
        } 
        else 
        {
          matchdetail[delivery["bowler"]] = 
          {
            run:
              parseInt(delivery["noball_runs"]) + parseInt(delivery["wide_runs"]) + parseInt(delivery["batsman_runs"]),
            balls: 1
          };
        }
      }
      return matchdetail;
    },
    economy2015
  );

  let EconomyofBowler = [];
  for (let bowler in economy2015) 
  {
    economy2015[bowler]["economy"] = (6 * parseInt(economy2015[bowler]["run"])) / parseInt(economy2015[bowler]["balls"]);
    EconomyofBowler.push([bowler, economy2015[bowler]["economy"]]);
  }
  EconomyofBowler.sort(function(a, b) 
  {
    return a[1] - b[1];
  });
  topTenLeastEconomyBowler2015 = EconomyofBowler.slice(0, 10);
  let economyResult = {};
  for (let a in topTenLeastEconomyBowler2015) 
  {
    economyResult[topTenLeastEconomyBowler2015[a][0]] =
      topTenLeastEconomyBowler2015[a][1];
  }
  return economyResult;
}
module.exports = tenEconomicalBowler2015;
