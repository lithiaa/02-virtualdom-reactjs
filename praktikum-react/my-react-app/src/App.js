import React from 'react';
import Counter from './Counter';
import Greeting from './Greeting';

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
      <Footer />
    </div>
  );
}

export default App;