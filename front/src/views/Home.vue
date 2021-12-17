<template>
  <div class="home mx-5">
    <div class="grix xs2 gutter-xs6 mt-5">
      <div>
        <div class="card white rounded-1 light-shadow-1 overflow-y-scroll">
          <div class="responsive-table">
            <table class="table">
              <thead class="tertiary">
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="productCart in products" :key="productCart.product">
                  <td>{{ productCart.product.code }}</td>
                  <td>{{ productCart.product.name }}</td>
                  <td>{{ productCart.quantity }}</td>
                  <td>{{ productCart.product.price * productCart.quantity }}</td>
                  <td>
                    <ax-btn @click="remove(productCart)" size="small" circle class="d-block primary mx-auto"><i class="mdi font-s3 mdi-close"></i></ax-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="d-flex mt-3">
          <ax-btn class="error text-white rounded-1 shadow-1">Abandonner</ax-btn>
          <ax-btn class="warning text-white rounded-1 shadow-1 d-flex ml-auto">Mise en attente</ax-btn>
        </div>
      </div>

      <div>
        <div class="card white rounded-1 light-shadow-1 p-3">
          <div class="grix xs2 gutter-xs4">
            <div class="d-flex fx-col">
              <div class="d-flex fx-row">
                <ax-form-field class="white shadow-1">
                  <ax-form-control v-model="pin" :value="pin" class="bd-0" placeholder="Code art" tag="input" type="text"></ax-form-control>
                </ax-form-field>
                <ax-btn @click="scan" class="primary rounded-1 d-block" small><i class="mdi mdi-check pr-2"></i></ax-btn>
              </div>
              <div class="d-flex fx-center">
                <img :src="state.currentProduct?.image" style="max-height: 150px;" class="responsive-media" alt="">
              </div>
              <ax-btn class="primary mt-auto d-block rounded-1 light-shadow-1 w100 mb-1 ">Produit inconnu</ax-btn>
            </div>

            <div class="grix xs3 gutter-xs3">
              <button v-for="i in 10" :key="i" @click="addNumber(i > 9 ? 0 : i)" class="btn btn-small font-s6 primary rounded-1 w100">{{ i > 9 ? 0 : i }}</button>
              <button class="btn btn-small font-s6 text-white tertiary rounded-1 w100" @click="pin = ''">C</button>
              <button class="btn btn-small font-s6 text-white secondary rounded-1 w100"><i class="mdi mdi-check"></i></button>
            </div>
          </div>

        </div>
        <div class="card white mt-5 p-3 rounded-1 light-shadow-1">
          <h2 class="my-0 font-w400 mb-2">Total</h2>
          <div class="text-center font-s4 p-3 my-2 rounded-1 grey light-4 text-grey text-dark-3 bd-solid bd-grey bd-light-1 bd-1">
            {{ total || '...' }}
          </div>
          <ax-btn class="success rounded-1 light-shadow-1 mx-auto mt-3">Payer</ax-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Logic } from '../../Coordi/src/logic';

export default {
  name: 'Home',
  data() {
    return {
      pin: '',
      api: null,
      state: {},
      currentState: '',
      products: []
    }
  },
  computed: {
    total() {
      return Array.from(this.products).reduce((acc, item: any) => {
        return +acc + (item.product.price * item.quantity); 
      }, 0)
    },
    computedState() {
      return this.state;
    },
    computedCurrentState() {
      return this.currentState;
    }
  },
  methods: {
    scan() {
      console.log(this.state.cart.products);
      if (this.currentState === "WAIT_FOR_SCAN") {
        this.api.scan(+this.pin);
      } else if (this.currentState === "WAIT_QUANTITY") {
        this.api.quantity(+this.pin)
      }
      this.pin = '';
    },
    updateState(state) {
      this.state = state
    },
    addNumber(num: string): void {
      this.pin += num;
    },
    remove(productCard) {
      console.log("________________________________")
      this.api.pressReturn();
      this.api.scan(productCard.product.code);
      this.api.quantity(productCard.quantity);
    }
  },
  mounted() {
    this.api = new Logic((state, currentState) => {
      this.updateState(state);
      this.currentState = currentState;
      this.products = this.state.cart.products
    });
  },
};
</script>
