/**
 * Created by houenxing on 17/9/3.
 */
"use strict";

import list from '@/components/list'
import detail from '@/components/detail'
import my from '@/components/my'
import mydoll from '@/components/my/mydoll'
import myrecord from '@/components/my/myrecord'
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
      component: my,
      // children: [
      //   {
      //     path: '/my_doll',
      //     name: 'mydoll',
      //     component: mydoll
      //   },
      // ]
    },
    {
      path: '/my_doll',
      name: 'mydoll',
      component: mydoll
    },
    {
      path: '/my_record',
      name: 'myrecord',
      component: myrecord
    },
    {
      path: '/my_address',
      name: 'myaddress',
      component: myaddress
    },
    {
      path: '/add_address',
      name: 'addaddress',
      component: addaddress
    },
]
