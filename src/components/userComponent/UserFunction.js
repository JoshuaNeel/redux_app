import React,{useState} from 'react';

const UserFunction = () => {
    const [name,setName]  = useState('');
    function handleChange(event){
        setName(event.target.value)
    }
    return (
        <div>
            <input type='text' onChange={handleChange} value={name} />
        </div>
    );
};

export default UserFunction;