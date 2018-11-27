import dataSource from '../fixtures/hackerNewsSource';

export default {
   get: url => new Promise(response => response(dataSource[url]))
}
