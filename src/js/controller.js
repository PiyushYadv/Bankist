createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

const init = () => {
  // Fetch initial accounts
  AccountView.addHandler;
};
