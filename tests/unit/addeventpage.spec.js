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
        }

        actions = {

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
})