const checkWin = (array) => {
  console.log(array);
  //Condition to Win in row 1
  if (array[0] == array[1] && array[1] == array[2] && array[2] != null)
    return array[0];
  //Condition to Win in row 2
  if (array[3] == array[4] && array[4] == array[5] && array[5] != null)
    return array[3];
  //Condition to Win in row 3
  if (array[6] == array[7] && array[7] == array[8] && array[8] != null)
    return array[6];
  //Condition to Win in column 1
  if (array[0] == array[3] && array[3] == array[6] && array[6] != null)
    return array[0];
  //Condition to Win in column 2
  if (array[1] == array[4] && array[4] == array[7] && array[7] != null)
    return array[1];
  //Condition to Win in column 3
  if (array[2] == array[5] && array[5] == array[8] && array[8] != null)
    return array[2];
  //Condition to Win in diagonal 1
  if (array[0] == array[4] && array[4] == array[8] && array[8] != null)
    return array[0];
  //Condition to Win in diagonal 2
  if (array[2] == array[4] && array[4] == array[6] && array[6] != null)
    return array[2];
  return null;
};
export default checkWin;
