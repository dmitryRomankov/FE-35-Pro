import React, { useState } from "react";
import { Button } from "./components/Button";
import { Welcome } from "./pages/Welcome";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <Form>
      <Input label="Title" />
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>
  );
}

export default App;
