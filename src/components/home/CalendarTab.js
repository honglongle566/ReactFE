import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

const CalendarTab = () => {

    const [calendars, setCalendars] = useState([]);

    useEffect(() => {
        // fetch calendars events
        fetch(`${process.env.REACT_APP_BASE_URL}/api/integration/get-calendars-from-google-calendars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(res => {
            const cs = res.data.map(({title, start, end}) => ({title, start, end}))
            console.log(cs);
            setCalendars(cs);
        });
    }, []);

    return (
        <div>
            <h2>Calendar</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={calendars}
            />
        </div>

    );
};

export default CalendarTab;
