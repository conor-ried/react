const choice = (a) => {
    let randomChoice = Math.floor(Math.random() * a.length);
    return a[randomChoice];
} ;
const remove = (c,d) => {
    for (let i = 0; i < d.length; i++) {
      if (d[i] === c) {
        return [...d.slice(0, i), ...d.slice(i + 1)]
      }
    }
  }
  


export { choice, remove }