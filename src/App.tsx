/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  CheckCircle2, 
  PartyPopper, 
  Music, 
  Palette, 
  Gamepad2, 
  Castle, 
  Package,
  Menu,
  X,
  ChevronRight,
  Instagram,
  Facebook,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import boomerang1 from '../images/boomerang1.webp';
import boomerang2 from '../images/boomerang2.webp';
import boomerang3 from '../images/boomerang3.webp';
import boomerang4 from '../images/boomerang4.webp';
import boomerang5 from '../images/boomerang5.webp';
import boomerang6 from '../images/boomerang6.webp';
import boomerang7 from '../images/boomerang7.webp';
import reviewer1 from '../images/reviewer1.webp';
import reviewer2 from '../images/reviewer2.webp';
import reviewer3 from '../images/reviewer3.webp';

// --- Constants & Data ---

const WHATSAPP_NUMBER = "+528131084082";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
const PHONE_DISPLAY = "+52 81 3108 4082";
const ADDRESS = "Prolongación Ruiz Cortínez 3000, Dominio Cumbres, 66036 García, N.L., México";

const SERVICES = [
  {
    id: 1,
    title: "Juegos Inflables",
    desc: "Castillos, toboganes y obstáculos inflables de la más alta calidad y seguridad para horas de diversión.",
    icon: <Castle className="w-8 h-8 text-white" />,
    color: "bg-blue-600",
    lightColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Animadores",
    desc: "Animadores profesionales que mantienen a los niños entretenidos con juegos, bailes y actividades.",
    icon: <PartyPopper className="w-8 h-8 text-white" />,
    color: "bg-pink-600",
    lightColor: "bg-pink-50"
  },
  {
    id: 3,
    title: "Decoración Temática",
    desc: "Transforma tu evento con decoraciones personalizadas del tema favorito de tu pequeño.",
    icon: <Palette className="w-8 h-8 text-white" />,
    color: "bg-purple-600",
    lightColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "Sonido y Música",
    desc: "Equipo de audio profesional con música para todas las edades y momentos especiales.",
    icon: <Music className="w-8 h-8 text-white" />,
    color: "bg-orange-600",
    lightColor: "bg-orange-50"
  },
  {
    id: 5,
    title: "Juegos Interactivos",
    desc: "Dinámicas grupales, concursos y actividades que fomentan la participación de todos.",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    color: "bg-green-600",
    lightColor: "bg-green-50"
  },
  {
    id: 6,
    title: "Paquetes Completos",
    desc: "Combina todos nuestros servicios en un paquete personalizado con precio especial.",
    icon: <Package className="w-8 h-8 text-white" />,
    color: "bg-yellow-600",
    lightColor: "bg-yellow-50"
  }
];

