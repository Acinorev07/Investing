// src/app/investigacion/components/sidePanel.tsx

'use client';
import { Dispatch, SetStateAction } from 'react';

type SidePanelProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function SidePanel({ setIsActive }: SidePanelProps) {
  const sections = [
    { 
      id: 'seccion1', 
      title: 'Etapa 1: Preparación',
      subsections: [
        { id: 'titulo-proyecto', title: 'Título del Proyecto' },
        { id: 'resumen', title: 'Resumen' },
        { id: 'palabras-clave', title: 'Palabras clave' },
        { id: 'justificacion', title: 'Justificación' },
        { id: 'antecedentes', title: 'Antecedentes' },
        { id: 'poblacion-investigacion', title: 'Población' },
        { id: 'objetivos', title: 'Objetivos' },
        { id: 'metodologia', title: 'Metodología' }
      ]
    },
    { 
      id: 'seccion2', 
      title: 'Etapa 2: Ejecución',
      subsections: [
        { id: 'registro-busqueda', title: 'Registro de Búsqueda' },
        { id: 'recoleccion-informacion', title: 'Recolección de Información' }
      ]
    },
    { 
      id: 'seccion3', 
      title: 'Etapa 3: Procesamiento',
      subsections: [] // Puedes añadir subsections cuando las definas
    },
    { 
      id: 'seccion4', 
      title: 'Etapa 4: Interpretación',
      subsections: [] // Puedes añadir subsections cuando las definas
    },
    { 
      id: 'seccion5', 
      title: 'Etapa 5: Conclusiones',
      subsections: [] // Puedes añadir subsections cuando las definas
    }
  ];

  return (
    <aside className="p-4 bg-white shadow-lg lg:shadow-none h-full overflow-y-auto">
      <nav className="flex flex-col space-y-1">
        {sections.map((section) => (
          <div key={section.id} className="mb-2">
            <a 
              href={`#${section.id}`}
              onClick={() => setIsActive(false)}
              className="px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded transition block"
            >
              {section.title}
            </a>
            
            {section.subsections.length > 0 && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                {section.subsections.map((subsection) => (
                  <a
                    key={subsection.id}
                    href={`#${subsection.id}`}
                    onClick={() => setIsActive(false)}
                    className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded transition block"
                  >
                    {subsection.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}