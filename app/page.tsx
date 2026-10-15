"use client";
import { BARREL_OPTIMIZATION_PREFIX } from "next/dist/shared/lib/constants";
import {useState} from "react";

export default function Home() {
const [comenzo, setComenzo] = useState(false);
  return (
    <main className="pagina">
        {!comenzo ? (
          
          <section className="portada">
            <p className="etiqueta">
              UNA CARTA PARA ALGUIEN MUY ESPECIAL
            </p>

        <h1>
          Para <span>Juli</span>
        </h1>

        <p className="descripcion">
          Hay cosas que merecen ser descubiertas con calma.
        </p>

        <button className="boton-inicio"
          onClick={() => setComenzo(true)}
        >
          Descubrir la carta
        </button>

        <p className="firma">
          Una pequeña historia, escrita para ti.
        </p>
      </section>
        ) : (
          <section className="carta">
            <p className="etiqueta"> Para juli </p>

            <h1>Hola Juli</h1>

            <p className="descripcion">
              Hay personas con las que pasar un rato se siente diferente, y tú eres una de ellas.
            </p>

            <p className="descripcion">


              Me encanta compartir momentos contigo, hablar de cualquier cosa, reírnos y descubrir poco a poco esa forma tan tuya de ver las cosas. 
              Creo que eres una mujer increíble, no solamente por lo que haces, sino por tu manera de ser, tu inteligencia y esa determinación que tienes para ir detrás de lo que quieres.   
            </p>

            <p className="descripcion">
              Admiro que tengas tus propias metas, tu forma de pensar y esa esencia que te hace ser tú. Y aunque tal vez no te lo diga mucho, me gusta conocer más de ti, escuchar tus historias y guardar esos pequeños momentos que, sin hacer demasiado ruido, terminan siendo bonitos.
            </p>
              
            <p className="descripcion">
              No escribo esto para que lo tomes como algo más ni para hacer las cosas incómodas. Simplemente quería recordarte que eres una persona que vale mucho y que me alegra haber tenido la oportunidad de coincidir contigo.
            </p>

            <p className="descripcion">
              Así que, Juli, sigue siendo tú, persiguiendo tus sueños y haciendo las cosas a tu manera. No pierdas eso tan bonito que te hace diferente.
            </p>

            <p className="descripcion">
              Y bueno, solo quería dejarte este pequeño detalle. Espero que te saque una sonrisa.🖤 
            </p>
              <button
              className="boton-inicio"
              onClick={()=> setComenzo(false)}
    >
               volver al principio
              </button>
          </section>
        )}
    
        
    </main>
  );
}
