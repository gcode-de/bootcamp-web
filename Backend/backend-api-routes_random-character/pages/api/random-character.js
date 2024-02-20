import Chance from "chance";
const chance = new Chance();

export default function handler(request, response) {
  const character = {
    prefix: chance.prefix(),
    firstName: chance.first(),
    lastName: chance.last(),
    twitter_name: chance.twitter(),
    geohash: chance.geohash(),
    avatar: chance.avatar({ protocol: "https" }),
    gender: chance.gender(),
  };

  response.status(200).json(character);
}
