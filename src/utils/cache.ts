const TokenKey = 'App-Token';

export function getToken() {
  return uni.getStorageSync(TokenKey);
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token);
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey);
}

const UserId = 'UserId';

export function getUserId() {
  return uni.getStorageSync(UserId);
}

export function setUserId(userId) {
  return uni.setStorageSync(UserId, userId);
}

export function removeUserId() {
  return uni.removeStorageSync(UserId);
}
