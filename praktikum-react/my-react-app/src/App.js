import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nama" />
      <input type="number" value={age} onChange={handleAgeChange} placeholder="Umur" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
} 

function Main() {
  return (
    <main>
      <h2>Selamat datang di aplikasi React saya.</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
} 

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Indra" />
      <Counter />
      <Example />
      <Footer />
    </div>
  );
}

export default App;