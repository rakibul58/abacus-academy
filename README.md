# Abacus Academy Client

[Live Site](https://new-abacus-academy.web.app/)

A React-based frontend for the Abacus Academy e-learning platform.

## Features

- User authentication with Firebase
- Role-based access control (Student/Teacher)
- Course catalog and management
- Video content viewing
- Course enrollment system
- Responsive design with Tailwind CSS
- Email notifications with EmailJS

## Tech Stack

- React 18
- React Router v6
- Firebase Authentication
- Tailwind CSS
- DaisyUI
- EmailJS
- React Hook Form
- React Hot Toast
- React Helmet
- AOS (Animate On Scroll)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- EmailJS account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rakibul58/abacus-academy.git
cd abacus-academy-client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your Firebase and EmailJS configurations:
```env
REACT_APP_imgbb_key=
```

4. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/
├── contexts/
├── hooks/
├── layouts/
├── pages/
├── router/
└── App.js
```

## Features Implementation

### Authentication
- Firebase Authentication integration
- Protected routes
- Role-based access control

### Course Management
- Course listing
- Course details view
- Video content management
- Enrollment system

### UI/UX
- Responsive design with Tailwind CSS
- Toast notifications
- Loading states
- Animations with AOS
- Image viewing with react-photo-view

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.