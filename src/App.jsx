import { Header } from "./components/Header"
import { News } from './components/News'

export function App() {
  return (
    <>
      <Header />

      {/* title="Incendio Parque do Cocó"  */}
      <News 
        author="Carlos"
        content="lorem ipsum" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
      <News 
        title="Noticia 2" 
        author="Drumond" 
        content="dolor sit amet" 
      />
    </>
  )
}