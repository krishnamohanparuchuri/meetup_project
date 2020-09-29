import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import App from "@/App.vue"
import VueRouter from "vue-router"
import HomePage from "@/views/HomePage.vue"
import routes from "@/router/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

describe("App.vue", () => {
    let actions
    let state
    let store

    beforeEach(() => {
        state = {
            events:
                [
                    {
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
                    },
                    {
                        id: "11",
                        name: "Water Diving",
                        price: "800",
                        seats_available: "50",
                        type: "Water games",
                        duration: "12 hours",
                        location: "stockholm",
                        image: "waterdiving1.jpg",
                        start_time: "10:00",
                        available_date: "2020-10-06"
                    },
                    {
                        id: "14",
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


                ]

        }

        actions = {
            loadEvents: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                myModule: {
                    state,
                    actions,
                }
            }
        })
    })

    it("renders a child component AboutPage via routing", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router,
            store
        })

        router.push("/")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(HomePage).exists()).toBe(true)
    })
    it('The total number of li components should be 12', async () => {
        // const length_li = 3
        // const wrapper = shallowMount(HomePage, { localVue, store })
        // await wrapper.vm.$nextTick();
        // const li_elements = wrapper.find('li')
        // console.log(li_elements)
        // expect(li_elements.length).toBe(length_li)
    })

    it('calls store action loadEvents when we render the Homepage', () => {
        const wrapper = shallowMount(HomePage, { store, localVue })

        expect(actions.loadEvents).toHaveBeenCalled()
    })
})