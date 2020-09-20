import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import EventsPage from '@/views/EventsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import AddEventPage from '@/views/AddEventPage.vue'
import EventDescription from '@/views/EventDescription.vue'



const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/events',
        name: 'EventsPage',
        component: EventsPage
    },
    {
        path: '/events/:id',
        name: 'EventDescription',
        component: EventDescription
    },
    {
        path: '/addevent',
        name: 'AddEventPage',
        component: AddEventPage
    },
]
export default routes;