/**
 * Created by houenxing on 17/9/3.
 */
"use strict";

import list from '@/components/list'
import detail from '@/components/detail'
import my from '@/components/my'
import my1 from '@/components/my1'
import mydoll from '@/components/my/mydoll'

export default [
    {
      path: '/',
      name: 'my1',
      component: my1
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
]
