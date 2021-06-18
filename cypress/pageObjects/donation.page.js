const donationPage = {
  elements: {
    blocks: {
      get donationAmountBlock() {
        return 'div.panel-body';
      },

      get amountTile() {
        return 'li[id="tn-opg-amount-btn-50"]';
      },

      get donationForm() {
        return 'fieldset.tn-fieldset';
      },


    },
    inputs: {

    },
    buttons: {

    }
  }
}

module.exports = donationPage;