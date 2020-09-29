import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import AddEventPage from "@/views/AddEventPage.vue"
import routes from "@/router/routes.js"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

describe("App.vue", () => {
    let actions
    let state
    let store

    beforeEach(() => {
        state = {
            event: {
                id: "10",
                name: "Water Diving",
                price: "800",
                seats_available: "50",
                type: "Water games",
                duration: "12 hours",
                location: "stockholm",
                image: "waterdiving1.jpg",
                start_time: "10:00",
                available_date: "2020-10-06"
            }
        }

        actions = {
            addEvent: jest.fn()
        }

        store = new Vuex.Store({
            state,
            actions
        })

    })

    it("renders a child component AboutPage via routing", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router,
            store
        })

        router.push("/addevent")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(AddEventPage).exists()).toBe(true)
    })

    it('calls store action addEvents when we render the Homepage', async () => {

        // const wrapper = shallowMount(AddEventPage, { store, localVue })
        // await wrapper.find('.event-form').trigger('click')
        // expect(actions.addEvent).toHaveBeenCalled()
    })

    it('check how many inputs fields avilable when we render the addeventpage', async () => {

        const wrapper = mount(AddEventPage, { store, localVue })
        const form_element = wrapper.findAll('.event-form>input').wrappers
        console.log(form_element)
        expect(form_element.length).toBeGreaterThan(8)
        expect(form_element.length).toBeLessThan(10)
        expect(form_element.length).toEqual(9)
    })
})