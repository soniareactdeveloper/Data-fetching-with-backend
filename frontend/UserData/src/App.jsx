import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  

  // display products
  useEffect(() => {
    axios
      .get('http://localhost:9000/api/users')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);



 
  return (
    <>
     <div className='flex flex-wrap gap-2 justify-center mt-4 '>
      {
        data.map((item, i) => (
          <div key={i} className="w-[300px] p-5 bg-blue-950 rounded-lg shadow-lg mb-8">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
              <p className="text-xl text-white">{item.username}</p>
            </div>

            <div className="mb-4 text-white">
              <h3 className="font-bold text-lg">Email:</h3>
              <p>{item.email}</p>
            </div>

            <div className="mb-4 text-white">
              <h3 className="font-bold text-lg">Address:</h3>
              <p>{item.address.suite}, {item.address.street}, {item.address.city}</p>
              <p>{item.address.zipcode}</p>
            </div>

            <div className="mb-4 text-white">
              <h3 className="font-bold text-lg">Geolocation:</h3>
              <p>Latitude: {item.address.geo.lat}</p>
              <p>Longitude: {item.address.geo.lng}</p>
            </div>

            <div className="text-center mt-4">
              <button className="bg-indigo-800 hover:bg-indigo-900 text-white px-4 py-2 rounded-full transition duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))
      }


     </div>
     {/* product search */}
     <div className='w-[600px] p-10 bg-green-950 mx-auto mb-20 rounded-2xl flex flex-col items-center pt-5'>
        <h1 className='text-[24px] text-white font-sans font-bold'>Product Search</h1>
        <form className='flex flex-col gap-4 items-center'>
          <input type="text" placeholder="Search for products..." className='w-[300px] h-[40px] border-2 border-white rounded-lg px-4 py-2 mt-5 outline-none' />
          <button type="submit" className='w-[100px] h-[40px] bg-indigo-800 hover:bg-indigo-900 text-white px-4 py-2 rounded-lg transition duration-300 mt-5'>Search</button>
        </form>
     </div>
    </>
  );
}

export default App;
