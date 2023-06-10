<template>
  <div>
    <h3 class="my-3">{{ title }}</h3>
    <v-simple-table dense>
      <template #default>
        <tbody>
          <tr v-for="(item, i) in list" :key="i">
            <td>{{ item.name }}</td>
            <!-- <td>
              <v-rating
                empty-icon="mdi-circle-outline"
                full-icon="mdi-circle"
                half-icon="mdi-circle-half-full"
                hover
                length="10"
                readonly
                size="10"
                :value="item.value"
              ></v-rating>
            </td> -->
            <td>
              <v-rating v-model="item.value" length="10" readonly>
                <template #item="props">
                  <v-icon small :color="props.isFilled ? 'primary' : ''">{{
                    `mdi-numeric-${props.index + 1}-box`
                  }}</v-icon>
                </template>
              </v-rating>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'table'
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
