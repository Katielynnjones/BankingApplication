import Card from "./BankContext";
import bank from './bank.png';
const Home = () => {
    return (
        
        <Card
        txtcolor= 'black'
        header ='BadBank Home Page'
        title = 'Welcome to BadBank'
        status = 'The worst bank for your security'
        body = {(<input type = "image" style={{witdth:200, height:200}} src = {bank} className="img-fluid" alt="Responsive image"/>)}
        />
    )
};

export default Home;