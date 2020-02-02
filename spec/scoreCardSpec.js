"use strict";

describe('ScoreCard', function(){

  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  })

  
    describe('frame one', function(){
      it('the current score is zero before any rolls have been made', function(){
        expect(scoreCard.getCurrentScore()).toEqual(0)
      })
    })

  

  })




 