const TESTIMONIALS = [
  {
    name: "María González",
    role: "Mamá de Sofía (7 años)",
    text: "¡Increíble servicio! Los niños no pararon de jugar en toda la fiesta. El equipo de Boomerang fue súper profesional y puntual. Mi hija aún habla de su fiesta de cumpleaños.",
    rating: 5,
    avatar: reviewer1
  },
  {
    name: "Roberto Martínez",
    role: "Papá de Diego (5 años)",
    text: "Contratamos el paquete completo y valió cada peso. La decoración quedó espectacular y los animadores mantuvieron a los niños entretenidos por horas. 100% recomendado.",
    rating: 5,
    avatar: reviewer2
  },
  {
    name: "Ana Lucía Ramírez",
    role: "Mamá de los gemelos (4 años)",
    text: "Fue la primera fiesta que organizo y Boomerang me hizo sentir muy tranquila. Todo salió perfecto, desde los inflables hasta la música. Los niños estaban felices y eso no tiene precio.",
    rating: 5,
    avatar: reviewer3
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/10 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-pink rounded-lg flex items-center justify-center shadow-lg">
              <PartyPopper className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>Boomerang</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-bold transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-purple' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-brand-green text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all shadow-md flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-slate-700 hover:text-brand-purple"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-brand-green text-white py-3 rounded-xl font-bold"
              >
                Reserva por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = true, accentColor = "text-brand-purple", light = false }: { title: string, subtitle?: string, centered?: boolean, accentColor?: string, light?: boolean }) => {
  const parts = title.split('**');
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-6xl font-black mb-6 leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {parts.map((part, i) => (
          <span key={i} className={i % 2 === 1 ? accentColor : ''}>{part}</span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-xl max-w-3xl mx-auto font-medium ${light ? 'text-white/80' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  const enableHeroMotion = !prefersReducedMotion && !isMobile;

  useEffect(() => {
    // Add LocalBusiness Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Boomerang Fiestas Infantiles",
      "image": "https://picsum.photos/seed/boomerang/800/600",
      "@id": "",
      "url": window.location.href,
      "telephone": "+528131084082",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prolongación Ruiz Cortínez 3000, Dominio Cumbres",
        "addressLocality": "García",
        "addressRegion": "N.L.",
        "postalCode": "66036",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.7667, // Approximate for Dominio Cumbres
        "longitude": -100.4667
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-hero-gradient">
        {/* Background Patterns & Shapes */}
        <div className="absolute inset-0 bg-plus-pattern opacity-20" />
        
        {/* Floating Blobs */}
        <motion.div 
          animate={enableHeroMotion ? { x: [0, 30, 0], y: [0, -30, 0] } : undefined}
          transition={enableHeroMotion ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={enableHeroMotion ? { x: [0, -40, 0], y: [0, 40, 0] } : undefined}
          transition={enableHeroMotion ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl" 
        />
        
        {/* Floating Pills */}
        <div className="absolute top-[15%] left-[5%] w-32 h-12 bg-white/10 rounded-full rotate-45" />
        <div className="absolute bottom-[30%] left-[15%] w-40 h-16 bg-white/5 rounded-full -rotate-12" />
        <div className="absolute top-[40%] right-[5%] w-24 h-48 bg-white/10 rounded-full rotate-12" />

        {/* Floating Icons */}
        <motion.div 
          animate={enableHeroMotion ? { rotate: [0, 15, 0] } : undefined}
          transition={enableHeroMotion ? { duration: 4, repeat: Infinity } : undefined}
          className="absolute top-[15%] left-[8%] text-brand-yellow opacity-80 hidden md:block"
        >
          <PartyPopper size={80} />
        </motion.div>
        <motion.div 
          animate={enableHeroMotion ? { scale: [1, 1.2, 1] } : undefined}
          transition={enableHeroMotion ? { duration: 3, repeat: Infinity } : undefined}
          className="absolute top-[20%] right-[10%] text-white opacity-80 hidden md:block"
        >
          <Star size={60} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-sm mb-8 border border-white/30">
              <Star size={16} className="fill-white" />
              <span>¡Fiestas que tus hijos nunca olvidarán!</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              ¡Las mejores <span className="text-brand-yellow">fiestas infantiles</span> en García!
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Diversión, juegos y momentos inolvidables para tus pequeños. Déjanos crear la fiesta perfecta mientras tú disfrutas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-10 py-5">
                <MessageCircle size={28} />
                Reserva por WhatsApp
              </a>
              <a href="#servicios" className="btn-outline-white text-lg px-10 py-5">
                Ver Servicios
              </a>
            </div>
            
            <motion.div 
              animate={enableHeroMotion ? { y: [0, 10, 0] } : undefined}
              transition={enableHeroMotion ? { duration: 2, repeat: Infinity } : undefined}
              className="mt-16 text-white/60 flex flex-col items-center gap-2"
            >
              <div className="w-1 h-8 bg-white/30 rounded-full relative overflow-hidden">
                <motion.div 
                  animate={enableHeroMotion ? { top: ['-100%', '100%'] } : undefined}
                  transition={enableHeroMotion ? { duration: 1.5, repeat: Infinity, ease: "linear" } : undefined}
                  className="absolute w-full h-1/2 bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={boomerang1}
                  alt="Globos de colores" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Stats Card */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-10 -right-6 bg-white p-6 rounded-3xl shadow-2xl border-4 border-brand-yellow text-center min-w-[180px]"
              >
                <p className="text-4xl font-black text-brand-purple mb-1">+500</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Fiestas realizadas</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full font-bold text-sm mb-6">
                Sobre Nosotros
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                Creamos <span className="text-brand-purple">momentos mágicos</span> para tus pequeños
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                En <span className="text-brand-purple font-bold">Boomerang</span> nos especializamos en organizar fiestas infantiles que combinan diversión, seguridad y profesionalismo. Nuestro equipo está dedicado a crear experiencias inolvidables mientras tú disfrutas sin preocupaciones.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Con años de experiencia en el área de García, Nuevo León, hemos aprendido que cada fiesta es única. Por eso personalizamos cada evento para que tu pequeño tenga el día más especial de su vida.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Star className="text-brand-yellow" />, text: "Experiencia comprobada" },
                  { icon: <CheckCircle2 className="text-brand-blue" />, text: "Seguridad garantizada" },
                  { icon: <PartyPopper className="text-brand-pink" />, text: "Amor por lo que hacemos" },
                  { icon: <Package className="text-brand-green" />, text: "Equipo profesional" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(241, 245, 249, 1)" }}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-brand-green/10 text-brand-green rounded-full font-bold text-sm">Nuestros Servicios</span>
          </div>
          <SectionHeading 
            title="Todo lo que necesitas para la **fiesta perfecta**" 
            subtitle="Ofrecemos una amplia variedad de servicios para hacer de tu evento algo único e inolvidable"
            accentColor="text-brand-pink"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${service.lightColor} p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full`}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium flex-grow">{service.desc}</p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-full py-4 ${service.color} text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md`}
                >
                  <MessageCircle size={20} />
                  Cotizar ahora
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-purple-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-white/10 text-white/80 rounded-full font-bold text-sm">¿Por qué elegirnos?</span>
          </div>
          <SectionHeading 
            title="La mejor opción para tu **fiesta infantil**" 
            subtitle="Nos comprometemos a brindarte el mejor servicio con los más altos estándares de calidad"
            accentColor="text-brand-yellow"
            centered={true}
            light={true}
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 className="text-white" />, title: "100% Seguro", desc: "Todos nuestros equipos cumplen con las normas de seguridad más estrictas", color: "bg-blue-500" },
              { icon: <Clock className="text-white" />, title: "Puntuales", desc: "Llegamos a tiempo para que tu evento inicie sin contratiempos", color: "bg-green-500" },
              { icon: <Star className="text-white" />, title: "Personalizados", desc: "Cada paquete se adapta a tus necesidades y presupuesto", color: "bg-purple-500" },
              { icon: <Palette className="text-white" />, title: "Precios Justos", desc: "Calidad premium a precios accesibles para toda la familia", color: "bg-yellow-500" },
              { icon: <MapPin className="text-white" />, title: "Servicio Local", desc: "Conocemos García, N.L. y nos desplazamos a toda la zona", color: "bg-orange-500" },
              { icon: <CheckCircle2 className="text-white" />, title: "Garantizado", desc: "Tu satisfacción es nuestra prioridad número uno", color: "bg-pink-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl group hover:bg-white/20 transition-all"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                <p className="text-white/70 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink rounded-full font-bold text-sm">Testimonios</span>
          </div>
          <SectionHeading 
            title="Lo que dicen las **familias felices**" 
            subtitle="Miles de familias ya confiaron en nosotros para sus celebraciones especiales"
            accentColor="text-brand-pink"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative flex flex-col"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl font-serif">"</span>
                </div>
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} className="fill-brand-yellow text-brand-yellow" />)}
                </div>
                <p className="text-lg text-slate-600 italic mb-10 leading-relaxed flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" loading="lazy" decoding="async" />
                  <div>
                    <p className="font-black text-slate-900">{t.name}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm">Galería</span>
          </div>
          <SectionHeading 
            title="Momentos que **capturamos**" 
            subtitle="Mira algunas de las fiestas increíbles que hemos organizado"
            accentColor="text-brand-orange"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              boomerang2,
              boomerang3,
              boomerang4,
              boomerang5,
              boomerang6,
              boomerang7
            ].map((url, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl overflow-hidden shadow-lg h-64"
              >
                <img 
                  src={url} 
                  alt={`Fiesta Boomerang ${i + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-bold text-sm">Ubicación</span>
          </div>
          <SectionHeading 
            title="Encuéntranos en **García, N.L.**" 
            subtitle="Estamos ubicados en el corazón de Dominio Cumbres, listos para llevar la diversión a tu evento"
            accentColor="text-brand-blue"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación Boomerang"
              ></iframe>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-blue w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Nuestra Dirección</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
                
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 w-full py-4 bg-brand-purple text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
                >
                  <MapPin size={20} />
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-plus-pattern opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-white/10 text-white/80 rounded-full font-bold text-sm mb-6 inline-block">Contáctanos</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">¿Listo para la <span className="text-brand-yellow">mejor fiesta?</span></h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">Escríbenos y te ayudaremos a planear el evento perfecto para tu pequeño</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {[
                { icon: <Phone />, label: "Teléfono", value: PHONE_DISPLAY, href: `tel:${WHATSAPP_NUMBER}` },
                { icon: <MessageCircle />, label: "WhatsApp", value: "Enviar mensaje", href: WHATSAPP_LINK },
                { icon: <MapPin />, label: "Dirección", value: "Dominio Cumbres, García, N.L.", href: "#" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 text-white hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
              
              <div className="p-8 bg-brand-green rounded-[2rem] text-white shadow-2xl mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black">¿Prefieres WhatsApp?</h4>
                    <p className="text-white/80 font-medium">Respuesta inmediata</p>
                  </div>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full py-4 bg-white text-brand-green font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg">
                  Enviar WhatsApp Ahora
                </a>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Solicita tu Cotización</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <Star size={14} className="text-brand-purple" /> Nombre completo
                  </label>
                  <input type="text" placeholder="Tu nombre" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-purple outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <Phone size={14} className="text-brand-purple" /> Teléfono / WhatsApp
                  </label>
                  <input type="tel" placeholder="81 1234 5678" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-purple outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <Clock size={14} className="text-brand-purple" /> Fecha del evento
                  </label>
                  <input type="date" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-purple outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 ml-1">
                    <MessageCircle size={14} className="text-brand-purple" /> Cuéntanos sobre tu evento
                  </label>
                  <textarea placeholder="Número de niños, tema de la fiesta, servicios de interés..." rows={4} className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-purple outline-none transition-all font-medium resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-pink text-white font-black rounded-2xl shadow-lg hover:opacity-90 transition-all text-lg flex items-center justify-center gap-2">
                  <PartyPopper size={20} />
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-pink rounded-lg flex items-center justify-center">
                  <PartyPopper className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tight">Boomerang</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Creamos momentos mágicos e inolvidables para tus pequeños. ¡Las mejores fiestas infantiles en García, N.L.!
              </p>
              <p className="text-brand-orange font-black italic tracking-tight">"Diversión que siempre regresa" 🪃</p>
            </div>
            
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white/40">Enlaces Rápidos</h4>
              <ul className="space-y-4 font-bold text-slate-400">
                <li><a href="#inicio" className="hover:text-brand-blue transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full" /> Inicio</a></li>
                <li><a href="#servicios" className="hover:text-brand-pink transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-brand-pink rounded-full" /> Servicios</a></li>
                <li><a href="#galeria" className="hover:text-brand-yellow transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-brand-yellow rounded-full" /> Galería</a></li>
                <li><a href="#contacto" className="hover:text-brand-green transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-brand-green rounded-full" /> Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white/40">Servicios</h4>
              <ul className="space-y-4 font-bold text-slate-400">
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Inflables</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Animadores</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Decoración</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Sonido</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Juegos</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full" /> Paquetes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-white/40">Contacto</h4>
              <ul className="space-y-6 font-bold text-slate-400">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white/60">
                    <Phone size={20} />
                  </div>
                  <span>+52 81 3108 4082</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white/60">
                    <MessageCircle size={20} />
                  </div>
                  <span>WhatsApp</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white/60 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm leading-relaxed">Prolongación Ruiz Cortínez 3000, Dominio Cumbres, 66036 García, N.L.</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-brand-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-brand-pink transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
            <p>© 2026 Boomerang Fiestas Infantiles. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en García, N.L.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-brand-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
