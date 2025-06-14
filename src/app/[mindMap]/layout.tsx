import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Mapa Mental",
    template: "%s | Mapa Mental"
  }
};

export default function MindMapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}