// @ts-ignore
import { registerSubapps, start } from '@icatjs/micro';

registerSubapps([
  {
    name: 'seeconf',
    entry: 'https://seeconf2019.antfin.com/',
    rules: [{ rule: '/seeconf' }],
    rootVars: { routerBase: '/seeconf' },
  },
  {
    name: 'juejin',
    entry: 'https://juejin.cn/',
    rules: [{ rule: '/juejin', layout: 'seeconf > /seeconf', container: '#guests' }],
    ignoreFileRules: ['analytics.js'],
  },
  {
    name: 'koubei',
    entry: 'https://www.koubei.com/',
    rules: [{ rule: '/' }],
  },
]);

start();
