import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useBankContext } from "../utils/BankContext";

function Withdraw() {
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [accountBalance, setAccountBalance] = useState(100); // initial balance of $100
  const {bank} = useBankContext();

  const handleWithdrawal = (event) => {
    event.preventDefault();
    if (withdrawalAmount > accountBalance) {
      alert("Insufficient funds!");
    } 
    else if (isNaN(withdrawalAmount)) {
      alert("Please enter a number!");
      } 
    else {
      setAccountBalance(accountBalance - withdrawalAmount);
      bank.users.push({balance:`${accountBalance + withdrawalAmount}`});
      alert(`Withdrawal successful. New balance: $${accountBalance - withdrawalAmount}`);
    }
  };

  return (
    <>
      <div className="outside-card">
        <Card color="light" className="center-card" style={{ marginTop: "30px" }}>
          <CardBody>
            <CardTitle className="w-white-text" tag="h4">
              Withdraw Amount
            </CardTitle>
            <hr className="line"></hr>
            <CardSubtitle className="w-white-text">
              Account Balance ${accountBalance}
            </CardSubtitle>
            <br />

            <form onSubmit={handleWithdrawal}>
              <input
                type="number"
                width="200"
                value={withdrawalAmount}
                onChange={(event) => setWithdrawalAmount(Number(event.target.value))}
                placeholder="$ Enter Withdrawal Amount Here"
              ></input>
              <br /> <br />
              <input className="submit" type="submit" width="200" value="Submit" disabled={!withdrawalAmount}></input>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Withdraw;