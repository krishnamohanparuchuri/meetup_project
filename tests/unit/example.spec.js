import { shallowMount } from '@vue/test-utils'
import AboutPage from '@/views/AboutPage.vue'
import HomePage from '@/views/HomePage.vue'

describe('testing for simple data to render from home and about pages in vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(AboutPage)
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders h3 message with "Installed CLI Plugins"', () => {
    const msg = 'This is HomePage'
    const wrapper = shallowMount(HomePage, {
      propsdata: { msg }
    })
    const elements_h1 = wrapper.find('h1')
    expect(elements_h1.text()).toBe(msg)
  })
})
