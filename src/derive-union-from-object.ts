/**
 * From Matt Pocock
 * https://twitter.com/mpocock1/status/1497262298368409605
 */

const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type FruitCounts = typeof fruitCounts;

type SingleFruitCount = {
  [K in keyof FruitCounts]: {
    [I in K]: number;
  };
}[keyof FruitCounts];

/**
 * From Matt Pocock
 * https://twitter.com/mpocock1/status/1498284926621396992
 */

type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

type EnityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

const entityWithId: EnityWithId = {
  type: "comment",
  commentId: "foo",
};
