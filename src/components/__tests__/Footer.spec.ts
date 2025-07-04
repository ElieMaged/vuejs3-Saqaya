import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'


describe('Footer.vue', () => {
    const wrapper = mount(Footer);
    const header = wrapper.find('#head1');
    const button = wrapper.find('#btn1')
    it('return submit', () => {
        expect(wrapper.text()).toContain('Join Our Newsletter')
    })
    it('button exists', () => {
        expect(button.exists()).toBe(true)
    })
    it('button triggers', async () => {
        await button.trigger('click')
    })
    })


