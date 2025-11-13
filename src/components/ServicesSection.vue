<script setup>
import { Users, Truck, Wrench, Route, Car, Cog, Loader, Briefcase, AlertTriangle, Mountain, Leaf, ClipboardList } from 'lucide-vue-next'

const services = [
  { title: 'Excavadoras y retroexcavadoras', desc: 'Equipos robustos para excavación y movimiento de tierra.', icon: Cog, category: 'Maquinaria' },
  { title: 'Minicargadores', desc: 'Compactos y eficientes para espacios reducidos.', icon: Loader, category: 'Maquinaria' },
  { title: 'Volquetes 15/17/22 m³', desc: 'Transporte eficiente de materiales a granel.', icon: Truck, category: 'Transporte' },
  { title: 'Camionetas Pick Up 4x4', desc: 'Movilidad y resistencia en terrenos difíciles.', icon: Car, category: 'Transporte' },
  { title: 'Buses de personal', desc: 'Transporte cómodo y seguro de personal.', icon: Users, category: 'Transporte' },
  { title: 'Camión plataforma 5T', desc: 'Transporte versátil de carga y equipos.', icon: Truck, category: 'Transporte' },
  { title: 'Transporte ejecutivo', desc: 'Soluciones seguras y puntuales para ejecutivos.', icon: Briefcase, category: 'Transporte' },
  { title: 'Carga ancha y peligrosos', desc: 'Servicios especializados con cumplimiento normativo.', icon: AlertTriangle, category: 'Especializado' },
  { title: 'Movimiento de tierra', desc: 'Ejecución eficiente y precisa de obras.', icon: Mountain, category: 'Construcción' },
  { title: 'Monitoreo ambiental', desc: 'Estudios para minimizar impacto ambiental.', icon: Leaf, category: 'Especializado' },
  { title: 'Logística integral', desc: 'Coordinación de rutas y gestión de flota.', icon: Route, category: 'Gestión' },
  { title: 'Mantenimiento', desc: 'Planes preventivos y correctivos.', icon: Wrench, category: 'Gestión' },
  { title: 'Gestión documental', desc: 'Cumplimiento y control de documentación.', icon: ClipboardList, category: 'Gestión' },
]
</script>

<template>
  <section class="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Fondo decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-[#029374] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <!-- Patrón de cuadrícula -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: linear-gradient(#029374 1px, transparent 1px), linear-gradient(90deg, #029374 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-[#029374]/10 border border-[#029374]/30 rounded-full px-4 py-2 mb-6">
          <div class="w-2 h-2 bg-[#029374] rounded-full animate-pulse"></div>
          <span class="text-sm font-semibold text-[#029374] uppercase tracking-wider">Nuestros Servicios</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="text-white">Soluciones Integrales</span>
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#029374] to-[#02b894]">
            Para Tu Negocio
          </span>
        </h2>
        
        <p class="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Ofrecemos una amplia gama de servicios especializados en transporte, maquinaria y logística 
          para impulsar el éxito de tus proyectos
        </p>

        <!-- Estadísticas -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-4xl font-bold text-[#029374] mb-2">13+</div>
            <div class="text-gray-400 text-sm uppercase tracking-wide">Servicios</div>
          </div>
          <div class="h-12 w-px bg-gray-700"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#029374] mb-2">24/7</div>
            <div class="text-gray-400 text-sm uppercase tracking-wide">Disponibilidad</div>
          </div>
          <div class="h-12 w-px bg-gray-700"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#029374] mb-2">100%</div>
            <div class="text-gray-400 text-sm uppercase tracking-wide">Confiable</div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="(s, index) in services" 
          :key="s.title"
          class="service-card group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-[#029374]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#029374]/20 focus:outline-none focus:ring-4 focus:ring-[#029374] cursor-pointer"
          tabindex="0"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <!-- Badge de categoría -->
          <div class="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="bg-[#029374] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {{ s.category }}
            </span>
          </div>

          <!-- Icono con efecto -->
          <div class="relative mb-5">
            <div class="w-16 h-16 bg-gradient-to-br from-[#029374]/20 to-[#02b894]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-[#029374]/20">
              <component :is="s.icon" class="w-8 h-8 text-[#029374] group-hover:text-[#02b894] transition-colors duration-300" :stroke-width="2" />
            </div>
            
            <!-- Efecto de onda al hover -->
            <div class="absolute inset-0 rounded-2xl bg-[#029374]/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
          </div>

          <!-- Contenido -->
          <div>
            <h3 class="font-bold text-lg text-white mb-3 group-hover:text-[#029374] transition-colors duration-300">
              {{ s.title }}
            </h3>
            
            <!-- Línea decorativa -->
            <div class="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#029374] to-transparent transition-all duration-500 mb-3"></div>
            
            <p class="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {{ s.desc }}
            </p>
          </div>

          <!-- Flecha indicadora -->
          <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg class="w-5 h-5 text-[#029374]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          <!-- Efecto de brillo -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-20 text-center">
        <div class="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href="/contact" 
            class="group px-8 py-4 bg-gradient-to-r from-[#029374] to-[#02b894] hover:from-[#02b894] hover:to-[#029374] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#029374]/50 flex items-center gap-3"
          >
            <span>Solicitar cotización</span>
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <a 
            href="/services" 
            class="px-8 py-4 border-2 border-gray-700 hover:border-[#029374] text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800"
          >
            Ver todos los servicios
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animaciones */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card {
  animation: fadeInUp 0.6s ease-out backwards;
}

/* Efecto de hover en el grid */
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 2px;
  background: linear-gradient(135deg, transparent, #029374, transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.service-card:hover::before {
  opacity: 0.5;
}
</style>
