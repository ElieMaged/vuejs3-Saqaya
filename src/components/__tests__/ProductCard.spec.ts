import { mount } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { ComponentPublicInstance } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'



const mockProduct = {
  id: 1,
  title: 'Mock Product',
  description: 'A test product',
  price: 123,
  images: ['https://via.placeholder.com/150']
}

const mockStore = {
    commit: jest.fn()
}

const router = createRouter({
    history: createWebHistory(),
    routes:[]
})
describe('ProductCard.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

   beforeEach(() => {
    wrapper = mount(ProductCard, {
      props: {
        product: mockProduct
      },
      global: {
        mocks: {
          $router: router,
          $store: mockStore
        },
        provide: {
          // Provide for <script setup> usage of useRouter/useStore
          router: router,
          store: mockStore
        }
      }
    })
  })

  it('renders the product title', () => {
    const title = wrapper.find('#title')
    // expect(title.exists()).toBe(true)
    expect(title.text()).toBe(mockProduct.title)
  })
  it('renders description', () => {
    const desc = wrapper.find('#desc')
    // expect(desc.exists()).toBe(true)
    expect(desc.text()).toBe(mockProduct.description)
  })
  it('renders img link', () => {
    const price = wrapper.find('#price');
    // expect(price.exists()).toBe(true);
    expect(price.text()).toBe(mockProduct.price + '$')
  })
})