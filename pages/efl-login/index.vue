<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="6">
        <v-card color="nord0" dark>
          <v-container>
            <v-row>
              <v-col class="py-1" cols="12">
                <v-card-title class="justify-center"> Ingresar </v-card-title>
              </v-col>
              <v-col class="py-1" cols="12">
                <v-text-field label="Usuario" color="nord4" />
              </v-col>
              <v-col class="py-1" cols="12">
                <v-text-field
                  label="Contraseña"
                  type="password"
                  color="nord4"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn block color="nord7" light> Iniciar sesión </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>
