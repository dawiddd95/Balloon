import { shallowMount } from '@vue/test-utils';
import ProductCharacteristics from '@/components/Product/ProductCharacteristics.vue'

describe('ProductCharacteristics', () => {
  it('renders the title correctly', () => {
    const wrapper = shallowMount(ProductCharacteristics)
    const title = wrapper.find('.wrapper__title')
    expect(title.text()).toBe('Characteristics')
  })

  it('renders the characteristics items correctly', () => {
    const wrapper = shallowMount(ProductCharacteristics)
    const items = wrapper.findAll('.wrapper__item')
    const expectedItems = [
      'Status: Alive',
      'Origin: Earth',
      'Location: Earth',
      'Species: Human',
      'Gender: Male'
    ]
    
    items.wrappers.forEach((item, index) => {
      expect(item.text()).toBe(expectedItems[index])
    })
  })
})
