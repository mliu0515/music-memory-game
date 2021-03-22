# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [yes] "Start" button toggles between "Start" and "Stop" when clicked.
- [yes] Game buttons each light up and play a sound when clicked.
- [yes] Computer plays back sequence of clues including sound and visual cue for each button
- [yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [yes] User wins the game after guessing a complete pattern
- [yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [yes] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [yes] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [yes] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning the game:
![](https://cdn.glitch.com/9aac58f9-7689-4066-a9ac-32ef8b19ed18%2FsoundMemoryGame.gif?v=1615787587206)

Losing the game:
![](https://cdn.glitch.com/9aac58f9-7689-4066-a9ac-32ef8b19ed18%2FloseGame.gif?v=1615787589445)

Player has three strikes: 
![](https://cdn.glitch.com/9aac58f9-7689-4066-a9ac-32ef8b19ed18%2FStrikes.gif?v=1615942025481)
## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [No I didn't use any outside resources.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   [Personally I find it a little bit challenging implementing the game logic that handles user guesses. One of the reasons is simply that there are a lot of cases to handle. Guided by the spec, I tried to implement the logic to take into account not only whether the guess is correct or not, but also whether the game is over or not, and whether it’s the last turn and whether the three strikes are all used up or not. The flow chart provided in the guide was helpful, but at first it was still challenging to turn it into actual code. In order to overcome the challenge, I added an intermediate step before writing the actual javascript code. Instead of directly jumping to the code writing, I first turned the flow chart into lines of pseudocodes and wrote these pseudocodes onto a sheet of paper. I then modified my pseudocodes to make sure that they adhere to the requirements. Doing this greatly helped me organize my thought process and gave me a better idea of how to implement the actual game logic in javascript. Additionally, I was a little lost in terms of what variables and functions I should use. There were three constants and eight variables created, as well as several helper functions. And since I did the previous parts of the project up to that point at a relatively fast pace, I wasn’t able to remember all of the functions and variables super well on top of my head. As a result, I was stuck on implementing the bodies of the if/else statements since I was confused about how to execute things by calling other functions. The way I solved it is to write all the useful variables down on a sheet of paper along with a short description of what they do. I also did the same thing with all the functions such as playClueSequence, winGame, and so on. This way, I could keep track of all the helpful variables and methods I have created, without getting distracted by the implementation detail, and it helps me better focus on the abstracted definition of each function. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [1. How can we make the page look more visually appealing? The webpage that we created here consists of relatively simple elements such as buttons and text blocks, but a lot of the websites we see everyday have more complicated formats and elements than what we have created. Additionally not only there are more elements, there are also animations and other effects that come with these embedded elements that are triggered by the user's interaction with the webpage. I am really curious about how to implement these user interactions in a way that can grab the user’s attention to the content of the website.]
   
   [2. Different websites have different utilities. For example, the webpage we created is for gaming, while other websites have other functionality such as providing information to the browsers, hosting money transactions, offering platforms for entertainment, etc. What are some key elements that each different website should have in order for it to do its job? How do we develop a website to make sure it fits well with its function and maximize the efficiency when users interact with it?    ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [1. I would insert a demo button that users can click on to watch an animated game demo that explains the rules of the game. I think doing so can help users to better understand the game before playing.]
   
   [2. I would try to make the game into multiple levels of difficulty, and users can click buttons that correspond to the difficulty level and play whatever mode they choose.] 
   
   [3. I would try to change the graphics to make it look more complicated. Maybe instead of buttons, I would make them look like an instrument keyboard.] 
   
   [4. For the strikes feature, it currently asks the player to only play the most recent note again after the player got a strike. If I have more time, I would let the player play the entire sequence all over again instead of just the most recent note. That way, the game is more challenging and makes more sense.] 
   
   [5. I can set up a record system that tracks how long it takes for users to finish a round of music sequence. The clock would start ticking right after the music sequence is done playing, and stops right when the users finished playing the sequence. The total time it takes for users to finish a round is then recorded. And whenever the users break their personal record, the game will notify the users through an alert on top of the screen.]

## License

    Copyright [May Liu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

