import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img src='logo.png' alt='Logo' className='logo' />
      </header>
      <div className='content'>
        <nav className='sidebar'>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
        <main className='main-content'>
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </main>
      </div>
      <footer className='footer'>Footer Text</footer>
    </div>
  )
}

export default App
