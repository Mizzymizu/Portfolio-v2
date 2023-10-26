import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App';
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/Contact'
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'about', element: <About /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <ContactMe /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)