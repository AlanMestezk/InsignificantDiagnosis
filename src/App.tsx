import { Diagnostic } from "./components/diagnostic"
import { HeaderApp  } from "./components/header"

function App() {


  return (
    <> 
      <header>
          <HeaderApp/>
      </header>

      <main>
         <Diagnostic/>
      </main>
    </>
  )
}

export default App
