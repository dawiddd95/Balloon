import { shallowMount } from '@vue/test-utils';
import WinterSale from '@/components/WinterSale.vue';

describe('WinterSale.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(WinterSale);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('contains the winter sale image', () => {
        expect(wrapper.find('.winter-sale__image').exists()).toBe(true);
    });

    it('displays discount offer', () => {
        expect(wrapper.find('.winter-sale__header--red').text()).toContain('25% OFF');
    });

    it('displays winter sale text', () => {
        expect(wrapper.find('.winter-sale__header--black').text()).toContain('Winter Sale');
    });

    it('displays descriptive text', () => {
        expect(wrapper.find('.winter-sale__text').text()).toContain('Discover our summer styles with discount');
    });

    it('contains a shop now button', () => {
        const button = wrapper.find('.winter-sale__button');
        expect(button.exists()).toBe(true);
        expect(button.text()).toContain('Shop Now');
    });
});
