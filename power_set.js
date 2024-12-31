function concat(array1, array2) {
  const concatinated = [];

  for (let index = 0; index < array1.length; index++) {
    concatinated.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatinated.push(array2[index]);
  }

  return concatinated;
}

function generatePowerSet(arr) {
  const powerSets = [[]];

  for (let column = 0; column < arr.length; column += 1) {
    const limit = powerSets.length;

    for (let row = 0; row < limit; row += 1) {
      powerSets.push(concat(powerSets[row], [arr[column]]));
    }
  }

  return powerSets;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let column = 0; column < array1.length; column++) {
    for (let row = 0; row < array2.length; row++) {
      if (array1[column][row] !== array2[column][row]) {
        return false;
      }
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function displayResult(mark, array, expected, actual) {
  console.log(mark + "Input 👉 ", array);
  console.log("\nExpected 👉 ", expected, "Actual👉", actual, '\n**-------**');
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testGeneratePowerSet(array, expected) {
  const actual = generatePowerSet(array);
  const areArrayEqual = areEqual(expected, actual);
  const mark = getMark(areArrayEqual);

  displayResult(mark, array, expected, actual);
}

function testAllGeneratePowerSet() {
  testGeneratePowerSet([], [[]]);
  testGeneratePowerSet([1], [[], [1]]);

  testGeneratePowerSet([1, 2], [[], [1], [2], [1, 2]]);
  testGeneratePowerSet([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  testGeneratePowerSet([1, 2, 3, 4], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]);
}

testAllGeneratePowerSet();