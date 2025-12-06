<<<<<<< HEAD
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";


=======
>>>>>>> c95a5ddac4156f163d04c088e4b11d64fd306187
import './styles.css'

function App() {
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
