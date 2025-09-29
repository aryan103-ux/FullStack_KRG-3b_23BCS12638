import React, { useState, useEffect } from 'react';

export default function SimpleForm() {
  const [data, setData] = useState({ name: '', email: '' });

  const submit = e => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {}, [data]);

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
      <input name="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
      <button>Submit</button>
    </form>
  );
}