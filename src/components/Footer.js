import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [date, setDate] = useState('2020');

  useEffect(() => {
    const year = new Date().getFullYear();
    setDate(year);
  }, []);

  return (
    <footer className="bg-black small text-center text-white-50">
      <div className="container">Copyright &copy; Rebeca Guedes {date}</div>
    </footer>
  );
}
