import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders h3 message with "Installed CLI Plugins"', () => {
    const msg = 'Installed CLI Plugins'
    const wrapper = shallowMount(HelloWorld, {
      propsdata: { msg }
    })
    const elements_h3 = wrapper.findAll('h3').wrappers
    expect(elements_h3[0].text()).toBe(msg)
  })
})
