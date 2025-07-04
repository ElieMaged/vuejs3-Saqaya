import { defineStore } from 'pinia'; 

export const useStore = defineStore('cart', { 
  state: () => (
    { 
      cart: []
    }
  ) }
);



export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category?: string;
  quantity:number;
  images:[];
}

export interface State {
  cart: Product[];
  state: Object;
}



export default useStore<State>({
  state: () =>( {
    cart: [],
  }),
  actions: {
    addToCart(state:State, product: Product) {
          const repeatProduct = this.cart.find(item => item.id === product.id);
          if(repeatProduct) {
            repeatProduct.quantity += 1
          } else {
            this.cart.push({...product, quantity:1})
          }
        
    }
  },
  getters: {
    cartItemCount: (state) => state.cart.filter((prev) => prev.cart.length),

    cartTotal: (state:State) => state.cart.reduce((total, product) => total + product.price, 0),

    cartItems: (state:State) => state.cart
  }
});

