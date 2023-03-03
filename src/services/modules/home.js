import hyRequest from "..";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

export function getHomeRecommendData() {
  return hyRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getLongForData() {
  return hyRequest.get({
    url: '/home/longfor',
  })
}

export function getPlusData() {
  return hyRequest.get({
    url:'/home/plus',
  })
}