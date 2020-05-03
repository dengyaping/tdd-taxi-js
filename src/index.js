import fs from 'fs';

const path = './src/fixtures/testData.txt'; // text文件的路径
const data = fs.readFileSync(path, 'utf-8').toString();

function getNumberInArray(arr) {
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
  const dataArray = testDataFile.toString().split('\n');
  let result = '';
  dataArray.forEach(data => {
    const mileAndTime = getNumberInArray(data.split(','));
    result += `收费${calPrice(mileAndTime[0], mileAndTime[1]).toFixed(0)}元\n`;
  });
  return result;
}

export default function main(testDataFile = data) {
  /* TODO
    1. testDataFile为fixtures文件夹下的测试数据文件名，例如传入的值为"testData.txt"，注意并不包含文件路径。
    2. 你写的程序将把testDataFile作为参数加载此文件并读取文件内的测试数据，并对每条测试数据计算结果。
    3. 将所有计费结果拼接并使用\n分割，然后保存到receipt变量中。
   */
  const receipt = getResult(testDataFile);
  return receipt;
}
