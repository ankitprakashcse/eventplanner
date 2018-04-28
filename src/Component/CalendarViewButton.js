import React, { Component } from 'react';
import { PropTypes } from 'prop-types';



class CalendarViewButton extends React.Component {
    render() {
        const {calendarView, title, updateView, viewCommand} = this.props;
        const isSelected = (viewCommand === calendarView);
        const selectedClass = isSelected ? ' planner-view-btn-active' : '';
        return (
            <button 
                className={"planner-view-btn" + selectedClass}
                onClick={() => updateView(viewCommand)}
            >
                {title}
            </button>
        );
    }
}

CalendarViewButton.propTypes = {
    calendarView: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateView: PropTypes.func.isRequired,
    viewCommand: PropTypes.string.isRequired
}

export default CalendarViewButton;