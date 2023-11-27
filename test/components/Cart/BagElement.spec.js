import { shallowMount } from '@vue/test-utils'
import BagElement from '@/components/Cart/BagElement.vue'

describe('BagElement', () => {
  it('renders the component with props correctly', () => {
    const img = 'img-url.jpg'
    const name = 'Product Name'
    const price = '$99.99'
    const status = 'In Stock'
    const reverse = true

    const wrapper = shallowMount(BagElement, {
      propsData: {
        img,
        name,
        price,
        status,
        reverse
      }
    })

    expect(wrapper.find('.element__img').attributes('src')).toBe(img)
    expect(wrapper.find('.element__name').text()).toBe(name)
    expect(wrapper.find('.element__price').text()).toBe(price)
    expect(wrapper.find('.element__status').text()).toBe(`Status: ${status}`)

    expect(wrapper.find('.element__img').attributes('style')).toBe('transform: scaleX(-1);')
  })

  it('increases quantity when add button is pressed', async () => {
    const wrapper = shallowMount(BagElement)
    await wrapper.find('.element__quantity-counter--add').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.amount).toBe(1)
  })

  it('decreases quantity when remove button is pressed', async () => {
    const wrapper = shallowMount(BagElement)
    wrapper.setData({ amount: 1 })
    await wrapper.vm.$nextTick()
    await wrapper.find('.element__quantity-counter--remove').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.amount).toBe(0)
  })
})
