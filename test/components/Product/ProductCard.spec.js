import { shallowMount } from '@vue/test-utils';
import ProductCard from '@/components/Product/ProductCard.vue';

describe('ProductCard.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ProductCard);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('displays product name', () => {
        expect(wrapper.find('.card__name').text()).toContain('Morty Smith');
    });

    it('displays product status', () => {
        expect(wrapper.find('.card__status').text()).toContain('Status: Alive; Origin: Earth;');
    });

    it('displays product price', () => {
        expect(wrapper.find('.card__price').text()).toContain('$98.99');
    });

    it('initializes counter with zero quantity', () => {
        expect(wrapper.vm.amount).toBe(0);
    });

    it('decreases quantity when remove button is clicked', async () => {
        wrapper.setData({ amount: 1 });
        await wrapper.findAll('.card__quantity-counter span').at(0).trigger('click');
        expect(wrapper.vm.amount).toBe(0);
    });

    it('disables decrease button when quantity is zero', () => {
        wrapper.setData({ amount: 0 });
        expect(wrapper.findAll('.card__quantity-counter span').at(0).attributes('disabled')).toBe("disabled");
    });

    it('enables decrease button when quantity is above zero', async () => {
        wrapper.setData({ amount: 1 });
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('.card__quantity-counter span').at(0).attributes('disabled')).toBeUndefined();
    });
});
