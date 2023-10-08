import Routers from './routes';
import './primereact/theme.css';
import "primereact/resources/primereact.min.css";   
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className='app relative'>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </div>
  )
};

export default App;