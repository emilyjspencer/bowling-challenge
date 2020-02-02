"use strict";

describe('ScoreCard', function(){

  let scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  })

    describe('frame zero', function(){
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

      //it('the second roll isnt saved if the total for the two pins comes to more than 10', function(){
       // scoreCard.roll(7);
        //scoreCard.roll(8);
        ////})
  
      //it('only the scores for the first 2 rolls in a frame are saved', function(){
        //scoreCard.roll(6);
        //scoreCard.roll(2);
        //scoreCard.roll(8);
        //scoreCard.roll(5);
        //expect(scoreCard.seeScores()).toEqual([6,2]);
      //})
    })
  



})




 