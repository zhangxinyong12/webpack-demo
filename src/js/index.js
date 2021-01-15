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
}
export default initApp;
