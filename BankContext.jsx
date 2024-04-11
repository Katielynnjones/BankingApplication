import {
    createContext,
    useContext,
    useState
} from 'react';


function Card(props) {
    function classes() {
        const bg = props.bgcolor ? 'bg-' + props.bgcolor : '';
        const txt = props.txtcolor ? 'text-' + props.txtcolor : 'text-black';
        return 'card mb-3 ' + bg + ' ' + txt;
    }
    return (
        <div className={classes()} style={{ maxWidth: "100rem", marginTop: "20px" }}>
            <div className='card-header'>{props.header}</div>
            <div className='card-body'>
                {props.title && <h5 className='card-title'>{props.title}</h5>}
                {props.body}
                {props.status && <div id="createStatus" className='text-muted'>{props.status}</div>}
            </div>
        </div>
    );
}


export default Card;


const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

//bank is state, use state hook. the bank value is an object that has two properties in this case. by providing state value it can be read and used by child components
export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser: null, 
        users: [
            {
                username: 'kjones', email: 'kjones@email.com',password: 'asdfghjkl', balance: 100,
            },
            {
                username: 'wcrabtree', email: 'wcrabtree@email.com', password: 'asdfghjkl', balance: 100,
            },
        ]
    });
//child component for bank
//setBank function updates bank state variable. It replaces entire object/value with new value. Since replaces, take original object using spread operator (...). Saying loggedInUser:username updates that specific thing
    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

//child component for bank
    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }
//bankcontext.provider is global state for react, what is provided to children components is in the value prop. 

    return (
        <BankContext.Provider value ={{
            bank,
            addUser,
            setLoggedInUser,
        }}>
            {children}
        </BankContext.Provider>
    );

}
