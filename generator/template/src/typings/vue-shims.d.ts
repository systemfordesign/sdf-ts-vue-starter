/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-21 10:59:18
 * @LastEditTime: 2019-09-11 18:54:22
 * @LastEditors: Devin Shi
 * @Description: 
 */

import Vue from 'vue'
// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $bus: any
    $lodash: any
    $request: any
    $sessionStorage: any
    $localStorage: any
    $cookie: any
  }
}

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    _bus: any
    _lodash: any
    request: any
    _sessionStorage: any
    _localStorage: any
    _cookie: any
  }
}

