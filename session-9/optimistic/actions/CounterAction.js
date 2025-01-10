"use server";

const delay = async () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if(rand <= 0.5){
        resolve();
      }
      reject();
    }, 2000);
  });
};

let count = 10;

export const addCount = async () => {
  await delay();
  return ++count;
};

export const readCount = async () => {
  return count;
};
