import 'bootstrap/dist/css/bootstrap.min.css';
import NavReactB from './components/NavReactB';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import News from './pages/News'
import Slide from './components/Slide';




export default function App() {
    
    return (
        <Router>
            <NavReactB />
            {/* <Slide /> */}
            <News />
            
            Footer
        </Router>
    );
}
