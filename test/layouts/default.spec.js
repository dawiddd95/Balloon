import { shallowMount } from '@vue/test-utils';
import DefaultLayout from '~/layouts/default.vue';
import Navigation from '~/components/Navigation.vue';
import FooterComponent from '~/components/Footer.vue';

describe('Layout default', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(DefaultLayout, {
            // Stub the <Nuxt /> component since it's a Nuxt-specific component
            stubs: {
                Nuxt: true 
            }
        });
    });

    it('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('contains Navigation component', () => {
        // Checks if the Navigation component is rendered.
        expect(wrapper.findComponent(Navigation).exists()).toBe(true);
    });

    it('contains FooterComponent component', () => {
        // Checks if the FooterComponent component is rendered.
        expect(wrapper.findComponent(FooterComponent).exists()).toBe(true);
    });

    it('renders Nuxt component', () => {
        // Checks if the <Nuxt /> component placeholder is rendered (<nuxt-stub> since Vue Test Utils replaces child components with stubs).
        expect(wrapper.html()).toContain('<nuxt-stub></nuxt-stub>');
    });
});

