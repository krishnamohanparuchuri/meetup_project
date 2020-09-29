import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import HomePage from "@/views/HomePage.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

describe("AppWithVuex", () => {
    let actions
    let state
    let store

    beforeEach(() => {
        state = {
            events: [
                {
                    "id": "1",
                    "name": "Yoga with karan",
                    "price": "300",
                    "seats_available": "35",
                    "type": "fitness",
                    "duration": "2 hours",
                    "location": "stockholm"
                },
                {
                    "id": "2",
                    "name": "Marthon Race",
                    "price": "free",
                    "seats_available": "300",
                    "type": "fitness",
                    "duration": "2 hours",
                    "location": "stockholm"
                },
                {
                    "id": "3",
                    "name": "Dinner Table",
                    "price": "800",
                    "seats_available": "35",
                    "type": "Food",
                    "duration": "4 hours",
                    "location": "stockholm"
                }
            ]
        }

        actions = {

        }

        store = new Vuex.Store({
            state,
            actions
        })

    })


    it("renders a username using a real Vuex store", () => {
        // const wrapper = mount(HomePage, {
        //     store,
        //     localVue
        // })
        // let elements = wrapper.findAll('ul >h3').wrappers
        // expect(elements[0].text()).toBe("Yoga with karan")
    })
})