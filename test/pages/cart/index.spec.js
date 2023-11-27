import { shallowMount } from '@vue/test-utils'
import CartPage from '@/pages/cart/index.vue'
import CartCard from '@/components/Cart/CartCard.vue'
import YourBag from '@/components/Cart/YourBag.vue'

describe('CartPage.vue', () => {
  it('renders CartCard and YourBag components', () => {
    const wrapper = shallowMount(CartPage)

    expect(wrapper.findComponent(CartCard).exists()).toBe(true)
    expect(wrapper.findComponent(YourBag).exists()).toBe(true)
  })
})