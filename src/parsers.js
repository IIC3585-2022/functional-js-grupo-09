export const pointsParser = (pointData) => {
  if (pointData === 'DB'){
    return 50;
  };
  if (pointData === 'SB'){
    return 25;
  };
  return pointData[0] * pointData[1];
};
