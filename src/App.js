import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto' style={{minHeight:"100vh"}}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
    </div>
  );
}

export default App;
