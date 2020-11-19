import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'
import dlinfo from '@/components/dlinfo'
import banci from '@/components/banci'
import crewRecord from '@/components/crewRecord'
import crewRecordDetails from '@/components/crewRecordDetails'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/dlinfo',
            name: 'dlinfo',
            component: dlinfo
        }
        ,
        {
            path: '/banci',
            name: 'banci',
            component: banci
        },
        {
            path: '/crewRecord',
            name: 'crewRecord',
            component: crewRecord
        },
        {
            path: '/crewRecordDetails',
            name: 'crewRecordDetails',
            component: crewRecordDetails
        }
    ]
})
