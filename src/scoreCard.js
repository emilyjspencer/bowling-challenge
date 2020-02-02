'use strict;'

function ScoreCard() {

    //this.inPlay = false; // is the game in play - true or false - upon initialization - not in game - not playing
    ////this.frameRollCount = []; // tracks whether the player is on their first or second roll of a frame 
    //this.scoreSoFar = []; // score so far
    //this.isStrike = false // returns true or false but on initialization is false
    //this.isSpare = false // returns true of false but on initialization - is false
    //this.frameNumber = 0 // 0 as no rolls have been made
    //this.frameRollNumber = 0 // - as player hasn't started frame yet
      this.frames = [];
      this.currentScore = 0;
    }
    
    ScoreCard.prototype.getCurrentScore = function() {
      return this.currentScore;
    }

    ScoreCard.prototype.getFrames =function() {
      return this.frames;
    }
    
   