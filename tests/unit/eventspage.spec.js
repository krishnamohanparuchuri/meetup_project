import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import EventsPage from "@/views/EventsPage.vue"
import routes from "@/router/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App.vue", () => {

    it("renders a child component AboutPage via routing", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router
        })

        router.push("/events")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(EventsPage).exists()).toBe(true)
    })
})