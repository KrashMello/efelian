<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <!-- <v-img -->
          <!--   class="card-about-me" -->
          <!--   src="https://wallpaperaccess.com/full/770382.jpg" -->
          <!-- > -->
          <v-list-item>

            <v-card-title primary-title class="primary--text">
              <strong> Conoceme </strong>
            </v-card-title>
            <v-card-text class="textAncent--text text-justify">
              Hola mundo, mi nombre es <b>Joel Enrique</b> nacido en venezuela
              tengo actualmente {{ new Date().getFullYear() - 1994 }} años de
              edad, me desenvuelvo como un desarrollador web en crecimiento
              que trata de dar lo mejor de si día a día, con muchos proyectos
              en mente por realizar y con muchas ganas de darlo todo por
              cumplir mis sueños. Por acá estaré reseñando poco a poco sobre
              mi y así podrás seguir conociéndome un poco mejor. Espero les
              agrade un montón.
            </v-card-text>

            <v-list-item-avatar v-if="!$vuetify.display.mobile" tile size="200" color="grey">
              <!-- <v-img :src="imgSrc" /> -->
            </v-list-item-avatar>
          </v-list-item>
          <V-divider class="my-5" />
          <v-list-item>
            <v-list-item-avatar v-if="!$vuetify.display.mobile" tile size="200" color="grey">
              <!-- <v-img :src="imgSrc" /> -->
            </v-list-item-avatar>

            <v-card-title primary-title class="primary--text">
              <strong> ¿Que es KrashMello? </strong>
            </v-card-title>
            <v-card-text>
              <p class="primary--text text-justify">
                algunas personas que he tratado me han realizado la pregunta
                de que es krashmello o porque elegí ese nombre y la realidad
                no es otra que un nombre surgido de las iniciales
                <b>KM</b> que pueden visualizar en el logo, un día tomando un
                café se me vino a mis pensamientos el diseño y de allí empecé
                a construirlo y buscar combinaciones para el nombre y me
                agrado el resultado.
              </p>
              <p class="primary--text text-justify">
                Cabe destacar que krashmello es una iniciativa de un proyecto
                que se divide en varias fases y no un nombre como tal, una de
                las fases es poder ayudar en el mundo de los programadores un
                poco con mis códigos en pocas palabras “lo que ya se” una de
                mis cualidades es que me gusta ayudar y como también
                demostrarme a mi mismo de lo que soy capaz de lograr y hacer,
                aún me faltan fases por cumplir en mi pero a medida se vayan
                cumpliendo los irán conociendo.
              </p>
            </v-card-text>

          </v-list-item>
          <V-divider class="my-5" />
          <v-list-item>

            <v-card-title primary-title class="primary--text">
              <strong> Lo que me apaciona </strong>
            </v-card-title>
            <v-card-text>
              <p class="primary--text text-justify">
                me gustan los video juegos, aprender cosas nuevas todos los
                dias, el comportamiento humano, diseñar aunque en esto no soy
                tan bueno creo en realidad que mi parte creativa del cerebro
                no funciona tan bien jajaja tambien me gusta programar como
                puedo mostrar en esta pagina, aunque esto es realmente un amor
                odio ya que siempre suelo ponerme retos muy grandes que
                necesitan de un equipo de 2 o mas personas y al ver que son
                demasiado para una persona me abruma.
              </p>
            </v-card-text>

            <v-list-item-avatar v-if="!$vuetify.display.mobile" tile size="200" color="grey">
              <!-- <v-img :src="imgSrc" /> -->
            </v-list-item-avatar>
          </v-list-item>
          <!-- <V-divider class="my-5" /> -->
          <!-- <v-list-item> -->
          <!--    -->
          <!--     <v-card-title primary-title> Habilidades </v-card-title> -->
          <!--     <v-card-text> -->
          <!--       <p> -->
          <!--         En el mundo del desarrollo web, me siento capaz de tener lo -->
          <!--         que hace falta para poder empezar cualquier proyecto o -->
          <!--         sistema, cabe mencionar que es la lógica lo que hace que te -->
          <!--         sepas desenvolver en cualquier lenguaje de programación a -->
          <!--         trabajar ya que sin lógica no se podría programar con éxito -->
          <!--         en ningún lenguaje. A continuación les muestro mis niveles -->
          <!--         de mis habilidades: -->
          <!--       </p> -->
          <!--       <v-row> -->
          <!--         <v-col cols="12" md="3"> -->
          <!--           <table-skill :title="front.title" :list="front.list" /> -->
          <!--         </v-col> -->
          <!--         <v-col cols="12" md="3"> -->
          <!--           <table-skill :title="back.title" :list="back.list" /> -->
          <!--         </v-col> -->
          <!--         <v-col cols="12" md="3"> -->
          <!--           <table-skill :title="bd.title" :list="bd.list" /> -->
          <!--         </v-col> -->
          <!--       </v-row> -->
          <!--     </v-card-text> -->
          <!--    -->
          <!-- </v-list-item> -->
          <V-divider class="my-5" />
          <v-list-item>
            <v-card-title primary-title class="primary--text">
              <strong> Estudios </strong>
            </v-card-title>
            <v-card-text>
              <p class="primary--text text-justify">
                mis inicio de la educacion empezo en una pequeña escuelita
                cerca de casa donde culmine la educacion primaria, al
                finalizarla sin perdida de tiempo empeze la secundaria
                (bachillerato) donde me compraron mi primera pc para poder
                hacer los trabajos y poder investigar, esto ayudo a lo que
                seria la eleccion de mi carrera universitaria sabia lo que
                queria y es estudiar algo relacionado a la tegnologia en esos
                momentos tambien usaba la computadora para jugar y el querer
                saber como se creaban los videojuegos y tambien algunos
                programas de la pc me hicieron ver que lo que necesitaba
                estudiar era ingenieria en informatica y al graduarme del
                bachillerato de una vez decido buscar algun ente universitario
                donde esta carrera se ejersa, fue una tia que me consiguio un
                cupo en una la <b>UNEFA</b> una universidad publica de
                venezuela donde pase 7 años de mi vida peleando con mi yo
                perezoso y procrastinador para poder terminarla.
              </p>
              <p class="primary--text text-justify">
                en los inicios de la universidad sentia que para que servian
                las matematias la fisica la quimica y muchas de las materias
                que ayi se inpartian, un dia eso se lo dije a un profesor y el
                con total seguridad en su respuesta me dijo. <br /><br />

                <em style="background-color: #e0e0e0">
                  '' si lo que quieres ser es un ingeniero de sistema tienes
                  que saber de todo esto y me dio un ejemplo que a dia de hoy
                  lo tengo presente, sabes como funciona tu cuerpo
                  internamente sabes como se llama todo lo el conjunto que
                  forma tu cuerpo internamente, se le llama sistema y funciona
                  como tal ''
                </em>
                <br /><br />

                en el futuro lo que tu diseñaras sera un sistema y en el puede
                estar presente las matematicas la biologia la fisica y demas.
              </p>
              <p class="primary--text text-justify">
                fue ahi cuando realmente me intereze mas por el todo y el por
                que ocurren las cosas cada vez me interezaban mas llegar al
                punto de poder crear cosas yo con programacion, y de alli fui
                investigando por mi propia cuenta lo que me hacia falta para
                poder comprender mas la programacion.
              </p>
            </v-card-text>
          </v-list-item>
          <V-divider class="my-5" />
          <v-list-item>

            <v-card-title primary-title class="primary--text">
              <strong> Experiencia laboral </strong>
            </v-card-title>
            <v-card-text>
              <p class="primary--text text-justify">
                mis inicio de la educacion empezo en una pequeña escuelita
                cerca de casa donde culmine la educacion primaria, al
                finalizarla sin perdida de tiempo empeze la secundaria
                (bachillerato) donde me compraron mi primera pc para poder
                hacer los trabajos y poder investigar, esto ayudo a lo que
                seria la eleccion de mi carrera universitaria sabia lo que
                queria y es estudiar algo relacionado a la tegnologia en esos
                momentos tambien usaba la computadora para jugar y el querer
                saber como se creaban los videojuegos y tambien algunos
                programas de la pc me hicieron ver que lo que necesitaba
                estudiar era ingenieria en informatica y al graduarme del
                bachillerato de una vez decido buscar algun ente universitario
                donde esta carrera se ejersa, fue una tia que me consiguio un
                cupo en una la <b>UNEFA</b> una universidad publica de
                venezuela donde pase 7 años de mi vida peleando con mi yo
                perezoso y procrastinador para poder terminarla.
              </p>
              <p class="primary--text text-justify">
                en los inicios de la universidad sentia que para que servian
                las matematias la fisica la quimica y muchas de las materias
                que ayi se inpartian, un dia eso se lo dije a un profesor y el
                con total seguridad en su respuesta me dijo si lo que quieres
                ser es un ingeniero de sistema tienes que saber de todo esto y
                me dio un ejemplo que a dia de hoy lo tengo presente, sabes
                como funciona tu cuerpo internamente sabes como se llama todo
                lo el conjunto que forma tu cuerpo internamente, se le llama
                sistema y funciona como tal en el futuro lo que tu diseñaras
                sera un sistema y en el puede estar presente las matematicas
                la biologia la fisica y demas.
              </p>
              <p class="primary--text text-justify">
                fue ahi cuando realmente me intereze mas por el todo y el por
                que ocurren las cosas cada vez me interezaban mas llegar al
                punto de poder crear cosas yo con programacion, y de alli fui
                investigando por mi propia cuenta lo que me hacia falta para
                poder comprender mas la programacion.
              </p>
            </v-card-text>

          </v-list-item>
          <!-- </v-img> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

