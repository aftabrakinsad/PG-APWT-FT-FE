import React,{useState} from 'react';
import axios from 'axios';

function APP()
{
    const [data,setData] = useState([]);
    async function fetcUser()
    {
        try
        {
            // const response = await axios.get('http://localhost:3001/admin/index');
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data);
        }
        catch(error)
        {
            console.error('The Error is',error);
        }
    }
    fetcUser();
    return(
        <div className='bg-gray-700'>
            <ul>
                {
                    data.map(user => 
                    <li className='text-white' key={user.id}>
                        <span>Name: {user.name}</span><br></br>
                        <span>Email: {user.email}</span><br></br>
                        {/* {user.password}<br></br> */}
                        <span>Address: {user.address}</span><br></br>
                    </li>
                    )
                }
            </ul>
        </div>
    );
}
export default APP;