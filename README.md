# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs the dependancy in the node_modules folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Context API

Used Context API for manuplate data.

### Eslint

Configured Eslint for linting.

### Validations

I handled validations for appointment slot creation.

1. If the slot is already exists with the new slot time, it throws the error.
2. If the end time is less than the start time, it throws the error.
3. Can not create slots for past dates.

### entry point

The entry point of the project from src/index.js.

### Project Functionality

1. There are two modules one for the Buyer and other one for Service Provider.
2. First you have to select Service Provider section through top-right button.
3. Then you have to select Service Provider from the dropdown.
4. After that, create an apppointment slot, you can see the created slot in Created Slot Table (sees at bottom of appointment form).
5. Then again go to Buyer section through top-right button, and select Service Provider from dropdown.
6. After that you will see the available dates for the appointment creation, select date, then you will see available slots of that date, after that, select the available slot and press Book Appointment button.
7. After that, you will see the created appointment in the Appointment Lists table with status.
8. Then again go to Service Provide section, and select Service Provider and you will see the appointment request in Appointment Requests table.
9. Then you can Accept / Reject request through action button.
10. Then again go to Buyer Section and check the status of corresponding appointment (status will be Accepted / Rejected, according to your action performs on appoitment request).
