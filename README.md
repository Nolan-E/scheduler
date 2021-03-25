# Interview Scheduler
Interview scheduler is a Single Page Application (SPA) built with React. It allows users to book a new interview and edit or delete existing ones.

***
## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install all dependencies:
   ```shell
   npm install
   ```
3. Run the Webpack development server:
   ```shell
   npm start
   ```
4. Run the API server ([from this repo](https://github.com/Nolan-E/scheduler-api)):
5. Navigate to `http://localhost:8000` to explore the local application.

***
## Final Product

!['Create-Interview'](https://github.com/Nolan-E/scheduler/blob/master/docs/Create-Interview.gif?raw=true)
<br>

!['Screenshot2']()
<br>

!['Screenshot3']()
<br>

***
## Features

- Users can select any day between Monday to Friday and view the time slots.
- Users can see how many open spots are remaining for each day.
- Open time slots appear empty with and "Add" button to allow the user to create a new appointment.
- New appointments require student name to be entered and an interviewer to be selected.
- After being saved, the new appointment is visible to the user in the schedule.
- Existing appointments can be edited to allow the user to update the student name and/or select a different interviewer.
- Users can delete existing appointments and are served a confirmation before any destructive action is taken.
- If an error occurs while saving or deleting an appointment, the user will be served an error message.
- Closing the error message returns the user to the edit state if the error occurred while saving an appointment or to the schedule view if it occurred while attempting to delete.
- User data is persisted as the application communicates with an API server through HTTP requests (via JSON format), using a PostgreSQL database.

***
## Automated Testing

1. Jest - Unit & Integration Tests (98%+ Coverage):
   ```sh
   npm test
   ```
2. Storybook - Visual Component Isolation Tests:
   ```sh
   npm run storybook
   ```
3. Cypress** - End-to-End Tests:
   ```sh
   npm run cypress
   ```
   ** Requires cypress to be installed externally.

***

