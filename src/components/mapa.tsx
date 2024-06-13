import Script from 'next/script'
import '../app/

export default function Mapa(){
    return (
        
        <>
        
            
            
           
        
        <main>
            <div class="fondo-verde">
                <div class="contador-dinero">Recursos: <span id="dinero-disponible">100</span>♦</div>
                <button class="boton-agregar">Agregar Casa (10♦)</button>
                <button class="boton-agregar-mesa">Agregar Recolector (30♦)</button>
            </div>

            <Script >
  {`document.addEventListener('DOMContentLoaded', function() {
                    const container = document.querySelector('.fondo-verde');
                    const botonAgregarCasa = document.querySelector('.boton-agregar');
                    const botonAgregarMesa = document.querySelector('.boton-agregar-mesa');
                    const dineroDisponible = document.getElementById('dinero-disponible');
                    let dinero = 100; 
                    let modoActual = ''; 
        
                    function actualizarEventos() {
                        container.querySelectorAll('.cuadro').forEach(function(cuadro) {
                            cuadro.removeEventListener('click', handleCuadroClick);
                            cuadro.removeEventListener('click', handleMesaClick);
                            if (modoActual === 'casa') {
                                cuadro.addEventListener('click', handleCuadroClick);
                            } else if (modoActual === 'mesa') {
                                cuadro.addEventListener('click', handleMesaClick);
                            }
                        });
                    }
        
                    botonAgregarCasa.addEventListener('click', function() {
                        modoActual = 'casa';
                        actualizarEventos();
                    });
        
                    botonAgregarMesa.addEventListener('click', function() {
                        modoActual = 'mesa';
                        actualizarEventos();
                    });
        
                    function handleCuadroClick() {
                        if (modoActual !== 'casa') return; 
                        if (this.classList.contains('mesa')) return; 
        
                        if (this.classList.contains('casa')) {
                            this.classList.remove('casa', 'rojo');
                            this.innerHTML = ''; 
                            this.style.backgroundImage = 'url(pasto.png)';
                            dinero += 10; 
                        } else if (dinero >= 10) {
                            this.classList.add('casa'); 
                            const img = document.createElement('img');
                            img.src = 'house.png'; 
                            //this.innerHTML = '';
                            this.style.backgroundImage = 'none';
                            this.appendChild(img); 
                            dinero -= 10; 
                        }
                        dineroDisponible.textContent = dinero;
                    }
        
                    function handleMesaClick() {
                        if (modoActual !== 'mesa') return; 
                        if (this.classList.contains('casa')) return; 
        
                        if (this.classList.contains('mesa')) {
                            this.classList.remove('mesa', 'gris');
                            this.innerHTML = ''; 
                            this.style.backgroundImage = 'url(pasto.png)'; 
                            dinero += 30; 
                            dineroDisponible.textContent = dinero;
                        } else if (dinero >= 30) {
                            this.classList.add('mesa', 'gris'); 
                            const img = document.createElement('img');
                            img.src = 'work.png'; 
                            this.innerHTML = ''; // Limpiar contenido actual
                            this.style.backgroundImage = 'none'; // Quitar la imagen de fondo de pasto
                            this.appendChild(img); // Añadir la imagen de la mesa de trabajo
                            dinero -= 30; // Restar dinero al agregar una mesa
                            dineroDisponible.textContent = dinero;
        
                            
                            const contador = document.createElement('div');
                            contador.classList.add('contador-individual');
                            this.appendChild(contador);
        
                           
                            let tiempoRestante = 600; // 10 minutos en segundos
                            const timer = setInterval(() => {
                                if (tiempoRestante > 0) {
                                    tiempoRestante--;
                                    contador.textContent = '';
                                } else {
                                    clearInterval(timer);
                                    dinero += 20;
                                    dineroDisponible.textContent = dinero;
                                    contador.textContent = 'Ganancia!';
                                }
                            }, 1000);
                        }
                    }
        
                    // Crear los cuadros inicialmente (como en tu código original)
                    for (let i = 0; i < 400; i++) {
                        const div = document.createElement('div');
                        div.classList.add('cuadro');
                        container.appendChild(div);
                    }
                });`}
</Script>

            
        </main>
        </>
        );
}