import Dashboard from '../../assets/Dashboard'
import Product from '../../assets/Product'
import Customer from '../../assets/Customer'
import Income from '../../assets/Income'
import Promote from '../../assets/Promote'
import Help from '../../assets/Help'

export const sidebarData = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Dashboard,
    showIcon: false
  },
  {
    title: 'Product',
    url: '/product',
    icon: Product,
    showIcon: true
  },
  {
    title: 'Customers',
    url: '/customers',
    icon: Customer,
    showIcon: true
  },
  {
    title: 'Income',
    url: '/income',
    icon: Income,
    showIcon: true
  },
  {
    title: 'Promote',
    url: '/promote',
    icon: Promote,
    showIcon: true
  },
  {
    title: 'Help',
    url: '/help',
    icon: Help,
    showIcon: true
  }
]
