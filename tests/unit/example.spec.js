import { shallowMount, createLocalVue } from '@vue/test-utils'
import AboutPage from '@/views/AboutPage.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('testing for simple data to render from About pages in vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
    }

    actions = {

    }

    store = new Vuex.Store({
      state,
      actions
    })

  })
  it('renders props.msg when passed', () => {
    const msg = 'About us'
    const wrapper = shallowMount(AboutPage, {
      localVue,
      store
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders h3 message with "Installed CLI Plugins"', () => {
    const msg = 'Why we started Meetups'
    const msg2 = 'Build a profile relevant in your field of interest'
    const wrapper = shallowMount(AboutPage, {
      localVue, store
    })
    const elements_h2 = wrapper.findAll('h2').wrappers
    console.log(elements_h2)
    expect(elements_h2[0].text()).toBe(msg)
    expect(elements_h2[1].text()).toBe(msg2)
  })
})
