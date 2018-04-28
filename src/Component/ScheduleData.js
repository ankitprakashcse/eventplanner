import React from 'react';
import {Button} from 'react-bootstrap';

import todosComplete, {getTodayDate, timeIncrements, timeValues} from './mock-data/mockTodos';


const button = <Button bsSize="xsmall" bsStyle="link">Edit/Delete</Button>

class ScheduleData extends React.Component {
  constructor(props){
    super(props);
    this.state={
      eventName:'',
      newEvent:'',
      
      todos:todosComplete
    }
  }

  handleClick(e, date, timeSlice) {
    this.props.onClick(date);
    
    console.log("Cell value",e.innerText);
    const eventName= prompt('Enter your event here...')
    const newEventDetails={
      activity:eventName,
      date:date,
      time:timeSlice,
      timeValue:timeSlice,
      button:button
    }
   
    this.setState({
      todos:[...todosComplete,todosComplete.unshift(newEventDetails)],
      showButton:'visible'
    })
  console.log("list of events are ", this.state.todos);
  }

  render() {
    const {date, timeSlice, todos, trueDate} = this.props;
    const isCurrentDay = (date.getTime() === trueDate.getTime());

    const timeSliceTodos = todos.filter((todo) => {
      return (todo.date.getTime() === date.getTime() && todo.time === timeSlice)
    });

    const [todo] = timeSliceTodos;

    return (
      <td 
        className={"schedule-activity " + (isCurrentDay ? "current-day " : "")}
        onClick={(e) => this.handleClick(e, date, timeSlice)} >
        {(todo ? todo.activity : '')}  <br/> 
        {(todo ? todo.button : '')}
        
      </td>
    )
  }
}

export default ScheduleData;

