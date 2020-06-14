function extraRunPerTeam2016(matches, deliveries) 
{
  let extraRuns = {};
  let matches2016 = filter(matches, match => match["season"] == 2016);
  let matchNo2016 = map(matches2016, match => match["id"]);

  extraRuns = reduce( deliveries, (matchdetail, delivery) => {
      if (matchNo2016.includes(delivery["match_id"])) 
      {
        if (delivery["bowling_team"] in matchdetail) 
        {
          matchdetail[delivery["bowling_team"]] = parseInt(matchdetail[delivery["bowling_team"]]) + parseInt(delivery["extra_runs"]);
        }
         else 
        {
          matchdetail[delivery["bowling_team"]] = delivery["extra_runs"];
        }
      }
      return matchdetail;
    },
    extraRuns
  );

  return extraRuns;
}
module.exports = extraRunPerTeam2016;
