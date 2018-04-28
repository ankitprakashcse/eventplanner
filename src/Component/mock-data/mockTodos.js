import React from 'react'
import {Button} from 'react-bootstrap';

export const timeIncrements = ['12am', '12:30am', '1am', '1:30am','2am', '2:30am','3am', '3:30am','4am', '4:30am',
  '5am', '5:30am','6am', '6:30am','7am', '7:30am','8am', '8:30am','9am', '9:30am',
  '10am', '10:30am','11am', '11:30am','12pm', '12:30pm', '1pm', '1:30pm','2pm',
  '2:30pm','3pm', '3:30pm','4pm', '4:30pm', '5pm', '5:30pm','6pm', '6:30pm','7pm',
  '7:30pm','8pm', '8:30pm','9pm', '9:30pm','10pm', '10:30pm','11pm', '11:30pm'];

export const timeValues = [1, 30, 100, 130, 200, 230, 300, 330, 400, 430, 500, 530, 600, 630,
  700, 730, 800, 830, 900, 930, 1000, 1030, 1100, 1130, 1200, 1230, 1300, 1330, 1400, 1430,
  1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2130, 2200, 2230,
  2300, 2330];

export const todos = ['Call a friend', 'Eat Carbs', 'Make oatmeal for the day',
  'Drink water', 'Buy protien', 'go to the gym', 'Study english', 'Take vitamins', 'Call Mom',
  'Send Thank You notes', 'Call your trainer', 'Call healthifyme.com', 'Play badminton',
  'Take a nap. You earned it.', 'Play Chess',  'Go for a ride', 'Prepare for interview',
  'Get a passport done', 'Wash your dishes', 'Go for a moview', 'Do laundry', 'Pay Electricity bill',
  'Hustle', 'Alexa play music', 'Read Quora', 'Check your twitter', 'Eat an apple', 'Brush teeth',
  'Beer with friends!', 'leave early to avoid traffic', 'Watch IPL', 'Call your dad', 'Meditate', 'React Meetup',
  'Buy tickets for avengers'
];

const button = <Button bsSize="xsmall" bsStyle="link">Edit/Delete</Button>

const todosComplete = todos.map((todo) => {
  const randomTimeIndex = getRandomInt(48, 0);

  return ({
    activity: todo,
    date: getRandomDate(),
    time: timeIncrements[randomTimeIndex],
    timeValue: timeValues[randomTimeIndex],
    button:button
    
  })
});

todosComplete.push(
  {activity: 'Make the event planner', date: getTodayDate(), time: timeIncrements[0], timeValue: timeValues[0]},
  {activity: 'Submit your code', date: getTodayDate(), time: timeIncrements[0], timeValue: timeValues[0]},
);

export function getRandomInt(max, min) {
  return Math.floor(Math.random() * max + min);
}

export function getRandomDate() {
  const randDate = new Date();
  randDate.setHours(0,0,0,0);
  // Set a random date between 2 weeks in the past and 14 days in the future
  randDate.setDate(randDate.getDate() + getRandomInt(36, -12));
  return randDate;
}

export function getTodayDate() {
  const today = new Date();
  today.setHours(0,0,0,0);
  return today;
}

//Object.freeze(todosComplete);

export default todosComplete;

