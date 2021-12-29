import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Gear from '../pages/Gear';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tracks from '../pages/Tracks';
import Tickets from '../pages/Tickets';
import { ROUTES } from '.';

function Router (props) {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route exact path={ROUTES.DEFAULT} element={<Main />} />
                <Route path={ROUTES.GEAR} element={<Gear />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.TRACKS} element={<Tracks />} />
                <Route path={ROUTES.TICKETS} element={<Tickets />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
