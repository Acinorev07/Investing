import Link from "next/link";


export default function Home() {


  return (
<>
       <header className="flex flex-col text-center border-2">
          <h1 className="text-2xl font-bold p-2">Investigacion</h1>
          <nav className="flex gap-2 outline-2 outline-offset-2 outline-blue-500 mb-2 ml-2 mr-2 ">
             <Link href="/">Home</Link>
          </nav>
        </header>
        <main className="relative min-h-300 overflow-auto bg-indigo-500 border-6 m-6 flex justify-center items-center">
           <div className="flex flex-col lg:flex lg:flex-row gap-8">
          <Link href="/mindMap" className="spinner-button">
            Mapa Mental
          </Link>
          <Link href="/investigacion" className="spinner-button">
            Investigación
          </Link>
        </div>
        </main>
        <footer className="border-2 ">
          Pie de la aplicación
        </footer>
</>
    
  )
}