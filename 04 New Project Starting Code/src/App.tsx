import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import InputWithRef from "./components/InputWithRef";
import Form, {type FormHandle} from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null)

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear()
  };
  return (
    <main>
      <Container el="button" as={Button}>
        Click me
      </Container>
      <Form ref={customFormRef} onSave={handleSave}>
        <InputWithRef id="name" label="Your name" type="text" ref={inputRef} />
        <Input id="age" label="Your age" type="number" />

        <Button el="button">A button</Button>
      </Form>
    </main>
  );
}

export default App;
