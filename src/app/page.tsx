
'use client'
import { useState, useRef, useEffect} from 'react';

export default function MindMap() {
  const [expanded, setExpanded]= useState<number | null>(null);
  const centralNodeRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedDefinition, setSelectedDefinition] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Actualizar dimensiones cuando el componente se monta
    if (centralNodeRef.current) {
      const rect = centralNodeRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height
      });
    }

     // Cerrar modal al hacer clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedDefinition(null);
        setExpanded(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, []);

  

    // Datos para los nodos del mapa mental
  const nodes = [
    { id: 1, text: "Relación: Hombre-Conocimiento-Realidad" },
    { id: 2, text: "Proceso de Adquisición del Conocimiento" },
    { id: 3, text: "Proceso de Construcción de la Ciencia" },
    { id: 4, text: "Definición y Características de la Ciencia" },
    { id: 5, text: "Procesos de Construcción" },
    { id: 6, text: "Clasificación de las Ciencias" },
    { id: 7, text: "Definición de Métodos y Técnicas" },
    { id: 8, text: "Tipos de Métodos: No Científicos, Lógicos, y Científicos" },
    { id: 9, text: "Características, Etapas y Reglas de Método Científico" },
    { id: 10, text: "La investigación y el investigador" },
    { id: 11, text: "Definición y Características de la Investigación" },
    { id: 12, text: "Características del Investigador" },
    { id: 13, text: "Obstáculos de la Investigación" },
    { id: 14, text: "Tipos de Conocimiento" }
  ];

  const definitionsNode = [

    {nodeId:1, definitionId:1, text:"El ser humano pretende la explicacion de todo lo que lo rodea, a diferencia de los animales, la finalidad es la manera en que el hombre pretende abordarla, no solo para explicarla sino para transformarla en su beneficio.", li:[]},
    {nodeId:2, definicionId:2, text:"Tambien llamado proceso del pensamiento. El conocimiento es un proceso de interaccion sujeto-objeto y sociedad. El objeto cobra sentido cuando el sujeto mediante su practica se pone en contacto con el. Comunmente interactuas con una infinidad de objetos, tienen sentido para ti en cuanto les das uso, esto es, actuas sobre ellos.", li:[]},
    {nodeId:3, definicionId:3, text:"La ciencia en construccion, una analogía de un edificio como paradigma del modelo cientifico con las etapas y conceptos que maneja kuhn en su libro de las revoluciones cientificas, como se va construyendo la ciencia, a traves de un ciclo operativo en 4 tiempos:",li:[{1:"Aceptacion del paradigma"},{2:"El desarrollo de la ciencia"},{3:"El advenimiento de la crisis"},{4:"El colapso de la revolucion cientifica"}]},
    {nodeId:4, definicionId:4, text:"La ciencia es el conjunto de conocimientos obtenidos mediante la observacion y el razonamiento de los que se deducen principios y leyes generales y las caracteristicas que definen a la ciencia son:",li:[{1:"Factica"},{2:"Analitica"},{3:"Especializada"},{4:"Clara y precisa"},{5:"Empirica"},{6:"Metodica"},{7:"Sistematica"},{8:"Explicativa"},{9:"Predictiva"}]},
    {nodeId:5, definicionId:5, text:"Inicia con la identificacion a traves de la observacion, se describe el proceso, se recopilan los aspectos del problema y por ultimo se formula un hipotesis, esto se divide en 4 momentos:",li:[{1:"Logico"},{2:"Metodologico"},{3:"Tecnico"},{4:"Teorico"}]},
    {nodeId:6, definicionId:6, text:"Existen distintas tipologias de ciencias, se presentaran aqui las mas comunes:",li:[{1:"Ciencias Teoricas y Practicas"},{2:"Formales y Factuales"},{3:"Puras y Aplicadas"},{4:"Inductivas"},{5:"Inductivas"},{6:"Deductivas"},{7:"Inductivo-Deductivas"}]},
    {nodeId:7, definicionId:7, text:"Los metodos y las tecnicas se definen de la siguiente manera:", li:[{1:"Metodos", def:"Palabra de origen griego methoodos (camino o via), y se refiere al medio usado para llegar a un fin, si significado señala el camino que conduce a un lugar"},{2:"Tecnica", def:"Es el conjunto de procedimientos de los recursos de los que se vale la ciencia para llegar a su fin"}]},
    {nodeId:8, definicionId:8, text:"Estas definiciones son las siguientes", li:[{1:"No cientificos:",def:"Se define como conocimiento comun, de sentido comun u ordinario en el sujeto"},{2:"Logico",def:"Consiste en intuir de la semejanzas de algunas caracteristicas cuya causas son ya conocidos, la probabilidad de que las caracteristicas restantes, sean tambien semejantes"},{3:"Cientificas",def:"Es un proceso que tiene como finalidad el establecimiento de relaciones entre echos para enunciar leyes que fundamenten el funcionamiento del mundo."}]},
    {nodeId:9, definicionId:9, text:"Este punto se divide en lo siguiente", li:[{1:"Caracteristicas", def:"Es factico. Trasciende los echos. Verificacion empirica. Autocorrectivo. Progresivo. Es general"},{2:"Etapas", def:"Observacion. Planteamiento del problema. Hipotesis. Verificacion de la hipotesis. Elaboracion de conclusiones"},{3:"Reglas", def:"Formular el problema. Conjeturas bien fundamentadas. Contrastar hipotesis. Hipotesis siempre en duda. Duda factica."}]},
    {nodeId:10, definicionId:10, text:"Estos conceptos se definen de la siguiente manera", li:[{1:"Investigacion", def:"Es considerada una actividad humana, orientada a la obtencion de nuevos conocimientos y su aplicacion y su aplicacion para la solucion a problemas o interrogantes."},{2:"Investigador",def:"Es alguien que lleva a cabo o que participa en una investigacion, o sea, que lleva adelante un proyecto orientado a la busqueda de conocimiento y al esclarecimiento de echos y relaciones."}]},
    {nodeId:11, definicioId:11, text:"Una investigacion es un proceso sistematico organizado y objetivo cuyo proposito es responder a una pregunta o hipotesis y asi aumentar el conocimiento y la informacion sobre algo desconocido, se caracterisa por ser:", li:[{1:"Empirica"},{2:"Sistematica"},{3:"Controlada"},{4:"Hipotesis"}]},
    {nodeId:12, definicionId:12, text:"Entre las cualidades con las que debe contar un investigador , ademas de cierto dominio de la materia debe tener las siguientes caracteristicas.", li:[{1:"Actitud cognositiva"},{2:"Actitud"},{3:"Moral"},{4:"Actitud Reflexiva"},{5:"Actitud Objetiva"},{6:"Anilidad en el manejo de metodos y tecnicas"},{7:"Ordenado"},{8:"Perseverante"}]},
    {nodeId:13, definicionId:13, text:"Al realizar un trabajo de investigacion se puede presentar diversos obstaculos que pueden retrasar su avance o conclusion. Por lo general, esos obstaculos pueden ser de caracter metodologico, en donde el investigador se desvie del objetivo principal a desarrollar de ahi la importancia que se tenga en saber cual es el objetivo y los especificos, asi como la delimitacion temporal y espacial del trabajo, pues lo contrario llevaria a desarrollar temas que no se ajustan a dichos objetivos."},
    {nodeId:15, definicionId:15, text:"Existen varios tipos de conocimiento", li:[{1:"Cientifico"},{2:"Vulgar"},{3:"Filosofico-Cientifico"},{4:"Empirico"},{5:"Filosofico-empirico"},{6:"Filosofico-Teologico"},{7:"Filosofico-Intuitivo"},{8:"Filosofico"},{9:"Declarativo"},{10:"Explicito"},{11:"Tactico"}]},

  ];

  const handleNodeClick = (nodeId: number) => {
    const definition = definitionsNode.find(def => def.nodeId === nodeId);
    setSelectedDefinition(definition);
    setExpanded(nodeId === expanded ? null : nodeId);
  };

  const closeModal = () => {
    setSelectedDefinition(null);
    setExpanded(null);
  };


  return (
    <div className="flex justify-center items-center">
       {/* Nodo central */}
        <div 
          ref={centralNodeRef}
          className="absolute border-2 border-dashed rounded p-4 w-72 text-center bg-white shadow-md z-10 cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
            Conceptos Básicos de Fundamentos de Investigación
        </div>

        {/* Contenedor SVG para las flechas */}
        <svg className="absolute w-full h-full pointer-events-none z-0">
          {nodes.map((node, index) => {
            const angle = (index * 360 / nodes.length) * (Math.PI / 180);
            const radius = 32;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            // Punto final de la flecha (centro del nodo periférico)
            const endX = 50 + x * 0.8; // Ajusta estos valores según tu diseño
            const endY = 50 + y * 1.2;
            
            return (
              <line
                key={`line-${node.id}`}
                x1="50%" 
                y1="50%"
                x2={endX + '%'}
                y2={endY + '%'}
                stroke="#4a5568"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              );
            })}
          
          {/* Definición del marcador de flecha */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#4a5568" />
            </marker>
          </defs>
        </svg>

        {/* Nodos alrededor */}
        {nodes.map((node, index) => {
           const angle = (index * 360 / nodes.length) * (Math.PI / 180);
           const radius = 32; // Tailwind usa rem (1rem = 16px)
           const x = radius * Math.cos(angle);
           const y = radius * Math.sin(angle);

        return (
          <div
            key={node.id}
            className={`absolute border border-dashed rounded p-3 w-48 text-center bg-white shadow-sm cursor-pointer transition-all hover:scale-110 hover:shadow-md ${
              expanded === node.id ? 'w-64 scale-125 bg-blue-50 border-blue-400 z-20' : ''
            }`}
            style={{
              transform: `translate(calc(10% + ${x}rem), calc(20% + ${y}em)`
            }}
            onClick={() => handleNodeClick(node.id)}
          >
            {node.text}
          </div>
        );
      })}

      {/* Modal de información */}
      {selectedDefinition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div 
            ref={modalRef}
            className="relative bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-xl font-bold mb-4">
              {nodes.find(n => n.id === selectedDefinition.nodeId)?.text}
            </h2>
            
            <p className="mb-4">{selectedDefinition.text}</p>
            
            {selectedDefinition.li && selectedDefinition.li.length > 0 && (
              <ul className="space-y-2">
                {selectedDefinition.li.map((item: any, idx: number) => (
                  <li key={idx} className="ml-4">
                    {typeof item === 'object' ? (
                      <>
                        <span className="font-semibold">{Object.keys(item)[0]}:</span>
                        {'def' in item && <span> {item.def}</span>}
                        {!('def' in item) && <span> {Object.values(item)[0]}</span>}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}