`python3 -m http.server`
# Memory Game | A simple single-player pattern-matching memory game.

Code Institute Milestone Project 2 - Interactive Frontend Development

This project is a simple single-player pattern matching game inpisred by Simon and Bop It. It contains 4 squares, that light up in a randomly generated sequence and the user has to replicate that sequence successfully to pass the level and gain score. The demonstration sequence lights up faster and faster each level to give the user a bit of a challenge, as well as recording the users highscore. There is no level-cap or score-cap, the only limit is the users ability to remember the sequence and get it right. Why not try it yourself, what's the best score you can get? 

![Memory Game - Interactive Frontend Website](https://github.com/shaamuus/milestone-project-2/blob/master/attachments/responsive-website.jpg "Memory Game - Interactive Frontend Website")

A live demo can be found [here](https://shaamuus.github.io/milestone-project-2/)

---

## Table of Contents
- [UX](#ux)
  * [User Stories](#user-stories)
  * [Wireframes](#wireframes)
- [Features](#features)
  * [Existing Features](#existing-features)
  * [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  * [Stories](#stories)
  * [Test Scenarios](#test-scenarios)
  * [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

---

## UX
This app is for you and me, it's easy to use, it's easy to leran and it's fun to play. For the more competitive players it can get addictive, however regardless of your skill it is rewarding for winners and gives everyone an opportunity. 

I went with a 'most viable product' approach, by reducing the clutter and focusing on the game and what matters most, I was able to create something that is simple yet effective, fun yet demanding. The overall experience is positive and highlights what you can achieve when you boil things down to their basic elements.

I focused mainly on the javascript and tried to write it and create a game that logically worked, this was my main focus long before I decided on what colours to change the squares to. I wanted the play button to start a demonstration sequence for the user to see, and give them enough time to learn, gradually increasing in speed as user progresses through the levels. With each level successfully passed, the level indicator increases and so does the users score, if the users current score beats their highscore, the text above the game says 'new highscore'. Everything in this app is manipulated through Javascript.


### User Stories
- _As a user of this app, I want everything layed out and easy to navigate._
- _As a user of this app, I don't want it to lag, I want quick and fast loading times._
- _As a user of this app, I want the game to be easy at first but challenging over time._
- _As a user of this app, I want it to be visually appealing._
- _As a user of this app, I want the game to indicate the game stages to me._
- _As a user of this app, I want to know when I've clicked and hear a response._
- _As a user of this app, I want to contact the developer and see other projects they've done._

### Wireframes
As part of the development process with this proejct I created mockups with wireframes using [Balsamiq]

This was hard at first as I didn't know where to start. However I sat down and thought long and hard about what my 'most viable product' would look like and decided to keep it simple, yet effective. At the end of the day this is the first time I've used JavaScript for anything serious and feel like I've learnt a lot during this process. 

As you can see in the wireframe, it's pretty basic but still highlights the features I consider highly important, such as the demonstration sequence, user input, win level and lose game sections.

![Memory Game - Wireframe Page](https://github.com/shaamuus/milestone-project-2/blob/master/attachments/memory-game-wireframe.png "Memory Game - Wireframe Page")

---

## Features
### Existing Features
1. The play button - this starts the game by playing the very first demonstration sequence and hides till the user loses
2. The demonstration sequence - the squares light up in a randomly generated sequence of 4, everytime
3. Demonstration sequence speed - after each level successfully passed, the demonstration sequence speeds up
4. Level indicator - this starts with 1 and increases by 1 every time the user passes successfully
5. Score indicator - this stars with zero but incsreases every time the user passes a level successfully 
6. High score - this updates with the players score till they lose and then sets a high score for the user to aim towards and beat
7. Mouse hide - on desktops the mouse hides during demonstrations to make game more appealing
8. User instruction - a single line of text above the game square that changes with the game state, giving users clear instructions and lose screen
9. No cap - there is no limit to the level/ score the user wishes to get - the only challenge is themselves
10. How to - step by step how to instructions how to play the game
11. Lose - when the user loses, the game ends, level and score reset, highscore is saved, play button reappears

Most of these features are all implemented or manipulated with JavaScript

### Features Left to Implement
Features still left to implement/ add at a later date:
1. Sound - this would be for every time a square is clicked, have some kind of bell audio response
2. Mute button - this would be neccessary if the game now comes with sound, lot of users dont like a noisy game
3. Leaderboard - compare your highscores to those of other players
4. Name input - this would be to put the user name in so they can join the leaderboard

---

## Technologies Used

The following technologies has been used in this project:

### Languages
- [HTML](https://en.wikipedia.org/wiki/HTML): for the structure of my project
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): for most of the styling in my project
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript): for the entire game logic, user feedback, score and level increase

### Styling
- [Google fonts](https://fonts.google.com/): for the fonts I used; 'Inconsolata', 'Dosis' and 'Oxygen'
- [Coolors](https://coolors.co/gradients): for the background gradients in the squares, the square area and the footer

### Frameworks/ libraries
- [Bootstrap](https://getbootstrap.com/) for the grid layout, keep everhything neat and tidy
- [jQuery](https://code.jquery.com/)for the logic of the game

### Additional
- [CSS Validator](https://jigsaw.w3.org/css-validator/validator.html.en) I used this to validate the CSS code
- [Markup Validator](https://validator.w3.org/) I used this to validate the HTML code
- [HTML Formatter](https://htmlformatter.com/) I used this to format my HTML
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) I used the console in the browser to debug my game as well as to test the responsiveness of the elements as I built my project.

---

## Testing
During this project I created a repository for it on github and accessed it through gitpod workspaces. Every change in the html/ css/ js files was saved and then run locally by entering 'python3 -m http.server' into the terminal to view changes. If changes were successful I added the file to the git server by inputting 'git add (file name)' and then committed the files with a corresponding message indicating what changes had been made by inputting 'git commit -m "changes". After that I pushed the files to my repository using 'git push' 

### Stories
- _As a user of this app, I want everything layed out and easy to navigate._
  - I've used the bootstrap grid system to layout all the items on my project in a friendly spacious manner. This gives clear insight into what is important on the screen, such as the level, score and highscore indicators being at the top of the screen above the square area. The most important bit is the game itself, the square area, which is in the middle of the screen.

- _As a user of this app, I don't want it to lag, I want quick and fast loading times._
  - In creating this app, I made sure the script tags were at the bottom of the html body and that the files weren't too big. This project doesn't use any images so theres no loading times for those.

- _As a user of this app, I want the game to be easy at first but challenging over time._
  - The game increases in speed every time the user passes a level successfully. The demonstration sequence gets faster and faster

- _As a user of this app, I want it to be visually appealing._
  - I used gradients from coolors.com to style the squares and the square background. I chose to keep it clutter free as I focused mainly on the key features.

- _As a user of this app, I want the game to indicate the game stages to me._
  - There is a line of text above the squares that indicates what the user needs to do during each game state, ie. click start, watch sequence, repeat sequence, try again, new highscore!

- _As a user of this app, I want to know when I've clicked and hear a response._
  - There currently is no sound available to indicate a click, I haven't figured it out in time and it would have been useful to have.

- _As a user of this app, I want to contact the developer and see other projects they've done._
  - There is a link in the footer to the developers linkedin page (obviously mine)


Automatic testing not completed as I didn't understand the Jasmine lesson as well as not have time to use the Jasmine framework and build with it.

### Test Scenarios
- Start the game by pressing the Start button - Working
- Win level - click 4 correct squares in sequence, level and score increase - working
- Lose game - click 4 incorrect squares in sequence, level and score reset - working
- High score - changes everytime user beats it, keeps highest score after user loses - working
- Square demonstration - a randomly generated sequence every time - working
- LinkedIn link in footer - working

Tried it on mobile and it worked well, one bug really but thats covered below

### Bugs
- Squares: when users hover over a square to click it, it stays highlighted and users get confused as they dont know how many clicks they've done especially asd theirs no sound response or additional visual response. Same on mobile, once a square is touched it stays 'on' this needs to be fixed

---

## Deployment
### GitHub Pages

To deploy the website on github pages, the following steps need to be taken:

1. Open GitHub and go to your **'Repository'**
2. Go to **'Settings'** top right
3. Scroll down until you see **'GitHub Pages'**
4. Under GitHub pages, click on the dropdown button under **'Source'** and select the **'Master Branch'** option
5. A green box should appear with the following message **'Your site is published at.../'**
6. After selecting this, you need to choose a **'Theme'**, this asigns a **'Jekyll'** file to your project and makes your website accessable.


### GitPod - running code locally

To deploy the code locally using gitpod, the follow steps need to be taken:

1. Open GitPod, go to the **Workspace** your project is located in
2. Once laoded, go the **Console/ Terminal** located in the bottom 3rd of the screen
3. Input **'python3 -m http.server'** then press return
4. A dialouge box reading 'A service is available on port 8000' will show to the right. Click on 'Open Browser'
5. This runs your code locally allowing you to view your project in the browser. No deployment necessessary

---

## Credits
### Content
Everything in this project is my own work, all the coding is mine, unless otherwise specicified with a comment

### Acknowledgements
I want to thank [Aaron Sinnott](https://github.com/aaronsnig501) for the skype calls and mentoring help during this project.

I also want to thank [Andrius Bartulis](https://github.com/AndriusBartulis) for allowing me to pick his brain for this project.

---

## Disclaimer

This is a work of fiction. Names, characters, businesses, places, events, locales, and incidents are either the products of the author's imagination or used in a fictitious manner. Any resemblance to actual persons, living or dead, or actual events is purely coincidental.

