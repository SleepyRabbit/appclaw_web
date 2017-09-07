/**
 * Created by houenxing on 17/9/3.
 */
"use strict";

import list from '@/components/list'
import detail from '@/components/detail'
import my from '@/components/my'
import my1 from '@/components/my2'
import mydoll from '@/components/my/mydoll'
import myaddress from '@/components/my/myaddress'
import addaddress from '@/components/my/addaddress'

export default [
    {
      path: '/',
      name: 'root',
      component: my
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/mydoll',
      name: 'mydoll',
      component: mydoll
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: myaddress
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: addaddress
    },
]
