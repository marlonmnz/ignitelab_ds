import './styles/global.css';

export function App() {

  return (
    <>
      <h1 className='font-bold text-5xl text-violet-500'>Olá Mundo!</h1>

      <button className='bg-violet-500 font-medium px-4 py-2 text-white rounded hover:bg-violet-600 cursor-pointer transition-all'>
        Enviar
      </button>
    </>
  )
}
