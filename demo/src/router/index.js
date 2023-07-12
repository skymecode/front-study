import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content'
import User from '../components/user'
import Child from '../components/child'
Vue.use(Router);
const UserProfile = { template: '<div>Profile</div>' }
const UserHome = { template: '<div>Home</div>' }
export default new Router({
  
  routes:[{
    path:"/content",
    component:Content,
    children: [
      { path: 'child', component: Child },
    ]
  },{ path: '/user/:id', component: User, 
  children: [
    // UserHome will be rendered inside User's <router-view>
    // when /user/:id is matched
    { path: '', component: UserHome },
    
    // UserProfile will be rendered inside User's <router-view>
    // when /user/:id/profile is matched
    { path: 'profile', component: UserProfile },

    // UserPosts will be rendered inside User's <router-view>
    // when /user/:id/posts is matched
    
  ] },]
 
})