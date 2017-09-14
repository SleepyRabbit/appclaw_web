/**
 * Created by houenxing on 17/9/3.
 */
"use strict";

import list from '@/components/list'
import detail from '@/components/detail'

import my from '@/components/my'
import my_home from '@/components/my/home'
import my_doll from '@/components/my/doll'
import my_coin from '@/components/my/coin'
import my_record from '@/components/my/record'
import my_recharge from '@/components/my/recharge'

import my_about from '@/components/my/about'
import my_about_home from '@/components/my/about/home'

import my_address from '@/components/my/address'
import my_address_home from '@/components/my/address/home'
import my_address_add from '@/components/my/address/add'
import my_address_edit from '@/components/my/address/edit'

export default [
    // {
    //   path: '/',
    //   name: 'root',
    //   component: my
    // },
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
      redirect: {path: '/my/home'},
      children: [
        {
          path: 'home',
          name: 'my_home',
          component: my_home
        },
        {
          path: 'doll',
          name: 'my_doll',
          component: my_doll
        },
        {
          path: 'coin',
          name: 'my_coin',
          component: my_coin
        },
        {
          path: 'record',
          name: 'my_record',
          component: my_record
        },
        {
          path: 'recharge',
          name: 'my_recharge',
          component: my_recharge
        },
        {
          path: 'address',
          name: 'my_address',
          component: my_address,
          redirect: {path: '/my/address/home'},
          children: [
            {
              path: 'home',
              name: 'my_address_home',
              component: my_address_home
            },
            {
              path: 'add',
              name: 'my_address_add',
              component: my_address_add
            },
            {
              path: 'edit',
              name: 'my_address_edit',
              component: my_address_edit
            }
          ]
        },
        {
          path: 'about',
          name: 'my_about',
          component: my_about,
          redirect: {path: '/my/about/home'},
          children: [
            {
              path: 'home',
              name: 'my_about_home',
              component: my_about_home
            },
          ]
        },
      ]
    },
    {
      path: '*',
      redirect: {path: '/my/home'},
    },
]
