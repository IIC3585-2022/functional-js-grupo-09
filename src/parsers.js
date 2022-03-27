import _ from "lodash";

export const pointsParser = (pointData) => {
  if (pointData === 'DB'){
    return 50;
  };
  if (pointData === 'SB'){
    return 25;
  };
  return pointData[0] * pointData[1];
};

export const playParser = (play) => {
  let play_array = play.replace(/^\[|\]$/, "").split(',')
  if (play_array.length === 2){

    return _.map(play_array, (number) => parseInt(number));
  };
  return play_array[0];
}