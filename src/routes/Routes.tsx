import { Routes as ReactRoutes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import Home from '../pages/Dashboard/Home';
import Dashboard from '../pages/Dashboard/Insight';
import UserList from '../pages/Users/UsersList';
import CreateNewUser from '../pages/Users/UsersCreate';
import UserDetails from '../pages/Users/UserDetails';
import Test from '../pages/_test';

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='dashboard' element={< Dashboard />} />
                <Route path='users' element={< UserList />} />
                <Route path='create_new_user' element={< CreateNewUser />} />
                <Route path='user_detail' element={<UserDetails />} />
                <Route path='test' element={<Test />} />
            </Route>
        </ReactRoutes>
    )
}

interface Sprops {
    children: JSX.Element
}
export default Routes