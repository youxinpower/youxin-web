import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "@/components/HomePage";
import Test1 from "@/components/Test1";
import Test2 from "@/components/Test1";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})
