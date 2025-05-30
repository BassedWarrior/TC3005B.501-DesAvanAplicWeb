import Class9Example from "./Class9Example.tsx";
import Button from "./components/Button.tsx";
import { UserProvider } from "./components/UserContext.tsx";
import "./Class9.css"

function Class9() {
  return (
    <>
      <div>
        <h1>Menu</h1>
        <div>
          <Button label="Main Page" onClick={() => document.location= "/"} />
          <Button label="Milestone1" onClick={() => document.location = "/src/class1/A01027983/"} />
          <Button label="Milestone2" onClick={() => document.location = "/src/class4/A01027983_and_A01784875/"} />
          <Button label="Milestone3" onClick={() => document.location = "/src/class8/A01027983_and_A01784875/"} />
          <Button label="Class9" />
        </div>
      </div>
      <h1>Class 9 Example A01027983 and A01784875</h1>
      <UserProvider>
        <Class9Example />
      </UserProvider>
    </>
  )
}

export default Class9;
