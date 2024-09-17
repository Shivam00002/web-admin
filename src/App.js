import './App.css';
import { Toaster } from "react-hot-toast";
import Home from './components/Home';


function App() {
  return (
    <>
      <Home />
      <Toaster toastOptions={{ position: 'top-center', style: { fontSize: "20px" } }} />
    </>
  );
}

export default App;
