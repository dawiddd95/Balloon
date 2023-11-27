import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Navigation from '~/components/Navigation.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [{ path: '/cart', name: 'cart' }];
const router = new VueRouter({ routes });

describe('Navigation', () => {
    let wrapper;

    const createComponent = async ({ route } = {}) => {
        try {
            await router.push(route || '/');
        } catch (error) {
            if (error.name !== 'NavigationDuplicated') {
                throw error;
            }
        }
        wrapper = mount(Navigation, {
            localVue,
            router,
        });
    };

    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
        }
    });

    it('renders correctly', async () => {
        await createComponent();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.navigation__logo').exists()).toBe(true);
        expect(wrapper.find('.navigation__cart-button').exists()).toBe(true);
    });

    it('displays cart amount if on cart page', async () => {
        await createComponent({ route: '/cart' });
        expect(wrapper.vm.isCartPage).toBe(true);
        expect(wrapper.find('.navigation__cart-amount').exists()).toBe(true);
    });

    it('does not display cart amount if not on cart page', async () => {
        await createComponent({ route: '/' });
        expect(wrapper.vm.isCartPage).toBe(false);
        expect(wrapper.find('.navigation__cart-amount').exists()).toBe(false);
    });

    it('calls redirectToCart method when cart button is clicked', async () => {
        await createComponent();
        
        router.push = jest.fn();
        
        await wrapper.find('.navigation__cart-button').trigger('click');
        
        expect(router.push).toHaveBeenCalledWith('/cart');
    });
    
    
});
