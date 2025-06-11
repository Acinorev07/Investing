//src/app/investigacion/components/sidePanel.tsx

'use client';
// import useScrollSpy from '@/app/hooks/useScrollSpy';
import { Dispatch, SetStateAction } from 'react';

type SidePanelProps= {
  isActive: boolean;
  setIsActive:  Dispatch<SetStateAction<boolean>>;
}

export default function SidePanel({setIsActive}:SidePanelProps) {

    // useScrollSpy();
 

  const sections = [
    { id: 'seccion1', title: 'Etapa 1: Preparación' },
    { id: 'seccion2', title: 'Etapa 2: Ejecución' },
    { id: 'seccion3', title: 'Etapa 3: Procesamiento' },
    { id: 'seccion4', title: 'Etapa 4: Interpretación de resultados' },
    { id: 'seccion5', title: 'Etapa 5: Conclusiones' }
  ];

  return (
    <>
     <aside className="p-4 bg-white shadow-lg lg:shadow-none">
        <nav className="flex flex-col space-y-3">
          {sections.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              onClick={()=> setIsActive(false)}
              className="px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}