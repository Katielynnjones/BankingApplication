import { useState } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { useBankContext } from "./BankContext";


const Deposit = () =>{
        
    
    //pulling two things from global state (useBankContext).
    //these are local state items. Global state is only needed if multiple components need it. Otherwise, it can be local like it is here. 
    
    const {bank} = useBankContext();
    const [balance, setBalance] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    const HandleDeposit = (e) =>{
        e.preventDefault();
        setBalance(balance + deposit);
        bank.users.push({balance: `${balance + deposit}`});
        alert(`Deposit successful. New balance is $${balance + deposit}`);
    };

    const handleChange = (e) => {
        const value = parseFloat(e.target.value);
        setDeposit(value);
        if (value <= 0) {
          setErrorMessage('Please enter a number greater than 0.');
        } else {
          setErrorMessage('');
          setDeposit(Number(e.target.value));
        }
      };

    return (
        <>
        <div className='d-outside-card'>
            <Card color ="light" className='center-card' style = {{marginTop: "25px"}}>
                <CardBody>
                    <CardTitle className='d-white-text' tag="h4">
                        Deposit
                    </CardTitle>
                    <hr className='line'></hr>
                    <CardSubtitle className='d-white-text'>
                        Account Balance ${balance}
                    </CardSubtitle>
                    <br/>

                    <form onSubmit={HandleDeposit}>
                        <input 
                        type="number"
                        width ="200"
                        value = {deposit}
                        onChange={handleChange}
                        //{(e) => setDeposit(Number(e.target.value))}
                        placeholder='$ enter amount to deposit'>

                        </input>
                        <br/> <br/>
                        <input className='submit' type="submit" width="250" value="Submit" disabled={deposit <= 0}></input>
                    </form>
                </CardBody>
            </Card>
        </div>
        </>
    )
}

export default Deposit;