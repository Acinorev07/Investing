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

                   <section id="seccion1" className="p-8 min-h-screen bg-white rounded-lg shadow-md">

                    {/* Título del Proyecto */}
                    <h2 id="titulo-proyecto" className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">
                        ¿Qué factores estratégicos y operacionales determinan que los emprendimientos de comercio electrónicos en Colombia superen los tres primeros años de operación?
                    </h2>

                    {/* Resumen */}
                    <div className="mb-8 bg-blue-50 p-6 rounded-lg">

                        <h3 id="resumen" className="text-2xl font-bold mb-4 text-blue-800">
                        Resumen
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                        El comercio electrónico en Colombia ha crecido significativamente, pero muchos emprendimientos no superan los tres primeros años de operación, etapa crítica conocida como <q className="font-semibold">valle de la muerte</q>. 
                        Factores como la adopción tecnológica, gestión operacional, acceso a financiación y competencia inciden en esta problemática, evidenciando una brecha entre el potencial del e-commerce y la sostenibilidad real de los negocios digitales en el país. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                        El estudio adoptará un enfoque mixto Cuantitativo con el Análisis econométrico de datos secundarios (registros empresariales y encuestas como la ENDTIC) y Cualitativo con el Estudios de caso de 20 emprendimientos (10 exitosos y 10 fracasados) mediante entrevistas a fundadores y análisis documental.
                        Se utilizará el modelo <q className="font-semibold">Diferencias en Diferencias</q> para medir impacto de variables clave como inversión en tecnología y gestión de capital humano.
                        </p>
                    </div>

                    {/* Palabras clave */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                        
                        <h3 id="palabras-clave" className="text-2xl font-bold mb-4 text-gray-800">
                        Palabras clave
                        </h3>

                        <div className="flex flex-wrap gap-2">
                        {["Comercio electrónico", "Colombia", "Empresas", "Mercado", "Marketing", "Crecimiento empresarial", "E-commerce", "Internet", "Barreras"].map((word, index) => (
                            <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                            {word}
                            </span>
                        ))}
                        </div>
                    </div>

                    {/* Justificación */}
                    <div className="mb-8 bg-green-50 p-6 rounded-lg">

                        <h3 id="justificacion" className="text-2xl font-bold mb-4 text-green-800">
                        Justificación de la Investigación
                        </h3>

                        <p className="text-gray-700 mb-4">
                        Esta investigación sobre los factores que determinan la supervivencia de emprendimientos de comercio electrónico 
                        en Colombia durante los primeros tres años se justifica desde tres dimensiones clave: <strong>relevancia académica, impacto socioeconómico y aplicabilidad práctica</strong>, 
                        acorde con las normas para proyectos investigativos.
                        </p>
                        
                        <div className="space-y-4">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-green-700">Justificación Teórica</h4>
                            <p className="text-gray-700">
                            El estudio contribuye a cerrar brechas en la literatura existente sobre emprendimiento digital en contextos emergentes. Mientras investigaciones previas (ej. <em>Evolución del comercio electrónico en Colombia</em>)
                            analizan tendencias macro, este proyecto profundiza en factores críticos microempresariales no explorados sistemáticamente, como la correlación entre adopción tecnológica y resilencia operativa.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-green-700">Justificación Práctica</h4>
                            <p className="text-gray-700 mb-2">
                            Según la Cámara Colombiana de Comercio Electrónico, el 60% de emprendimientos digitales fracasan antes del tercer año. Esta investigación proveerá:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Herramientas concretas:</strong> Guía de mejores prácticas validadas con casos reales.</li>
                            <li><strong>Indicadores medibles:</strong> Índice de factores de supervivencia aplicable a diagnósticos rápidos.</li>
                            <li><strong>Protocolos de acción:</strong> Recomendaciones para entidades de apoyo (Bancóldex, SENA) en formación de competencias digitales.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-green-700">Justificación Metodológica</h4>
                            <p className="text-gray-700 mb-2">
                            La combinación de métodos mixtos (<strong>econometría + estudios de caso</strong>) permite:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Generalizar</strong> patrones a partir de datos cuantitativos (ej. impacto de las TIC en ventas, como señala el análisis de 2.177 pymes).</li>
                            <li><strong>Contextualizar</strong> hallazgos mediante testimonios de fundadores, identificando variables cualitativas (ej. toma de decisiones bajo incertidumbre).</li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    {/* Antecedentes */}
                    <div className="mb-8 bg-purple-50 p-6 rounded-lg">

                        <h3 id="antecedentes" className="text-2xl font-bold mb-4 text-purple-800">
                        Antecedentes o Estado Actual de la Temática
                        </h3>
                        <p className="text-gray-700 mb-4">
                        El comercio electrónico en Colombia ha evolucionado significativamente en las últimas décadas, marcado por hitos tecnológicos, cambios regulatorios y adaptaciones empresariales. 
                        A continuación, se presenta una síntesis de su desarrollo, basada en la revisión documental realizada:
                        </p>
                        
                        <div className="space-y-6">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">1. Evolución Histórica del Comercio Electrónico</h4>
                            <p className="text-gray-700 mb-3">
                            El e-commerce en Colombia ha transitado por tres etapas clave, alineadas con la tendencia global (Laudon & Guercio, 2012):
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                            <li><strong>1995-2000 (Innovación):</strong> Surgimiento de plataformas básicas como catálogos digitales, impulsado por la masificación de internet.</li>
                            <li><strong>2001-2006 (Consolidación):</strong> Crisis del <q>estallido puntocom</q> y posterior ajuste, con la llegada de modelos sostenibles (ej. MercadoLibre en 1999).</li>
                            <li><strong>2006-Presente (Reinvención):</strong> Integración de redes sociales, móviles y pagos digitales, ampliando el alcance del e-commerce (Chaffey, 2009).</li>
                            </ol>
                            <p className="text-gray-700 mt-3">
                            En Colombia, este proceso fue más lento. Según Torres (2009), la adopción inicial se centró en <strong>B2B</strong> (empresa-empresa), mientras que el <strong>B2C</strong> (empresa-consumidor) ganó fuerza post-2010 con plataformas como Linio y Falabella.com.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">2. Crecimiento y Penetración Actual</h4>
                            <p className="text-gray-700 mb-3">
                            Datos recientes destacan:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                            <li>Un incremento del <strong>70% en ingresos</strong> del sector retail digital (2016-2023), con <strong>175 millones de transacciones anuales</strong> (Laudon & Guercio, 2018).</li>
                            <li>El <strong>e-commerce aporta el 4.2% al PIB colombiano</strong> (CCCE, 2023), con sectores líderes como moda (32%), electrónicos (28%) y alimentos (18%).</li>
                            </ul>
                            <p className="text-gray-700 mb-2">
                            Sin embargo, persisten desafíos:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Barreras regulatorias:</strong> Complejidad en normas tributarias para transacciones digitales.</li>
                            <li><strong>Desconfianza del consumidor:</strong> Solo el 35% de usuarios confía plenamente en pagos en línea (Sánchez & Sánchez, 2017).</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">3. Investigaciones Previas y Brechas Identificadas</h4>
                            <p className="text-gray-700 mb-2">
                            La literatura existente se ha enfocado en:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                            <li><strong>Aspectos legales:</strong> Normativas como la Ley 527 de 1999 (Torres, 2009) y vacíos tributarios (OCDE, 2002).</li>
                            <li><strong>Casos locales:</strong> Impacto en pymes (Montaño & Montoya, 2010) y percepción de riesgo (Sánchez & Sánchez, 2017).</li>
                            </ul>
                            <p className="text-gray-700 mb-2 font-semibold">
                            Brechas identificadas:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Falta de estudios sobre <strong>factores críticos de supervivencia</strong> en emprendimientos digitales.</li>
                            <li>Limitado análisis de <strong>estrategias operacionales</strong> (ej. logística inversa) en contextos colombianos.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-purple-700">4. Tendencias Emergentes (2020-2023)</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Tecnologías disruptivas:</strong> Uso de IA para servicio al cliente y logística 4.0 en empresas como Rappi.</li>
                            <li><strong>Nuevos modelos:</strong> Crecimiento del social commerce (ventas via redes sociales), que representa el 25% del e-commerce nacional.</li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    {/* Problema y Pregunta */}
                    <div className="mb-8 bg-yellow-50 p-6 rounded-lg">
                        <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                            <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900 bg-gray-100">Problema Identificado</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Muchas empresas de comercio electronico no triunfan y muy pocas lo hacen, cual es su estrategia</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900 bg-gray-100">Pregunta de Identificación</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">¿Qué factores estratégicos y operacionales determinan que los emprendimientos de comercio electrónicos en Colombia superen los tres primeros años de operación?</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    {/* Población */}
                    <div className="mb-8 bg-blue-50 p-6 rounded-lg">

                        <h3 id="poblacion-investigacion" className="text-2xl font-bold mb-4 text-blue-800">
                        Población o Conjunto de Elementos Objeto de la Investigación
                        </h3>

                        <div className="space-y-4">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-blue-700">Unidad de Análisis</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Emprendimientos colombianos de comercio electrónico (B2C y B2B)</strong> que hayan operado entre <strong>2020 y 2023.</strong></li>
                            <li><strong>Enfoque en etapas tempranas:</strong> Empresas con <strong>1 a 3 años de operación</strong> al momento del estudio.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-blue-700">Criterios de Inclusión</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Tamaño:</strong> Micro, pequeñas y medianas empresas (mipymes) registradas en cámaras de comercio.</li>
                            <li><strong>Sector:</strong> Comercio electrónico puro (ej. tiendas online) o híbrido (físico + digital).</li>
                            <li><strong>Ubicación geográfica:</strong> Principalmente <strong>Bogotá, Medellín y Cali</strong> (ciudades con mayor densidad de emprendimientos digitales según la CCCE).</li>
                            <li><strong>Facturación:</strong> Empresas con ventas anuales entre 50 y 500 millones de COP (rango típico de supervivencia crítica).</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-blue-700">Subpoblaciones de Interés</h4>
                            <p className="text-gray-700 mb-2">Para análisis comparativo, se segmentará en:</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Grupo A:</strong> Emprendimientos que superaron los 3 años (casos de éxito).</li>
                            <li><strong>Grupo B:</strong> Emprendimientos que fracasaron antes de 3 años (casos de fracaso).</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-blue-700">Fuentes de Identificación</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Bases de datos institucionales:</strong> Registros de la <strong>Cámara Colombiana de Comercio Electrónico (CCCE)</strong> y <strong>Confecámaras.</strong></li>
                            <li><strong>Plataformas digitales:</strong> Directorios como <strong>eCommerce Institute Latam</strong> y <strong>Apps.co (MinTIC)</strong>.</li>
                            <li><strong>Redes de emprendimiento:</strong> Comunidades como <strong>HubBOG</strong> y <strong>Ruta N</strong></li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                            <h4 className="text-xl font-bold mb-2 text-blue-700">Tamaño Estimado</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li><strong>Población total:</strong> Aprox. <strong>1,200 emprendimientos</strong> que cumplen los criterios (según proyecciones de la CCCE, 2023).</li>
                            <li><strong>Muestra representativa:</strong> 120 empresas (10% del total), seleccionadas mediante muestreo estratificado por sector y ubicación.</li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    {/* Objetivos */}
                    <div className="mb-8 bg-green-50 p-6 rounded-lg">

                        <h3 id="objetivos" className="text-2xl font-bold mb-4 text-green-800">
                        Objetivos
                        </h3>

                        <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                        <h4 className="text-xl font-bold mb-2 text-green-700">Objetivo general</h4>
                        <p className="text-gray-700 pl-4 border-l-4 border-green-300">
                            Identificar los factores estratégicos y operacionales que determinan la supervivencia de emprendimientos de comercio electrónico en Colombia durante los primeros tres años de operación, mediante un análisis mixto (cuantitativo-cualitativo) que permita desarrollar un marco de referencia para mejorar la tasa de éxito en el sector.
                        </p>
                        </div>

                        <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                            <caption className="text-lg font-bold mb-2 text-gray-800 text-left">Objetivos específicos</caption>
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Objetivos</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actividades</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Recursos</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Resultados</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Producto</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {/* Objetivo 1 */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-normal font-medium text-gray-900">Evaluar impacto de variables tecnológicas y financieras</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Recolección de datos ENDTIC y registros empresariales</li>
                                    <li>Aplicación modelo econométrico Diferencias en Diferencias</li>
                                    <li>Validación resultados con expertos sectoriales</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Bases de datos CCCE y Confecámaras</li>
                                    <li>Software Stata/R para análisis</li>
                                    <li>Asesoría econometrista</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Modelo validado que identifica variables con mayor impacto en supervivencia (p &lt; 0.05)</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Informe técnico con correlaciones significativas</td>
                            </tr>
                            
                            {/* Objetivo 2 */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-normal font-medium text-gray-900">Caracterizar estrategias operacionales</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Selección casos exitosos/fracasados</li>
                                    <li>Entrevistas semiestructuradas a fundadores</li>
                                    <li>Análisis documental (informes, KPIs)</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Guía de entrevista validada</li>
                                    <li>Grabadoras y software de transcripción</li>
                                    <li>Plataformas de análisis cualitativo (NVivo)</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Matriz comparativa de mejores prácticas operacionales</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Catálogo de casos con lecciones aprendidas</td>
                            </tr>
                            
                            {/* Objetivo 3 */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-normal font-medium text-gray-900">Diseñar índice de resiliencia</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Identificación variables críticas</li>
                                    <li>Construcción algoritmo de ponderación</li>
                                    <li>Validación con muestra piloto</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resultados objetivos 1 y 2</li>
                                    <li>Expertos en modelos predictivos</li>
                                    <li>Plataforma de simulación</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Índice con ≥80% de precisión predictiva</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Calculadora digital de resiliencia para emprendedores</td>
                            </tr>
                            
                            {/* Objetivo 4 */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-normal font-medium text-gray-900">Proponer recomendaciones</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Talleres con stakeholders</li>
                                    <li>Revisión políticas internacionales</li>
                                    <li>Priorización de intervenciones</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resultados investigación</li>
                                    <li>Espacios de cocreación</li>
                                    <li>Plantillas de políticas públicas</li>
                                </ul>
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Paquete de intervenciones priorizadas</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">Guía práctica para emprendedores + White paper para policymakers</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    {/* Metodología */}
                    <div className="mb-8 bg-indigo-50 p-6 rounded-lg">

                        <h3 id="metodologia" className="text-2xl font-bold mb-4 text-green-800">
                        Metodologia
                        </h3>

                        <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Componente</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Descripción</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {/* Enfoque */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Enfoque de la investigación</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <strong>Enfoque mixto:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li><strong>Cuantitativo:</strong> Análisis econométrico de datos secundarios (registros empresariales, ENDTIC)</li>
                                    <li><strong>Cualitativo:</strong> Estudios de caso de 20 emprendimientos (10 exitosos vs 10 fracasados)</li>
                                </ul>
                                </td>
                            </tr>
                            
                            {/* Nivel */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Nivel de investigación</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <strong>Descriptivo-Explicativo:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Describe factores críticos de supervivencia</li>
                                    <li>Explica relaciones entre variables estratégicas y éxito empresarial</li>
                                    <li>Incluye elementos predictivos (índice de resiliencia)</li>
                                </ul>
                                </td>
                            </tr>
                            
                            {/* Tipo */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Tipo de investigación</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <strong>Aplicada con desarrollo tecnológico:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Genera herramientas prácticas (índice, guía)</li>
                                    <li>Desarrolla modelo predictivo validado con CCCE</li>
                                    <li>Innovación en metodología mixta para estudios de e-commerce</li>
                                </ul>
                                </td>
                            </tr>
                            
                            {/* Marco teórico */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Marco teórico</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Teoría de Recursos y Capacidades</strong> (Barney, 1991)</li>
                                    <li><strong>Modelos de Ciclo de Vida Empresarial</strong> (Greiner, 1972)</li>
                                    <li><strong>Teoría de Adopción Tecnológica</strong> (Davis, 1989)</li>
                                    <li><strong>Estudios sobre mortalidad empresarial</strong> (Torres, 2009; Montaño & Montoya, 2010)</li>
                                </ul>
                                </td>
                            </tr>
                            
                            {/* Método */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Método de investigación</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <strong>Método científico + Investigación-acción:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Observación sistemática de datos empresariales</li>
                                    <li>Formulación y verificación de hipótesis</li>
                                    <li>Validación participativa con emprendedores</li>
                                </ul>
                                </td>
                            </tr>
                            
                            {/* Metodología */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Metodología</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-blue-800">Cuantitativa:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Modelo <q>Diferencias en Diferencias</q></li>
                                        <li>Análisis de 2,177 registros de pymes</li>
                                        <li>Variables: inversión en TIC, facturación, empleo</li>
                                    </ul>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-purple-800">Cualitativa:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Estudios de caso múltiples</li>
                                        <li>Entrevistas semiestructuradas</li>
                                        <li>Análisis documental (informes, KPIs)</li>
                                    </ul>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            
                            {/* Técnicas */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Técnicas e instrumentos</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <div className="grid md:grid-cols-3 gap-3">
                                    <div className="bg-gray-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-gray-800">Recolección:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Encuestas estandarizadas</li>
                                        <li>Guías de entrevista</li>
                                        <li>Fichas documentales</li>
                                    </ul>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-gray-800">Análisis:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Estadística inferencial</li>
                                        <li>Análisis comparativo</li>
                                        <li>Triangulación metodológica</li>
                                    </ul>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-gray-800">Software:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Stata/R (econometría)</li>
                                        <li>NVivo (análisis cualitativo)</li>
                                        <li>Tableau (visualización)</li>
                                    </ul>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            
                            {/* Recursos */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Recursos requeridos</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-green-800">Humanos:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Econometrista (40 horas)</li>
                                        <li>Entrevistadores (2 personas)</li>
                                        <li>Asesor metodológico</li>
                                    </ul>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded-md">
                                    <h4 className="font-bold mb-1 text-yellow-800">Materiales:</h4>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li>Acceso a bases CCCE/Confecámaras</li>
                                        <li>Licencias software especializado</li>
                                        <li>Equipos de grabación</li>
                                    </ul>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            
                            {/* Referencias */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Referencias bibliográficas</td>
                                <td className="px-6 py-4 whitespace-normal text-gray-700 text-sm">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Laudon, K. & Guercio, M. (2018). E-commerce 2018. Pearson</li>
                                    <li>Chaffey, D. (2009). E-commerce management. Prentice Hall</li>
                                    <li>Torres, J. (2009). Comercio electrónico en Colombia. Ed. Uniandes</li>
                                    <li>CCCE. (2023). Informe anual de e-commerce en Colombia</li>
                                    <li>DANE. (2022). Encuesta Nacional de Desarrollo Digital</li>
                                </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    </section>
                    <section id="seccion2" className="p-8 min-h-screen bg-gray-50">

                        <div className="max-w-7xl mx-auto">
                            {/* Título principal */}
                            <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-2">
                            Ejecución de la Investigación
                            </h2>

                            {/* Registro de Búsqueda */}
                            <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                            <h3 id="registro-busqueda" className="text-2xl font-bold mb-6 text-blue-800">
                                Registro de Búsqueda Documental
                            </h3>
                            
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Fecha de consulta</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Base de datos</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Términos de búsqueda</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Recursos Web</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Palabras Claves</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Contenido</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Resumen</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Fila 1 - Google Académico */}
                                    <tr>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">12/06/2024</td>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">Google Académico</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="list-disc pl-5 space-y-1">
                                        <li><q>comercio electrónico Colombia</q></li>
                                        <li><q>supervivencia empresas digitales</q></li>
                                        <li><q>factores éxito e-commerce</q></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Artículos PDF, Tesis</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <div className="flex flex-wrap gap-1">
                                        {["E-commerce", "Comercio electrónico", "Colombia", "Empresas digitales", "Supervivencia empresarial", "Factores críticos", "Primeros años"].map((tag, i) => (
                                            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tag}</span>
                                        ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="space-y-2">
                                        <li><a href="https://journal.universidadean.edu.co/index.php/plou/article/view/1371" target="_blank" className="text-blue-600 hover:underline">¿Hacia dónde va el comercio electrónico en Colombia?</a></li>
                                        <li><a href="https://www.proquest.com/openview/f098bb520fa2b09c34ea661067855b94/1" target="_blank" className="text-blue-600 hover:underline">El comercio electrónico un aliado estratégico</a></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Análisis del estado actual y tendencias del e-commerce en Colombia</td>
                                    </tr>

                                    {/* Fila 2 - SciELO */}
                                    <tr>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">15/06/2024</td>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">SciELO</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="list-disc pl-5 space-y-1">
                                        <li><q>emprendimiento digital Colombia</q></li>
                                        <li><q>fracaso startups ecommerce</q></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Artículos científicos</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <div className="flex flex-wrap gap-1">
                                        {["Startups", "Fracaso empresarial", "Emprendimiento", "TIC", "Modelos de negocio"].map((tag, i) => (
                                            <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{tag}</span>
                                        ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="space-y-2">
                                        <li><a href="https://ciencia.lasalle.edu.co/server/api/core/bitstreams/570a9f02-7290-4f3e-bcd3-ecc0f6a7a287/content" target="_blank" className="text-blue-600 hover:underline">Evolución del comercio electrónico en Colombia</a></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Estudios sobre evolución histórica y tasas de fracaso</td>
                                    </tr>

                                    {/* Fila 3 - Redalyc */}
                                    <tr>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">18/06/2024</td>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">Redalyc</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="list-disc pl-5 space-y-1">
                                        <li><q>factores éxito ecommerce Colombia</q></li>
                                        <li><q>estrategias operacionales comercio electrónico</q></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Artículos, Revisiones</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <div className="flex flex-wrap gap-1">
                                        {["Éxito empresarial", "Estrategias", "Operaciones", "Logística", "Marketing digital"].map((tag, i) => (
                                            <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">{tag}</span>
                                        ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="space-y-2">
                                        <li><a href="https://repository.javeriana.edu.co/items/a7d5d4a6-2882-4d35-a7c9-bee5c82b2f65" target="_blank" className="text-blue-600 hover:underline">Barreras y retos del comercio electrónico</a></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Identificación de barreras regulatorias y operacionales</td>
                                    </tr>

                                    {/* Fila 4 - Scopus */}
                                    <tr>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">20/06/2024</td>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">Scopus</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="list-disc pl-5 space-y-1">
                                        <li><q>e-commerce survival factors</q></li>
                                        <li><q>digital entrepreneurship Colombia</q></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Artículos indexados</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <div className="flex flex-wrap gap-1">
                                        {["Supervivencia", "Factores críticos", "Emprendimiento digital", "Econometría", "Análisis cuantitativo"].map((tag, i) => (
                                            <span key={i} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{tag}</span>
                                        ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="space-y-2">
                                        <li><a href="https://dialnet.unirioja.es/servlet/articulo?codigo=7678075" target="_blank" className="text-blue-600 hover:underline">Impacto del e-commerce en ventas de pymes</a></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Estudios econométricos sobre impacto del e-commerce</td>
                                    </tr>

                                    {/* Fila 5 - Biblioteca SENA */}
                                    <tr>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">22/06/2024</td>
                                    <td className="px-4 py-3 whitespace-nowrap border border-gray-300">Biblioteca SENA</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="list-disc pl-5 space-y-1">
                                        <li><q>casos de éxito ecommerce Colombia</q></li>
                                        <li><q>gestión operacional comercio electrónico</q></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Libros, Informes técnicos</td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <div className="flex flex-wrap gap-1">
                                        {["Casos de estudio", "Gestión operacional", "Best practices", "Estudios cualitativos"].map((tag, i) => (
                                            <span key={i} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">{tag}</span>
                                        ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">
                                        <ul className="space-y-2">
                                        <li><a href="http://biblos.unilibrecucuta.edu.co/ojs/index.php/derecho/article/view/231" target="_blank" className="text-blue-600 hover:underline">Legislación tributaria e-commerce</a></li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300">Marco regulatorio y aspectos legales del e-commerce</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>

                            {/* Recolección de Información */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 id="recoleccion-informacion" className="text-2xl font-bold mb-6 text-blue-800">
                                Recolección de la Información
                            </h3>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Columna izquierda - Datos generales */}
                                <div className="space-y-6">
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="font-bold text-gray-700 mb-2">Técnica:</h4>
                                    <p className="text-gray-800">Entrevista semiestructurada</p>
                                </div>
                                
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="font-bold text-gray-700 mb-2">Tipo de instrumento:</h4>
                                    <p className="text-gray-800">Cuestionario guiado</p>
                                </div>
                                
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="font-bold text-gray-700 mb-2">Características:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                                    <li>20 preguntas divididas en 4 secciones</li>
                                    <li>Combinación de preguntas abiertas y cerradas</li>
                                    <li>Duración estimada: 30-45 minutos</li>
                                    <li>Formato digital (Google Forms) y presencial</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <h4 className="font-bold text-gray-700 mb-2">Elaborado por:</h4>
                                    <p className="text-gray-800">Fredy Leonardo Acuña Prada</p>
                                </div>
                                </div>
                                
                                {/* Columna derecha - Instrumento */}
                                <div className="bg-blue-50 p-6 rounded-md">
                                <h4 className="text-xl font-bold mb-4 text-center text-blue-800">Nombre del Instrumento</h4>
                                <p className="text-center font-medium mb-6"><q>Cuestionario sobre Factores de Supervivencia en Emprendimientos E-commerce</q></p>
                                
                                <div className="space-y-4">
                                    <div>
                                    <h5 className="font-bold text-gray-700 mb-2">Instrucciones:</h5>
                                    <p className="text-gray-800">Responda con sinceridad todas las preguntas. No hay respuestas correctas o incorrectas. La información será tratada con confidencialidad.</p>
                                    </div>
                                    
                                    <div>
                                    <h5 className="font-bold text-gray-700 mb-2">Introducción:</h5>
                                    <p className="text-gray-800">Este cuestionario busca identificar los factores clave que han permitido a su emprendimiento superar los primeros 3 años de operación. Agradecemos su tiempo y colaboración.</p>
                                    </div>
                                    
                                    <div>
                                    <h5 className="font-bold text-gray-700 mb-2">Desarrollo del instrumento:</h5>
                                    <ol className="list-decimal pl-5 space-y-3 text-gray-800">
                                        <li><strong>Datos generales:</strong> Nombre empresa, año fundación, sector, ubicación</li>
                                        <li><strong>Estrategias clave:</strong> Marketing digital, gestión de clientes, diferenciación</li>
                                        <li><strong>Operaciones:</strong> Logística, tecnología, proveedores</li>
                                        <li><strong>Finanzas:</strong> Fuentes de financiación, flujo de caja</li>
                                        <li><strong>Desafíos:</strong> Principales obstáculos superados</li>
                                    </ol>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

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