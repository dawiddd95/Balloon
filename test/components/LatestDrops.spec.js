import { mount, createLocalVue } from '@vue/test-utils';
import LatestDrops from '~/components/LatestDrops.vue';

const localVue = createLocalVue();

describe('LatestDrops.vue', () => {
  it('renders characters with names and prices', () => {
    const characters = [
      {
        id: 1,
        image: 'image1.jpg',
        name: 'Character 1',
        status: 'Status 1',
        origin: { name: 'Origin 1' },
        species: 'Species 1',
      },
      {
        id: 2,
        image: 'image2.jpg',
        name: 'Character 2',
        status: 'Status 2',
        origin: { name: 'Origin 2' },
        species: 'Species 2',
      },
    ];
    const prices = ['$98.99', '$775'];

    const wrapper = mount(LatestDrops, {
      localVue,
      propsData: {
        characters,
        prices,
      },
    });

    const characterElements = wrapper.findAll('.latest-drops__character');
    expect(characterElements.length).toBe(2);

    characterElements.wrappers.forEach((characterElement, index) => {
      const character = characters[index];
      const price = prices[index];

      expect(characterElement.find('.latest-drops__character--name').text()).toBe(character.name);
      // We get every 3 elements with the same class name
      expect(characterElement.findAll('.latest-drops__character--text').at(0).text()).toContain(`Status: ${character.status}`);
      expect(characterElement.findAll('.latest-drops__character--text').at(1).text()).toContain(`Origin: ${character.origin.name}`);
      expect(characterElement.findAll('.latest-drops__character--text').at(2).text()).toContain(`Species: ${character.species}`);
      expect(characterElement.find('.latest-drops__character--price').text()).toBe(price);
    });
  });

  it('renders no characters when characters prop is empty', () => {
    const characters = [];
    const prices = [];

    const wrapper = mount(LatestDrops, {
      localVue,
      propsData: {
        characters,
        prices,
      },
    });

    const characterElements = wrapper.findAll('.latest-drops__character');
    expect(characterElements.length).toBe(0);
  });
});
