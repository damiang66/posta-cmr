
import { Aside } from "./componentes/Aside"
import { Footer } from "./componentes/Footer"
import { Header } from "./componentes/Header"
import { Rutas } from "./componentes/Rutas"


export const App=()=>{
  return(<>
      <Header />
      <Aside />
 <Rutas></Rutas>
  <Footer/>
  </>)
}
