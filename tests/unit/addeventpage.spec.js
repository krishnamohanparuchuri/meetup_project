import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import AddEventPage from "@/views/AddEventPage.vue"
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

        router.push("/addevent")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(AddEventPage).exists()).toBe(true)
    })
})