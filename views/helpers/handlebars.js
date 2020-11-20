// Got this code off of Stack Overflow
// https://stackoverflow.com/questions/32707322/how-to-make-a-handlebars-helper-global-in-expressjs/42224612#42224612

var register = function(Handlebars) {
  var helpers = {
    // Calculates the acutal card level (since the API uses outdated ones)
    calculateCardLevel (oldLevel, oldMaxLevel) {
      return (13 - oldMaxLevel + oldLevel);
    },
    // Finds the difference between when a battle was fought and the current time
    dateDifference (pastDate) {
      // Date is processed like it is given in the Clash Royale API
      // The format is: YYYYMMDDTHHMMSS.000Z
      let oldDate = new Date(Date.UTC(pastDate.substring(0, 4), pastDate.substring(4, 6) - 1, pastDate.substring(6, 8), pastDate.substring(9, 11),pastDate.substring(11, 13), pastDate.substring(13, 15)));
      let timeDiffSec = Math.round((Date.now() - oldDate.getTime()) / 1000);
      let seconds = timeDiffSec % 60;
      let minutes = Math.floor(timeDiffSec / 60);
      let hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      let days = Math.floor(hours / 24);
      hours = hours % 60;
      let hourWord = "hours";
      let minuteWord = "minutes";
      let secondWord = "seconds";
      let dayWord = "days";
      if (hours === 1) {hourWord = "hour";}
      if (minutes === 1) {minuteWord = "minute";}
      if (seconds === 1) {secondWord = "second";}
      if (days === 1) {dayWord = "day";}
      if (days === 0) {
        if (hours === 0) {
          if (minutes === 0) {
            return (`${seconds} ${secondWord} ago`);
          } else {
            return (`${minutes} ${minuteWord}, and ${seconds} ${secondWord} ago`);
          }
        } else {
          return (`${hours} ${hourWord}, ${minutes} ${minuteWord}, and ${seconds} ${secondWord} ago`);
        }
      } else {
        return (`${days} ${dayWord}, ${hours} ${hourWord}, ${minutes} ${minuteWord}, and ${seconds} ${secondWord} ago`);
      }
    },
    // Calculates the average level difference between the team and the opponent
    levelDifference (t0, t1, opp0, opp1) {
      let teamCardSum = 0;
      let oppCardSum = 0;
      for (let i = 0; i < 8; i++) {
        teamCardSum += 13 - t0[i].maxLevel + t0[i].level;
        oppCardSum += 13 - opp0[i].maxLevel + opp0[i].level;
        if (t1) {
          teamCardSum += 13 - t1[i].maxLevel + t1[i].level;
          oppCardSum += 13 - opp1[i].maxLevel + opp1[i].level;
        }
      }
      if (t1) {
        return ((teamCardSum - oppCardSum) / 16);
      }
      return ((teamCardSum - oppCardSum) / 8);
    },
    // Removes the first character from a string
    removeFirstCharacter (text) {
      return text.substring(1);
    },
    // Performs logical comparisons
    compare (a, comparator, b) {
      switch(comparator) {
        case "<":
          if (a < b) {
            return true;
          }
          return false;
        case "!==":
          if (a !== b) {
            return true;
          }
          return false;
        case "===":
          if (a === b) {
            return true;
          }
          return false;
      }
    },
    // Does basic math
    math (a, operation, b) {
      switch(operation) {
        case "+":
          return (a + b);
        case "-":
          return (a - b);
        case "*":
          return (a * b);
        case "/":
          return (a / b);
      }
    },
    // Finds the winner of a battle
    findVictor (teamCrowns, opponentCrowns) {
      if (teamCrowns - opponentCrowns > 0) {
        return ("Victory");
      } else if (teamCrowns - opponentCrowns < 0) {
        return ("Defeat");
      } else {
        return ("Draw");
      }
    },
    // Find the number of cards needed to upgrade to the next level
    findCardsNeeded (oldLevel, oldMaxLevel) {
      const cardOrder = [2, 4, 10, 20, 50, 100, 200, 400, 800, 1000, 2000, 5000];
      if (oldLevel === oldMaxLevel) {
        return ("MAX");
      }
      return cardOrder[oldLevel - 1];
    },
    loopHTML (numTimes, html) {
      let toReturn = "";
      for (let i = 0; i < numTimes; i++) {
        toReturn += html;
      }
      return toReturn;
    }
  }

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (let prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    return helpers;
  }
};

module.exports.register = register;
module.exports.helpers = register(null);