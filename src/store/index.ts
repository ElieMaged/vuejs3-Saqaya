import { createStore } from 'vuex'


export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category?: string;
  quantity:number;
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
    ADD_TO_CART(state:State, product: Product) {
          state.cart.push(product);
        
    }
  },
  actions: {
    addToCart({ commit }:any, product: Product) {
      commit('ADD_TO_CART', product);
    }
  },
  getters: {
    cartItemCount: (state:State) => state.cart.length,
    cartTotal: (state:State) => state.cart.reduce((total, product) => total + product.price, 0),
    cartItems: (state:State) => state.cart
  }
});