import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CalendarViewButton from './CalendarViewButton';

class CalendarViewPicker extends React.Component {
    render() {
    const {calendarView, updateView} = this.props;
        return (
            <div className='planner-view-btn-container'>
                <CalendarViewButton
                    title={"Week"}
                    calendarView={calendarView}
                    viewCommand={"week"}
                    updateView={updateView}
                />
            </div>
        );
    }
}


CalendarViewPicker.propTypes = {
    calendarView: PropTypes.string.isRequired,
    updateView: PropTypes.func.isRequired
}

export default CalendarViewPicker;