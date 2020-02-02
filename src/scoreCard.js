'use strict;'

function ScoreCard() {
     this.isStrike = false
     this.isSpare = false
     this.isGutterGame = false
     this.scoreForCurrentFrame = 0;
     this.cumulativeScore = 0;
     this.rollCount = 0;
     this.frameCount = 0
     this.scores = [];
    }
    
     ScoreCard.prototype.seeScoreForCurrentFrame = function() { // see the total for specific frame
      return this.scoreForCurrentFrame; // currently not doing anything 
  
    }

    ScoreCard.prototype.seeScores = function() { 
      return this.scores;
    }

    ScoreCard.prototype.seeFrameCount = function() {
      return this.scores.length;
    }

    ScoreCard.prototype.roll = function(roll1, roll2) { 
      this.frameCount += 1 
       let rolls =  roll1 + roll2
       if (rolls <= 10) {
         this.scores.push(rolls) 
         this.scoreForCurrentFrame += rolls
         return rolls 
       } else {
         this.scores.push(roll1)
         this.scoreForCurrentFrame += roll1
         return roll1
       }
    }

    ScoreCard.prototype.seeCumulativeScore = function() { 
      let total = this.scores.reduce((a, b) => a + b, 0) 
      return total;
    }

    

   

  
    

  

   
   