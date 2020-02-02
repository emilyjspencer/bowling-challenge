'use strict;'

function ScoreCard() {

    //this.inPlay = false; // is the game in play - true or false - upon initialization - not in game - not playing
    ////this.frameRollCount = []; // tracks whether the player is on their first or second roll of a frame 
    //this.scoreSoFar = []; // score so far
     this.isStrike = false // returns true or false but on initialization is false
     this.isSpare = false // returns true of false but on initialization - is false
      this.isGutterGame = false
      //this.frameCount = 0
      this.scoreForCurrentFrame = 0;
      this.cumulativeScore = 0;
      this.rollCount = 0;
      this.frameCount = 0
      this.scores = [];
    }
    
    ScoreCard.prototype.seeScoreForCurrentFrame = function() {
      return this.scoreForCurrentFrame;
    }

    ScoreCard.prototype.seeScores = function() {
      return this.scores;
    }

    ScoreCard.prototype.seeFrameCount = function() {
      return this.frameCount;
    }

    ScoreCard.prototype.roll = function(roll1, roll2) {
      this.frameCount += 1 // increase frameCount by 1 for each frame - two rolls
       let rolls =  roll1 + roll2
       this.scores.push(rolls) // push the total score for the two rolls into the array
       return rolls // return the total of the two rolls 
    }

    ScoreCard.prototype.seeCumulativeScore = function() {
      // loop through the cumulative score array
      //for(var i = 0; i < this.frames.length; i++)
      //scores = this.scores.reduce((a, b) => a + b, 0) // scores is the result of adding all of the numbers in the array 
      return this.cumulativeScore;
    }

  
    

  

   
   