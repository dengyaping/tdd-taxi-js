import fs from 'fs';

const path = './src/fixtures/testData.txt'; // text文件的路径
const data = fs.readFileSync(path, 'utf-8').toString();

function getkilometre(arr) {
  const newArr = arr.map(item => Number(item.replace(/[^0-9]/gi, '')));
  return newArr;
}

function calPrice(mile, time) {
  let price = 6;
  if (mile > 2) {
    price += (mile - 2) * 0.8;
  }
  if (mile > 8) {
    price += (mile - 8) * 0.5;
  }
  return price + time * 0.25;
}

function getResult(testDataFile) {
  const receiptArr = testDataFile.toString().split('\n');
  let result = '';
  receiptArr.forEach(data => {
    const mileAndTime = getkilometre(data.split(','));
    result += `收费${calPrice(mileAndTime[0], mileAndTime[1]).toFixed(0)}元\n`;
  });
  return result;
}

export default function main(testDataFile = data) {
  const receipt = getResult(testDataFile);
  return receipt;
}
