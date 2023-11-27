import { shallowMount } from '@vue/test-utils';
import ProductEpisodes from '@/components/Product/ProductEpisodes.vue'

describe('ProductEpisodes', () => {
  it('renders the title correctly', () => {
    const wrapper = shallowMount(ProductEpisodes)
    const title = wrapper.find('.wrapper__title')
    expect(title.text()).toBe('Episodes')
  })

  it('renders the episode list correctly', () => {
    const wrapper = shallowMount(ProductEpisodes)
    const episodeItems = wrapper.findAll('.wrapper__item')
    
    expect(episodeItems.length).toBe(wrapper.vm.episodes.length)

    episodeItems.wrappers.forEach((item, index) => {
      expect(item.text()).toBe(wrapper.vm.episodes[index])
    })
  })
})
