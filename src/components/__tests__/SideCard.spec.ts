import { mount } from '@vue/test-utils'
import SideCard from '../SideCard.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { ComponentPublicInstance } from 'vue'

const mockProduct = {
    id:'2',
    title:'mock title',
    description:'describe',
    price: 456,
    images: ['blablabla'],
    quantity: 1
}

describe('SideCard', () => {
    var wrapper:VueWrapper<ComponentPublicInstance>;
    beforeEach(() => {
        wrapper = mount(SideCard, {
            props: {
                product: mockProduct
            }
        });
    })
    it('title renders', () => {
        const title = wrapper.find('#title');
        expect(title.text()).toBe(mockProduct.title)
    })
       it('quantity', () => {
        const quantity = wrapper.find('#quantity');
        const quantityVal = mockProduct.quantity
        const quantityNum:number = Number(quantityVal)
        expect(Number(quantity.text())).toBe(quantityNum)
    })
})