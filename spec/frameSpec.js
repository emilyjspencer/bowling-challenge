"use strict";

describe('Frame', function(){

  let frame;

  beforeEach(function(){
    frame = new Frame();
  })

    describe('initialization', function(){
      it('the current score is zero before any rolls have been made', function(){
        expect(frame.seeScoreForCurrentFrame()).toEqual(0) 
      })

      it('the scores array is empty at the start of the game', function(){
        expect(frame.seeScores()).toEqual([]) 
      })

      it('the rollCount is zero before any rolls have been made', function() {
        expect(frame.seeRollCount()).toEqual(0)
      })

      it('the frameCount is zero before any rolls have been made', function() {
        expect(frame.seeFrameCount()).toEqual(0) 
      })

      it('the cumulative score is zero before any rolls have been made', function() {
        expect(frame.seeCumulativeScore()).toEqual(0)
      })
    })

    describe('playing game', function() {
      it('gutter game  - the current score is 0 if the player scores 0 in roll1 and 0 in roll2 of frame1', function(){
        expect(frame.roll(0,0)).toEqual(0)
      })

      it('normal game - the current score for frame is 7 if the player scores 2 in roll1 and 5 in roll2', function(){
        expect(frame.roll(2,5)).toEqual(7)
      })

      it('adds frame to frames array when player has rolled twice', function(){
        frame.roll(3, 5)
        expect(frame.frames.length).toEqual(1)
      })

      describe('player scores a spare', function () {
        it('the current score is 10 if the player scores 5 in roll1 and 5 in roll2', function() {
          expect(frame.roll(5,5)).toEqual(10)
        })

       
      })

      describe('strike', function() {
        it('the player scores a strike - if first roll is 10 and second roll is five the total score for that frame is 10', function() {
        expect(frame.roll(10, 5)).toEqual(10)
      })

      it('returns true if 10 is scored in the first attempt of a frame', function() {
        frame.roll(10)
        expect(frame.strike()).toBe(true)
      })
    })

    describe('edge cases', function(){

      it('the second roll isnt saved if the total for the two pins adds up to more than 10', function(){
        expect(frame.roll(7, 8)).toEqual(7)
      })

      it('only the scores for the first 2 rolls in a frame are saved', function(){
        expect(frame.roll(6, 2, 8, 5)).toEqual(8);
      })
    })//


      //describe('correctFrameLength', function() {
        //it('scores array returns false is its length is more than two', function () {
          //frame.roll(7);
          //frame.roll(4);
          //frame.roll(2);
          //frame.scores.length = 3;
         // expect(frame.correctFrameLength()).toBe(false);
       // })
     // })


    describe('cumulative score', function() {
      it('returns the total score so far for 4 frames', function() {
        frame.roll(3, 4)
        frame.roll(5, 3)
        frame.roll(4, 1)
        frame.roll(2, 2)
        expect(frame.seeCumulativeScore()).toEqual(24)
      })
    })

    //describe('spare', function() {
      //describe('results in bonus points added to previous frame', function() {
        //it('adds bonus points to the previous frame if previous frame was a spare')
          
    

    //})
})
  
})
   




 