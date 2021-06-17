const homePage = {
  elements: {

    blocks: {
      get userName() {
        return 'div.name > span.first-name';
      },

      get dropdowArrow() {
        return 'span.down';
      },

      get logoutLink() {
        return 'a.logout';
      },

      get userStatus() {
        return 'userStatus';
      }

    },

    buttons: {
      get loginButton() {
        return 'div.right-block > a.button';
      }

    },

    inputs: {

    },

  }
}

module.exports = homePage;