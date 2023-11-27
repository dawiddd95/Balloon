import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import ProductPage from '@/pages/product/_id.vue';
import ProductCard from '@/components/Product/ProductCard.vue';
import ProductCharacteristics from '@/components/Product/ProductCharacteristics.vue';
import ProductEpisodes from '@/components/Product/ProductEpisodes.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [{ path: '/product/:id' }];
const router = new VueRouter({ routes });
router.push = jest.fn().mockResolvedValue(null);

describe('ProductPage.vue', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(ProductPage, {
        localVue,
        router,
        mocks: {
          $route: {
            params: { id: 'some-id' }
          }
        }
      });
    });

  it('renders Product Page components', () => {
    expect(wrapper.findComponent(ProductCard).exists()).toBe(true);
    expect(wrapper.findComponent(ProductCharacteristics).exists()).toBe(true);
    expect(wrapper.findComponent(ProductEpisodes).exists()).toBe(true);
  });

  it('initializes imageIndex to 0', () => {
    expect(wrapper.vm.imageIndex).toBe(0);
  });

  it('updates properly imageIndex when nextImage and previousImage are fired', async () => {
    wrapper.vm.nextImage();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.imageIndex).toBe(1);

    wrapper.vm.previousImage();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.imageIndex).toBe(0);
  });

  it('updates imageIndex when chooseImage method is fired', async () => {
    wrapper.vm.chooseImage(2);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.imageIndex).toBe(2);
  });
});