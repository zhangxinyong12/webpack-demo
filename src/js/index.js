import add from './a';

function initApp() {
  add(1, 2);
  add(2, 2);
  add(2, 2);
  add(2, 2);

  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log('promise---');
      resolve('22');
    }, 3000);
  });
  p.then(() => {});
  console.log('initApp-------2234113');

  const addEle = document.querySelector('#add');
  addEle.addEventListener('click', () => {
    import(/* webpackChunkName:'add' */ /* webpackPrefetch:true */'./add.js').then((mul) => {
      console.log(mul.onAddNumber(1, 2));
    });
  });
}

export default initApp;
