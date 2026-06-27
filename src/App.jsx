
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom'
import React, {Suspense} from 'react' 
const Landing = React.lazy(() => import('./components/Landing'))
const Dashboard = React.lazy(() => import('./components/Dashboard'))

function App() {
 
  return (
    <div>
      
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback="Loading...">
              <Landing />
            </Suspense>
          } />
          <Route path="/dashboard" element={
            <Suspense fallback="Loading...">
              <Dashboard />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default App
