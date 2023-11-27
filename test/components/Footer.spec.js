import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Footer);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders footer component', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes('footer')).toBe(true);
    });

    it('displays the logo', () => {
        expect(wrapper.find('.footer__logo').exists()).toBe(true);
    });

    it('displays social media icons', () => {
        const socialIcons = wrapper.findAll('.footer__social-item');
        expect(socialIcons.length).toBe(3);
        expect(socialIcons.at(0).find('img').attributes('alt')).toBe('instagram');
        expect(socialIcons.at(1).find('img').attributes('alt')).toBe('twitter');
        expect(socialIcons.at(2).find('img').attributes('alt')).toBe('youtube');
    });

    it('displays copyright text', () => {
        const copyright = wrapper.find('.footer__copyright');
        expect(copyright.exists()).toBe(true);
        expect(copyright.text()).toContain('© 2023 BLNRY frontend challenge. All rights reseved');
    });
});
