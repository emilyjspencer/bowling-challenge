"use strict";

describe('ScoreCard', function(){

  let scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  })

    describe('initialization', function(){
      it('the current score is zero before any rolls have been made', function(){
        expect(scoreCard.seeScoreForCurrentFrame()).toEqual(0) 
      })

      it('the scores array is empty at the start of the game', function(){
        expect(scoreCard.seeScores()).toEqual([]) 
      })

      it('the frameCount is zero before any rolls have been made', function() {
        expect(scoreCard.seeFrameCount()).toEqual(0) 
      })

      it('the cumulative score is zero before any rolls have been made', function() {
        expect(scoreCard.seeCumulativeScore()).toEqual(0)
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

      it('the second roll isnt saved if the total for the two pins adds up to more than 10', function(){
        expect(scoreCard.roll(7, 8)).toEqual(7)
      })

      it('only the scores for the first 2 rolls in a frame are saved', function(){
        expect(scoreCard.roll(6, 2, 8, 5)).toEqual(8);
      })
    })

    describe('cumulative score', function() {
      it('returns the total score so far for 4 frames', function() {
        scoreCard.roll(3, 4)
        scoreCard.roll(5, 3)
        scoreCard.roll(4, 1)
        scoreCard.roll(2, 2)
        expect(scoreCard.seeCumulativeScore()).toEqual(24)
      })
    })
})




 