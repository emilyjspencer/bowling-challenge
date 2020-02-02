"use strict";

describe('ScoreCard', function(){

  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  })

    describe('frame zero', function(){
      it('the current score is zero before any rolls have been made', function(){
        expect(scoreCard.getCurrentScoreForFrame()).toEqual(0) 
      })

      it('the frames array is empty at the start of the game', function(){
        expect(scoreCard.getFrames()).toEqual([]) 
      })

      it('the frameCount is zero before any rolls have been made', function() {
        expect(scoreCard.getFrameCount()).toEqual(0) 
      })

      it('the score so far is zero before any rolls have been made', function() {
        expect(scoreCard.getCumulativeScore()).toEqual(0)
      })
    })

    describe('playing game', function() {
      it('gutter game  - the current score is 0 if the player scores 0 in roll1 and 0 in roll2 of frame1', function(){
        expect(scoreCard.roll(0,0)).toEqual(0)
        //expect(scoreCard.showMessage()).toEqual('Gutter Game Alert!!!')
      })

      it('normal game - the current score for frame is 7 if the player scores 2 in roll1 and 5 in roll2', function(){
        expect(scoreCard.roll(2,5)).toEqual(7)
      })

      it('spare - the current score is 10 if the player scores 5 in roll1 and 5 in roll2', function() {
        expect(scoreCard.roll(5,5)).toEqual(10)
      })

    })

  })




 