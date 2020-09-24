import React, {useState} from 'react';
import './main.css';
import home from './images/home.jpg';
import Input from "./components/Input";
import InputSwitch from "./components/InputSwitch";
import Button from "./components/Button";

function App() {

    const [generatedPassword, setGeneratedPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const addError = (e) => setErrors([...errors, e]);

    const [name, setName] = useState('');
    const updateName = (name) => setName(name);

    const [birthyear, setBirthyear] = useState(null);
    const updateBirthyear = (birthyear) => setBirthyear(birthyear);

    const [passwordLength, setPasswordLength] = useState(null);
    const updatePasswordLength = (passwordLength) => setPasswordLength(passwordLength);

    const [uppercase, setUppercase] = useState(false);
    const toggleUppercase = () => {uppercase ? setUppercase(false) : setUppercase(true)};

    const [numbers, setNumbers] = useState(false);
    const toggleNumbers = () => {numbers ? setNumbers(false) : setNumbers(true)};

    const [symbols, setSymbols] = useState(false);
    const toggleSymbols = () => {symbols ? setSymbols(false) : setSymbols(true)};

    function shuffle(s) {
        const arr = s.split('');           // Convert String to array
        arr.sort(function() {return 0.2 - Math.random()});
        s = arr.join('');                // Convert Array to string
        return s;                        // Return shuffled string
    }

    const uppercaseSomeLetters = (string) => {
        let out = '';
        for (let i = 0; i < string.length; i++) {
            if (Math.random() > 0.5)
                out += string.charAt(i).toUpperCase();
            else
                out += string.charAt(i).toLowerCase();
        }
        return out;
    }

    const generateNewPassword = (name, birthyear, passwordLength, uppercase, numbers, symbols) => {
        name = name.toLowerCase();
        let combination = name + (birthyear || '').toString();
        if (uppercase) combination = uppercaseSomeLetters(combination);
        const out = shuffle(combination);
        setGeneratedPassword(out)

    }

    return (
        <div className="h-screen bg-white text-gray-800 flex text-xs">
            <div className="flex flex-col-reverse md:flex-row w-full">
                <div className="md:w-3/4 h-full md:h-auto mp2 flex items-start md:items-center justify-center md:justify-end">
                    <div className="w-full max-w-3xl mx-4 md:m-auto">
                        <div className="mb-10 mt-8 uppercase text-xl md:text-3xl font-bold py-2 px-8 bg-gray-200 w-fit rounded-full"> get a <span className="text-blue-500"> new </span> password </div>
                        {errors.length>0 && <div className="text-gray-800 bg-red-200 py-2 px-4 rounded-sm"> {errors.map(error => (
                            <div className="flex justify-between items-start">
                                <p>
                                    {error} <br/>
                                </p>
                                <div
                                    className="bg-red-300 p-1 mb-1 font-bold cursor-pointer"
                                    onClick={() => setErrors(errors.filter(e => e!==error))}>
                                    X
                                </div>
                            </div>
                        ))}
                        </div>}
                        <form className="mt-2 md:mt-6">
                            <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-8 lg:grid-cols-2 p-4 border border-gray-200 rounded-sm">
                                <Input label="Name" value={name} onChange={(e) => updateName(e.target.value)}/>
                                <Input label="Birthyear" type="number" placeholder="yyyy" value={birthyear} onChange={(e) => updateBirthyear(e.target.value)}/>
                                <Input label="Password_length" type="number" value={passwordLength} onChange={(e) => updatePasswordLength(e.target.value)}/>
                                <InputSwitch label="UPPERCASE" checked={uppercase} onChange={() => toggleUppercase()}/>
                                <InputSwitch label="1234567890" checked={numbers} onChange={() => toggleNumbers()}/>
                                <InputSwitch label="~!@#$%^&*()_" checked={symbols} onChange={() => toggleSymbols()}/>
                            </div>
                        </form>
                        <div className="mt-8 flex justify-between items-center">
                            <Input
                                readOnly
                                value={generatedPassword}/>
                            <Button
                                onClick={() => {
                                    if (birthyear<1950 || birthyear>new Date().getFullYear()) {
                                        addError('Birthyear not logic');
                                        setBirthyear(null);
                                    }
                                    generateNewPassword(name, birthyear, passwordLength, uppercase, numbers, symbols)
                                }}
                            > Generate </Button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 flex pt-2 md:m-0 md:justify-start justify-center items-center">
                    <img src={home} alt="" className="md:w-full w-2/3 max-w-xl"/>
                </div>
            </div>
        </div>
    );

}

export default App;
