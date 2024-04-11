import { Outlet } from 'react-router-dom';

import { BankProvider } from './BankContext';
import MyNavbar from './MyNavbar'



// the outlet tag injects page components

function App() {
    return(
        <BankProvider>
            <div className = "container">
                <MyNavbar/>
                <Outlet />
            </div>
        </BankProvider>
    )
};

export default App;