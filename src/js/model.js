import { AJAX } from "./helper.js";
import { API_URL } from "./config.js";

export const state = {
  account: {},
};

const createAccountObject = function (account) {
  return {
    owner: account.owner,
    movements: account.movements,
    interestRate: account.interestRate,
    pin: account.pin,
    movementsDates: account.movementsDates,
    currency: account.currency,
    locale: account.locale,
  };
};

export const loadAccount = async function (id) {
  try {
    const account = await AJAX(API_URL);
    state.account = createAccountObject(account);
  } catch (err) {
    throw err;
  }
};
