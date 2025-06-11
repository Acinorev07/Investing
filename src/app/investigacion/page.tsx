//src/app/investigacion/page.tsx

'use client'
import Link from "next/link";
import SidePanel from "./components/sidePanel";
import { useState } from "react";
import HamburgerIcon from "./components/HamburguerIcon";

export default function Investigacion(){

    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <header className="flex flex-col text-center border-2">
          <h1 className="text-2xl font-bold p-2">Propuesta de Investigacion Formativa</h1>
          <nav className="flex gap-2 outline-2 outline-offset-2 outline-blue-500 mb-2 ml-2 mr-2 ">
             <Link href="/">Home</Link>
             <Link href="/mindMap">Mapa Mental</Link>
             <Link href="/investigacion">Investigación</Link>
          </nav>
        </header>
        <main className="min-h-screen bg-indigo-500 border-6 m-6">
            <div className="flex flex-col lg:flex-row">
                <div className={`${isActive ? 'fixed z-50' : 'hidden'} lg:block lg:relative lg:w-1/5 lg:min-h-[calc(100vh-8rem)] border rounded-md`}>
                    <SidePanel isActive={isActive} setIsActive={setIsActive}/>
                    {/* <ol>
                        <li>
                            Etapa 1: Preparacion
                        <ol>
                            <li>Titulo del Proyecto</li>
                            <li>Resumen</li>
                            <li>Palabras Clave</li>
                            <li>Justificacion</li>
                            <li>Estado del Arte</li>
                            <li>Tabla 1: Problematicas</li>
                            <li>Poblacion o conjunto de Elementos objeto de Investigacion</li>
                            <li>Objetivo General</li>
                            <li>Tabla 2: Objetivos Especificos</li>
                            <li>Tabla 3: Investigacion</li>
                            <li>Recursos Requeridos</li>
                            <li>Referencias Bibliograficas</li>
                        </ol>
                        </li>
                        <li>
                            Etapa 2: Ejecucion
                        </li>
                        <li>
                            Etapa 3: Procesamiento
                        </li>
                        <li>
                            Etapa 4: Interpretacion de resultados
                        </li>
                        <li>
                            Etapa 5: Conclusiones
                        </li>
                    </ol> */}
                </div>
                {/* Boton hamburguesa para moviles */}
                <div className="lg:hidden fixed top-24 left-4 z-40">
                    <button 
                        className={`hamburger hamburger--collapse ${
                            isActive ? 'is-active' : ''
                        }`}
                        onClick={() => setIsActive(!isActive)}
                        >
                        <HamburgerIcon/>
                    </button>

                </div>
                    
                {/* Contenido Principal */}
                <div className="w-ful lg:w-4/5 bg-[#50d71e]">

                    <section id="seccion1" className="p-8 min-h-screen">
                        <h2 id="titulo-proyecto"className="text-3xl font-bold mb-4">
                        ¿Qué factores estratégicos y operacionales determinan que los emprendimientos de comercio electrónicos en Colombia superen los tres primeros años de operación?
                        </h2>
                        <h3 id="resumen" className="text-2xl font-bold mb-4">
                            Resumen
                        </h3>
                        <p>El comercio electrónico en Colombia ha crecido significativamente, pero muchos emprendimientos no superan los tres primeros años de operación, etapa crítica conocida como <q>valle de la muerte</q>. 
                            Factores como la adopción tecnológica, gestión operacional, acceso a financiación y competencia inciden en esta problemática, evidenciando una brecha entre el potencial del e-commerce y la sostenibilidad real de los negocios digitales en el país. 
                            Esta investigación busca identificar los factores estratégicos y operacionales que determinan la supervivencia de emprendimientos de e-commerce en Colombia durante sus primeros tres años. 
                            El objetivo es proporcionar un marco analítico que permita a nuevos emprendedores y gestores públicos diseñar intervenciones efectivas para reducir la tasa de fracaso y fortalecer el ecosistema digital colombiano. </p>
                        <br />
                        <p>
                            El estudio adoptará un enfoque mixto Cuantitativo con el Análisis econométrico de datos secundarios (registros empresariales y encuestas como la ENDTIC) y Cualitativo con el Estudios de caso de 20 emprendimientos (10 exitosos y 10 fracasados) mediante entrevistas a fundadores y análisis documental.
                            Se utilizará el modelo <q>Diferencias en Diferencias</q> para medir impacto de variables clave como inversión en tecnología y gestión de capital humano. Se espera priorizar factores críticos (ej. herramientas digitales, logística inversa), proponer un índice de resiliencia para emprendimientos digitales, 
                            también generar recomendaciones de política pública en formación empresarial y acceso a TIC y por ultimo publicar una guía práctica para emprendedores, validada por la Cámara Colombiana de Comercio Electrónico.

                        </p>
                        <br />
                        <hr /><br />

                        <h3 id="palabras-clave" className="text-2xl font-bold mb-4">
                            Palabras clave
                        </h3>
                        <p> <em>Comercio electrónico, Colombia, Empresas, Mercado, Marketing, Crecimiento empresarial, E-commerce, Internet, Barreras</em></p>
                        <br />
                        <hr /><br />
                        <h3 id="justificacion" className="text-2xl font-bold mb-4">
                            Justificación
                        </h3>
                        <p>
                            El estudio contribuye a cerrar brechas en la literatura existente sobre emprendimiento digital en contextos emergentes. Mientras investigaciones previas (ej. <em>Evolución del comercio electrónico en Colombia</em>)
                             analizan tendencias macro, este proyecto profundiza en factores críticos microempresariales no explorados sistemáticamente, como la correlación entre adopción tecnológica y resilencia operativa. Además, integra marcos teóricos dispersos
                              (teoría de recursos y capacidades, modelos de ciclo de vida) en un enfoque innovador aplicado al e-commerce.
                        </p>
                        <br /><hr /><br />

                        </section>
                    <section id="seccion2" className="p-8 min-h-screen">
                        <h2 className="text-2x1 font-bold mb-4">
                        Seccion 2
                        
                        </h2>
                            
                        </section>
                    <section id="seccion3" className="p-8 min-h-screen">
                        <h2 className="text-2x1 font-bold mb-4">
                        Seccion 3
                        
                        </h2>
                            
                        </section>
                    <section id="seccion4" className="p-8 min-h-screen">
                        <h2 className="text-2x1 font-bold mb-4">
                        Seccion 4
                        
                        </h2>
                            
                        </section>
                    <section id="seccion5" className="p-8 min-h-screen">
                        <h2 className="text-2x1 font-bold mb-4">
                        Seccion 5
                        
                        </h2>
                            
                        </section>
                </div>
           </div>
          
        </main>
        <footer className="border-2 ">
          Pie de la aplicación
        </footer>  
       </>
    );
    

}