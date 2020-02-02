'use strict;'

function ScoreCard() {

    //this.inPlay = false; // is the game in play - true or false - upon initialization - not in game - not playing
    ////this.frameRollCount = []; // tracks whether the player is on their first or second roll of a frame 
    //this.scoreSoFar = []; // score so far
     this.isStrike = false // returns true or false but on initialization is false
     this.isSpare = false // returns true of false but on initialization - is false
    //this.frameNumber = 0 // 0 as no rolls have been made
    //this.frameRollNumber = 0 // - as player hasn't started frame yet
      this.isGutterGame = false
      this.frames = [];
      this.frameCount = 0
      this.currentScoreForFrame = 0;
      this.cumulativeScore = 0;
    }
    
    ScoreCard.prototype.getCurrentScoreForFrame = function() {
      return this.currentScoreForFrame;
    }

    ScoreCard.prototype.getFrames = function() {
      return this.frames;
    }

    ScoreCard.prototype.getFrameCount = function() {
      return this.frameCount;
    }

    ScoreCard.prototype.getCumulativeScore = function() {
      return this.cumulativeScore;
    }
    
    ScoreCard.prototype.roll = function(roll1, roll2) {
       rolls =  roll1 + roll2
       return rolls
    }

   
   