import Home from '@/pages/Home/Home.jsx'
import About from '@/pages/About/About.jsx'
import PersonalCenter from '@/pages/PersonalCenter/PersonalCenter.jsx'
import Login from '@/pages/Login/Login.jsx'
import ComplexButtonDemo from '@/pages/TestPage/ComplexButtonDemo.jsx'
import Mobx from '@/pages/TestPage/Mobx.jsx'

const Routes = [
  { path: '(/|/home)',
    component: Home
  },
  { path: '/about',
    component: About
  },
  { path: '(/testpage|/testpage/demo)',
    component: ComplexButtonDemo,
    exact: true
  },
  { path: '/testpage/mobx',
    component: Mobx
  },
  { path: '/personal-center',
    component: PersonalCenter,
    isRequireAuth: true // 是否需要登录
  },
  { path: '/login',
    component: Login
  },
]

export default Routes
