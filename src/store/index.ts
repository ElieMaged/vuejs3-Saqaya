import { defineStore } from 'pinia'; 

// useStore = defineStore('cart', { 
//   state: () => (
//     { 
//       cart: []
//     }
//   ) }
// );



export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category?: string;
  quantity:number;
  images:string[];
}

export interface State {
  cart: Product[];
}



export const useStore = defineStore('cart', {
  state: (): State => ({
    cart: [],
  }),
  actions: {
    addToCart(product: Product) {
          const repeatProduct = this.cart.find(item => item.id === product.id);
          if(repeatProduct) {
            repeatProduct.quantity += 1
          } else {
            this.cart.push({...product, quantity:1})
          }
        
    }
  },
  getters: {
    cartItemCount: (state) => state.cart.filter((state) => state.length),

    cartTotal: (state:State) => state.cart.reduce((total, product) => total + product.price, 0),

    cartItems: (state:State) => state.cart
  }
});

