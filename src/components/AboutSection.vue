<script setup>
import { Award, Shield, Layers, CheckCircle, ArrowRight, Users, Target, Zap } from 'lucide-vue-next'

const features = [
  { 
    icon: Award, 
    title: 'Experiencia', 
    desc: 'Años de trayectoria en operaciones mineras y logística especializada.',
    stat: '15+',
    statLabel: 'Años'
  },
  { 
    icon: Shield, 
    title: 'Seguridad', 
    desc: 'Protocolos rigurosos y mantenimiento preventivo constante.',
    stat: '100%',
    statLabel: 'Certificado'
  },
  { 
    icon: Layers, 
    title: 'Capacidad', 
    desc: 'Flota amplia, moderna y versátil para cualquier proyecto.',
    stat: '50+',
    statLabel: 'Vehículos'
  },
  { 
    icon: CheckCircle, 
    title: 'Compromiso', 
    desc: 'Servicio confiable, puntual y orientado a resultados.',
    stat: '24/7',
    statLabel: 'Soporte'
  },
]

const values = [
  { icon: Users, label: 'Clientes satisfechos', value: '200+' },
  { icon: Target, label: 'Proyectos completados', value: '500+' },
  { icon: Zap, label: 'Disponibilidad', value: '99.9%' },
]
</script>

<template>
  <section class="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
    <!-- Imagen de fondo temática -->
    <div class="absolute inset-0 bg-cover bg-center opacity-15" style="background-image: url('https://maxtracker.com/wp-content/uploads/2022/02/maquinaria-1200x750-1-1024x640.jpg');"></div>
    <!-- Patrón decorativo de fondo -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #029374 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <!-- Formas decorativas -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#029374]/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#02b894]/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Contenido Principal -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-[#029374]/10 border border-[#029374]/20 rounded-full px-4 py-2">
            <div class="w-2 h-2 bg-[#029374] rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-[#029374] uppercase tracking-wider">Sobre Nosotros</span>
          </div>

          <!-- Título -->
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              ¿Quiénes 
              <span class="relative inline-block">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#029374] to-[#02b894]">somos?</span>
                <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#029374] to-[#02b894] rounded-full"></div>
              </span>
            </h2>
            
            <p class="text-gray-600 text-lg leading-relaxed">
              Ofrecemos una amplia gama de vehículos para satisfacer las diversas necesidades de transporte de nuestros clientes.
            </p>
          </div>

          <!-- Descripción destacada -->
          <div class="bg-gradient-to-br from-[#029374]/5 to-[#02b894]/5 border-l-4 border-[#029374] rounded-r-xl p-6">
            <p class="text-gray-700 leading-relaxed">
              En <span class="font-bold text-[#029374]">Acimser Rental</span>, estamos comprometidos con la excelencia en el servicio y la satisfacción del cliente, proporcionando soluciones de transporte y maquinaria que impulsan el éxito de tus proyectos.
            </p>
          </div>

          <!-- Estadísticas -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div v-for="val in values" :key="val.label" class="text-center p-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-[#029374] transition-all duration-300 hover:-translate-y-1 group">
              <component :is="val.icon" class="w-6 h-6 text-[#029374] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div class="text-2xl font-bold text-gray-900 mb-1">{{ val.value }}</div>
              <div class="text-xs text-gray-600">{{ val.label }}</div>
            </div>
          </div>

          <!-- CTA Button -->
          <div>
            <a 
              href="/contact" 
              class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#029374] to-[#02b894] hover:from-[#02b894] hover:to-[#029374] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#029374]/30 group"
            >
              <span>Contáctanos ahora</span>
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <!-- Grid de Features -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title"
            class="group relative p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#029374] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#029374]/10"
            :style="{ animationDelay: `${index * 0.1}s` }"
            :class="{'animate-fadeInUp': true}"
          >
            <!-- Fondo decorativo -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#029374]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Contenido -->
            <div class="relative z-10">
              <!-- Icono con badge numérico -->
              <div class="flex items-start justify-between mb-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#029374]/10 to-[#02b894]/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-[#029374]/20 group-hover:border-[#029374]">
                  <component :is="feature.icon" class="w-7 h-7 text-[#029374]" :stroke-width="2" />
                </div>
                
                <!-- Estadística -->
                <div class="text-right">
                  <div class="text-2xl font-bold text-[#029374]">{{ feature.stat }}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">{{ feature.statLabel }}</div>
                </div>
              </div>

              <!-- Título -->
              <h3 class="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#029374] transition-colors duration-300">
                {{ feature.title }}
              </h3>

              <!-- Línea decorativa -->
              <div class="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#029374] to-transparent transition-all duration-500 mb-3"></div>

              <!-- Descripción -->
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ feature.desc }}
              </p>
            </div>

            <!-- Indicador de hover -->
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="w-8 h-8 bg-[#029374]/10 rounded-full flex items-center justify-center">
                <ArrowRight class="w-4 h-4 text-[#029374]" />
              </div>
            </div>

            <!-- Efecto de brillo -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de confianza adicional -->
      <div class="mt-20 text-center">
        <div class="inline-flex items-center justify-center gap-8 flex-wrap">
          <div class="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <div class="w-3 h-3 bg-[#029374] rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-gray-700">Certificados de calidad</span>
          </div>
          <div class="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <div class="w-3 h-3 bg-[#029374] rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-gray-700">Flota moderna</span>
          </div>
          <div class="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <div class="w-3 h-3 bg-[#029374] rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-gray-700">Soporte 24/7</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animaciones */
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

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out backwards;
}

/* Efecto de pulso en el badge */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>