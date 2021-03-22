import { useEffect, useState } from "react";
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  /*
  function getAppointmentsForDay(state, day) {
    const filterDays = state.days.find(currDay => currDay.name === day);
    return !filterDays ? [] : filterDays.appointments.map(apptID => state.appointments[apptID]);
  };
  */
  //
  const getSpotsCount = (dayObj, appointments) => {
    console.log('dayObj', dayObj)
    console.log('.days', state.days)
    console.log('.appointments', state.appointments)
    let count = 0;
    for(const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        count++;
      }
    }
    return count;
  }
  //state.day, state.days, appointments
  const updateSpots = (dayName, days, appointments) => {
    const day = days.find((item) => item.name === dayName);
    const unbooked = getSpotsCount(day, appointments);
    const newArr = days.map(item => {
      if (item.name === dayName) {
        return {...item, spots: unbooked};
      }
      return item;
    });
    return newArr;
  }

  const setDay = day => setState({...state, day});

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const spots = updateSpots(state.day, state.days, appointments);
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({...state, appointments, days: spots})
      })
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const spots = updateSpots(state.day, state.days, appointments);
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({...state, appointments, days: spots}))
  };

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then(all => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });
  }, [])


  // console.log('###Initial state.days:\n', state.days);
  // const days = updateSpots(state.day, state.days, state.appointments);
  // console.log('###Updated state.days:\n', days);
  // console.log('###Final state.days:\n(Should be unchanged)', state.days);

  return {state, setDay, bookInterview, cancelInterview};
};