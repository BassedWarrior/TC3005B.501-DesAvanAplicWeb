import Class10Example from "./Class10Example.tsx";
import Button from "./components/Button.tsx";
import { UserProvider } from "./components/userContext.tsx";
import "./Class10.css"

function Class10() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Class7" />
          <Button label="Class8" onClick={() => document.location = "/src/class8/A01027983_and_A01784875/"} />
          <Button label="Milestone4" onClick={() => document.location = "/src/class9/A01027983_and_A01784875/"} />
        </div>
      </div>
      <h1>Class 10 Example A01027983 and A01784875</h1>
      <UserProvider>
        <Class10Example />
      </UserProvider>
    </>
  )
}

export default Class10;
