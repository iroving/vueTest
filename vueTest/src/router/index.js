import Vue from 'vue'
import Router from 'vue-router'
import mainurl from '@/components/mainurl'
import test from '@/components/test'
import docSearch from '@/components/docsearch/docSearch'
import dataQualitySummary from '@/components/quality/dataQualitySummary'
import emrQuality from "../components/quality/emrQuality";
import cdrQuality from "../components/quality/cdrQuality";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/main'
    },
    {
      path: '/main', name: 'main', component: mainurl,
      children: [
        { path: '/test', name: 'test', component: test }
      ]
    },
    {
      path: '/docSearch', name: 'docSearch', component: docSearch
    },
    {
      path: '/dataQualitySummary', name: 'dataQualitySummary', component: dataQualitySummary
    },
    {
      path: '/emrQuality', name: 'emrQuality', component: emrQuality
    },
    {
      path: '/cdrQuality', name: 'cdrQuality', component: cdrQuality
    },

  ],
})
