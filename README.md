## README

PicShare enables friends to combine their individual photos from an event into a single shared album.
This is the frontend repository for PicShare.

![](https://media.giphy.com/media/5QPbsovgF2vzmnJ8Kb/giphy.gif)
![](https://media.giphy.com/media/wsTyZ6hHSKoo2MP3Hr/giphy.gif)
![](https://media.giphy.com/media/9DegZAsZSTEWE0gwVs/giphy.gif)
![](https://media.giphy.com/media/EExX2VGaF8mq7muPIt/giphy.gif)

[![YouTube video demo](http://img.youtube.com/vi/zJOcueH0bjY&feature=youtu.be/0.jpg)](http://www.youtube.com/watch?v=zJOcueH0bjY&feature=youtu.be)

# Motivation

Me and 6 friends went on holiday to Florida in 2009. When we came back we had 7 sets of photos which we still haven't looked through together! Once I decided I was going to pursue a career in code, I told them I would build an app so that we could share all our pictures...here it is.
PicShare is my final project for Mod5 of the Flatiron School Software Engineering Immersive, London

# Learnings

I learned A LOT during this project. In fact I've decided to build it again, taking my learnings on board.

1. React Routes should be created at the start, as you are building your components:
   I tried to refactor my project to include Routes once I had a working prototype, but it was pretty awkward.

2. Same goes for tests:
   I tried to learn testing with Enzyme and Jest, and practise it on some of my components. It was also tricky to implement.
   The rebuild will follow a TDD approach, testing each component as I build it.

3. ...and design!
   Initially I was more concerned with getting a working prototype then thinking about how to style it.
   Semantic-UI-React provided most of the styling for this app; building Semantic components from the start would have saved some refactoring.

4. Plan thoroughly:
   We had a couple of days of planning, then 2 weeks to build our apps. I could have used the whole 2 weeks just to plan.

# Getting started:

Fork and clone this repository. You will also need to fork and clone the backend repository which can be found here: https://github.com/CalieR/Holiday-Photo-App-backend

## Installing

```
npm install
npm install semantic-ui-react
npm start

```

# Built with

- Create React App
- Semantic UI React
- Cloudinary
- react-dropzone
- Balsamiq
- Trello

# Acknowledgements

- Danny Zuzevich for his excellent Image Slider tutorial: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
- Damon Bauer Image Upload article for CSS-Tricks.com. https://css-tricks.com/image-upload-manipulation-react/
- A special thank you to all the tireless TCF' and instructors at Flatiron School
