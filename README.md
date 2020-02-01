
Bowling Challenge
=================


##**Rules**##

A game of bowling consists of **10** frames altogether.

For each frame(turn)   * **frames 1 - 9** , a player can receive **two** attempts to knock down all ten of the pins.
<br>
For **frame 10** - the player has up to **three** attempts to knock down all 10 of the pins.

A player scores a **strike** if they knock down **all 10** pins in one go (in the first frame).

A player scores a **spare** if they knock down **all 10 pins** over 2 goes(across two frames)

When a player achieves a **spare**, they are awarded **ten** points, plus a point for each of the pins they knock down 
in their **first attempt** in the **next** frame.

When a player achieves a **strike**, they are awarded ten points, plus a point for each of the pins they knock down
across **BOTH** attempts in the **next frame**.

A bowler plays a **gutter game** when the ball rolls into the gutters, resulting in a score of **0** and no pins knocked down.

In the **tenth** frame, a player who achieves a strike or a spare will receive a **bonus** turn.
If a player achieves a **strike** on the first attempt of frame ten, they will be entitled to **two** additional attempts.
If a player achieves a **spare** over two attempts in the tenth frame, they will be entitled to **one** more attempt.
If a player scores a **strike** or a **spare** on the third attempt, they will receive the points for pins
knocked down. 

User stories

User Story 1:
```
As a player,
So that I can keep track of my score,
I would like to add the number of pins I've knocked down in each frame to a scorecard.
```

User Story 2:
```
As a player,
So that I can calculate the score if I play a gutter game,
I would like to add a score of 0 to a scorecard.
```

User Story 3:
```
As a player,
So that I can feel good about my bowling abilities,
I would like to add a score of 10 to a scorecard when I achieve a spare
```

User Story 4:
```
As a player,
So I can feel even better about my bowling abilities,
I would like to add a score of 10 to a scorecard when I achieve a strike
```

User Story 5:
```
As a player,
So I can calculate the score correctly when I achieve a spare,
I would like to add additional points to the score of this frame by adding the total points scored in the **first** attempt of the next frame.
```

User Story 6:
```
As a player,
So I can calculate the correct score when I achieve a strike,
I would like to add additional points to the score of this frame, by adding the total points socre in **both** attempts of the next frame.
```

User Story 7:
```
As a player,
So I can continue to play a game of bowling if I haven't achieved a strike,
I would like to be able to receive a second attempt within the same frame
```

User Story 8:
```
As a bowler, 
So I can calculate the score correctly in the tenth and final frame
I would like to add the points scored in the third attempt to my total score.
```
User Story 9
```
As a bowler,
So I can celebrate or drown my sorrows,
I would like to add the total number of points scored out of 300 across the ten frames and have them returned to me
```

* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
