import Routers from './routes';
import './primereact/theme.css';
import "primereact/resources/primereact.min.css";   

function App() {
  return (
    <div className='app relative'>
      <Routers />
    </div>
  )
}

export default App