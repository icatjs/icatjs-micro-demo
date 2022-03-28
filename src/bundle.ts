// @ts-ignore
import { registerSubapps, start } from '@icatjs/micro';

registerSubapps([
  {
    name: 'seeconf',
    entry: 'https://seeconf2019.antfin.com/',
    rules: [{ rule: '/seeconf' }],
    rootVars: { routerBase: '/seeconf', endType: 'none' },
  },
  {
    name: 'juejin',
    entry: 'https://juejin.cn/',
    rules: [{ rule: '/juejin', layout: 'seeconf > /seeconf', container: '#guests', endType: 'none' }],
    ignoreFileRules: ['analytics.js'],
  },
  {
    name: 'koubei',
    entry: 'https://www.koubei.com/',
    rules: [{ rule: '/' }],
  },
  {
    name: 'koubei_m',
    entry: 'https://render.koubei.com/p/f/koubei/index.html?appCh=koubei_m',
    rules: [{ rule: '/', endType: 'h5' }],
  },
]);

start();
