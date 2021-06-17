const tnewLoginPage = {
  elements: {
    buttons: {
      get singIn() {
        return ('button[id="tn-login-button"]');
      }

    },
    inputs: {

      get emailField() {
        return ('input[id="PatronAccountLogin_Username"]');
      },

      get passwordField() {
        return ('input[id="PatronAccountLogin_Password"]');
      },

    }

  }

}

module.exports = tnewLoginPage;