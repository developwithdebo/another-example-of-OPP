var purchase2 = {
    Ps5: 200,
    Vat: 2.4,

totalAmount: function () {
    var calculation = purchase2.Ps5 * purchase2.Vat;
    console.log('toalPrice:', calculation);
}
}
purchase2.totalAmount();
