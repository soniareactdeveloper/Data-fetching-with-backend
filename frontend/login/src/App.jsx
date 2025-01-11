import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Effect hook to fetch users (optional)
  useEffect(() => {
    axios
      .get('http://localhost:9000/api/users')
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password }; 

    try {
      const response = await axios.post('http://localhost:9000/api/login', data);
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

