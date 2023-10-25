import React from 'react';
import './style.css';
import { Header } from './components/index';
export default function App() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
