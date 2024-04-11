// below is where child component is using/reading from global state. this allows us to have access to the bank context object. 

import { useBankContext } from "./BankContext";
import * as bootstrap from 'bootstrap';



const Data = () =>{
    const { bank } = useBankContext(); //this returns object provided from bottom of BankContext. 
    


    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Password
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    bank.users.map(
                        (user, index) =>{
                            return(
                                <tr>
                                    <th scope ="row">
                                        {index+1}

                                    </th>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.password}
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    );
   
};

export default Data;