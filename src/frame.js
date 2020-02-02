'use strict;'

function Frame() {
     this.isStrike = false
     this.isSpare = false
     this.isGutterGame = false
     this.scoreForCurrentFrame = 0;
     this.cumulativeScore = 0;
     this.rollCount = 0;
     this.frameCount = 0
     this.scores = [];
    }
    
    Frame.prototype.seeScores = function() { 
      return this.scores;
    }

    Frame.prototype.seeFrameCount = function() {
      return this.scores.length;
    }

    Frame.prototype.seeRollCount = function() {
      return this.rollCount;
    }
    
    Frame.prototype.roll = function(roll1, roll2) { 
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

    Frame.prototype.seeCumulativeScore = function() { 
      let total = this.scores.reduce((a, b) => a + b, 0) 
      return total;
    }


   Frame.prototype.isSpare = function () {
    return this.seeScoreForCurrentFrame() === 10;
  }

    Frame.prototype.strike = function() {
      if(this.scores[0] === 10) {
        return true
      }
    }

    Frame.prototype.seeScoreForCurrentFrame = function() {
      return this.scoreForCurrentFrame;
    }

    Frame.prototype.correctFrameLength = function () {
      return this.scores.length < 2;
    };

   

    

   

  
    

  

   
   