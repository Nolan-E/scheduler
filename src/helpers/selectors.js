export function getAppointmentsForDay(state, day) {
  const filterDays = state.days.find(currDay => currDay.name === day);
  return !filterDays ? [] : filterDays.appointments.map(apptID => state.appointments[apptID]);
}
