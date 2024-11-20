import React from 'react';
import { Feather, Sparkles, Book, Users, Brain, ChevronRight, BookOpen, Puzzle } from 'lucide-react';

const WriticalLanding = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-orange-50/80 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Feather className="h-8 w-8 text-orange-700" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Writical</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-800">Características</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-800">Cómo funciona</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-800">Precios</a>
              <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
                Comenzar gratis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-2 bg-orange-100 rounded-full">
              <Feather className="h-12 w-12 text-orange-700" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Desbloquea tu potencial creativo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tu compañero de escritura impulsado por IA que te ayuda a superar el bloqueo creativo, 
            desarrollar personajes memorables y dar forma a tus historias
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-colors flex items-center">
              Empieza a escribir
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-orange-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-orange-100 transition-colors">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Herramientas que impulsan tu creatividad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6" />}
              title="Iniciadores creativos"
              description="Supera el bloqueo del escritor con prompts personalizados y sugerencias contextuales."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Desarrollo de personajes"
              description="Crea personajes profundos y memorables con nuestra herramienta de desarrollo de personajes."
            />
            <FeatureCard 
              icon={<BookOpen className="h-6 w-6" />}
              title="Estructura narrativa"
              description="Organiza tus historias con plantillas flexibles y herramientas de planificación."
            />
            <FeatureCard 
              icon={<Brain className="h-6 w-6" />}
              title="Lluvia de ideas"
              description="Genera y refina ideas para tus historias con nuestro asistente de brainstorming."
            />
            <FeatureCard 
              icon={<Book className="h-6 w-6" />}
              title="Desarrollo de tramas"
              description="Construye tramas convincentes con sugerencias inteligentes y análisis narrativo."
            />
            <FeatureCard 
              icon={<Puzzle className="h-6 w-6" />}
              title="Worldbuilding"
              description="Crea mundos ricos y detallados para tus historias con nuestra guía interactiva."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-orange-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Tu proceso creativo simplificado
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Step 
              number="1"
              title="Comparte tu idea"
              description="Describe tu concepto inicial o el punto donde necesitas ayuda."
            />
            <Step 
              number="2"
              title="Explora sugerencias"
              description="Recibe ideas personalizadas y orientación basada en tu estilo único."
            />
            <Step 
              number="3"
              title="Desarrolla tu historia"
              description="Da forma a tu narrativa con herramientas intuitivas y retroalimentación inteligente."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros escritores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              content="Writical me ayudó a superar el bloqueo del escritor y terminar mi primera novela."
              author="María G."
              role="Novelista"
            />
            <Testimonial 
              content="Las herramientas de desarrollo de personajes son increíblemente útiles y intuitivas."
              author="Carlos R."
              role="Guionista"
            />
            <Testimonial 
              content="La mejor inversión que he hecho para mi carrera como escritor."
              author="Ana P."
              role="Escritora de ficción"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Comienza tu viaje creativo hoy
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Únete a miles de escritores que están dando vida a sus historias con Writical
          </p>
          <button className="bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg font-semibold">
            Prueba Writical gratis
          </button>
        </div>
      </section>
    </div>
  );
};

// Componente FeatureCard
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-orange-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Componente Step
const Step = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Componente Testimonial
const Testimonial = ({ content, author, role }) => {
  return (
    <div className="bg-orange-50 p-6 rounded-xl">
      <p className="text-gray-700 mb-4">&ldquo;{content}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default WriticalLanding;