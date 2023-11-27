import { shallowMount } from '@vue/test-utils'
import CartCard from '@/components/Cart/CartCard.vue'

describe('CartCard.vue', () => {
  it('renders the correct subtotal text and value', () => {
    const wrapper = shallowMount(CartCard)
    const subtotalElement = wrapper.find('.card__row--item')
    const subtotalAmount = wrapper.find('.card__row--amount')

    expect(subtotalElement.text()).toMatch('Subtotal')
    expect(subtotalAmount.text()).toMatch('$90.00')
  })

  it('renders the correct discount text and value', () => {
    const wrapper = shallowMount(CartCard)
    const discountElement = wrapper.findAll('.card__row--item').at(3)
    const discountAmount = wrapper.find('.discount')

    expect(discountElement.text()).toMatch('Discount')
    expect(discountAmount.text()).toMatch('-$6.00')
  })

  it('renders the correct tax text and value', () => {
    const wrapper = shallowMount(CartCard)
    const taxElement = wrapper.findAll('.card__row--item').at(2)
    const taxAmount = wrapper.findAll('.card__row--amount').at(2)

    expect(taxElement.text()).toMatch('Tax')
    expect(taxAmount.text()).toMatch('$6.00')
  })

  it('renders the correct shipping and delivery text and amount', () => {
    const wrapper = shallowMount(CartCard)
    const shippingElement = wrapper.findAll('.card__row--item').at(1)
    const shippingAmount = wrapper.findAll('.card__row--amount').at(1)

    expect(shippingElement.text()).toMatch('Shipping and delivery')
    expect(shippingAmount.text()).toMatch('$20.00')
  })

  it('renders the correct total text and value', () => {
    const wrapper = shallowMount(CartCard)
    const totalElement = wrapper.find('.card__row--total')
    const totalAmount = wrapper.find('.card__row--total-amount')

    expect(totalElement.text()).toMatch('Total')
    expect(totalAmount.text()).toMatch('$164.46')
  })

  it('renders the checkout button correctly', () => {
    const wrapper = shallowMount(CartCard)
    const checkoutButton = wrapper.find('.card__button')

    expect(checkoutButton.text()).toMatch('Checkout')
  })
})
