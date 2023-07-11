<template>
  <v-footer color="background" padless>
    <v-container fluid>
      <v-row justify="center">
        <v-col :cols="`${$vuetify.breakpoint.mobile ? '6' : '4'}`">
          <v-img
            class=""
            max-height="85"
            max-width="350"
            src="./full_logo.png"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="`${$vuetify.breakpoint.mobile ? '12' : '4'}`">
          <v-list dense color="background">
            <v-list-item-group>
              <v-list-item
                color="nord0"
                v-for="(menu, i) in menuList"
                :key="i"
                :to="menu.to"
              >
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile">
        <v-col cols="12" class="pa-0 d-flex justify-center">
          <v-btn
            v-for="(item, i) in socialMedia"
            :key="i"
            icon
            link
            color="textPrimary"
            :href="item.href"
            target="blank"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FooterLayout',
  data() {
    return {
      absolute: false,
      footerItems: [
        {
          title: 'Modelos',
          items: [
            'Picanto',
            'Soluto',
            'Rio Sedan',
            'Rio 5',
            'Cerato',
            'EV6',
            'SoulEV',
            'K5',
            'Stonic',
            'Sonet',
            'Seltos',
            'Carens',
            'Niro Hibrido',
            'Sportage',
            'Nuevo Sorento',
            'Sorento',
            'Carnival',
            'SUV & MPV',
            'Autos',
          ],
        },
        {
          title: 'Compra tu Kia',
          items: [
            'Nuestros Concesionarios',
            'Descarga Catalogo',
            'Cotiza tu Kia',
            'Prueba tu Kia',
            'Vehiculos Exonerados',
            'Flotas',
            'Promesas de valor',
          ],
        },

        {
          title: 'Postventa',
          items: [
            'Informacion de Servicios',
            'Garantia',
            'Cita taller',
            'Asistencia Kia',
            'Centros de colisiones',
            'Solicitud Proforma Virtual',
            'Colision',
            'Cotiza tu repuesto',
            'Seguro Kia Plus',
            'How-tos',
          ],
        },
        {
          title: 'Descubre tu Kia',
          items: [
            'Nuestro Movimiento',
            'Nuestro Simbolo',
            'Nuestro diseño',
            'Nuestra inspiracion',
            'Politicas de Calidad',
            'Patrocinio',
            'Ostenible',
            'Mercado de Valores',
          ],
        },
        {
          title: 'Seminuevos',
          items: ['Seminuevos Certificados', 'Seminuevos', 'Avaluo en linea'],
        },
      ],
    }
  },
  computed: {
    ...mapGetters({ menuList: 'getMenuList', socialMedia: 'getSocialMedia' }),
  },
}
</script>
