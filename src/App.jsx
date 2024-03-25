import { useState } from 'react'
import phrases from './utils/phrases.json';

function App(prop) {

  /** Colocamos un fondo inicial */
  document.querySelector('body').style.backgroundImage = 'url("../assets/backgrounds/fondo' + (Math.floor(Math.random() * 4) + 1) + '.jpg")';

  /** Declaramos un HOOK */
  let [phrase, setPhrase] = useState();
  let [author, setAuthor] = useState();

  /** Colocamos una frase inicial */
  if(phrase == undefined){
    phrase = phrases[prop.initIndex].phrase;
    author = phrases[prop.initIndex].author;
  }

  /** Comportamiento del HOOK */
  const handlePhrase = () => {
    /** Cambiamos la frase */
    let index = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[index].phrase);
    setAuthor(phrases[index].author);

    /** Cambiamos el fondo */
    document.querySelector('body').style.backgroundImage = 'url("../assets/backgrounds/fondo' + (Math.floor(Math.random() * 4) + 1) + '.jpg")';
  }

  return (
    <>
    <div className='component__container'>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <div className='phrase__container'>
        <p className='phrase'>{phrase}</p> {/** Hacemos el HOOK */}
        <p className='author'>{author}</p> {/** Hacemos el HOOK */}
      </div>
      <button onClick={handlePhrase}>Ver otro</button>
    </div>
    </>
  )
}

export default App
