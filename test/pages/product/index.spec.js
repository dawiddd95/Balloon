import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/pages/product/index.vue'
import ProductCard from '@/components/Product/ProductCard.vue'
import ProductCharacteristics from '@/components/Product/ProductCharacteristics.vue'
import ProductEpisodes from '@/components/Product/ProductEpisodes.vue'

describe('ProductPage.vue', () => {
  it('renders Product Page components', () => {
    const wrapper = shallowMount(ProductPage)

    expect(wrapper.findComponent(ProductCard).exists()).toBe(true)
    expect(wrapper.findComponent(ProductCharacteristics).exists()).toBe(true)
    expect(wrapper.findComponent(ProductEpisodes).exists()).toBe(true)
  })

  it('initializes imageIndex to 0', () => {
    const wrapper = shallowMount(ProductPage)

    expect(wrapper.vm.imageIndex).toBe(0)
  })

  it('updates properly imageIndex when nextImage and previousImage are fired', () => {
    const wrapper = shallowMount(ProductPage)

    wrapper.vm.nextImage()
    expect(wrapper.vm.imageIndex).toBe(1)

    wrapper.vm.previousImage()
    expect(wrapper.vm.imageIndex).toBe(0)
  })

  it('updates imageIndex when chooseImage method is fired', () => {
    const wrapper = shallowMount(ProductPage)

    wrapper.vm.chooseImage(2)
    expect(wrapper.vm.imageIndex).toBe(2)
  })
})
