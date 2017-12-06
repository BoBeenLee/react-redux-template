
const Counter = {
  getCounter: () => {
    return new Promise((resolve, reject) => {
      console.log('fetch Counter');
      window.setTimeout(() => resolve(3), 5000);
    });
  }
};

export default {
  Counter
};