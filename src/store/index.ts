import { createStore } from 'vuex'


export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category?: string;
}

export interface State {
  cart: Product[];
  state: Object;
}



export default createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product: Product) {
        state.cart.push(product)
    }
  },
  actions: {
    addToCart({ commit }, product: Product) {
      commit('ADD_TO_CART', product);
    }
  },
  getters: {
    cartItemCount: (state) => state.cart.length,
    cartTotal: (state) => state.cart
  }
});