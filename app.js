(function(){
    var nta= {nom: 'NAVAS', prenom:'Thierry'};
    var gem = { name: 'Azurite', price: 2.95, descriptif:'C\'est le descriptif du produit', canPurchase: true,
    soldOut: false};
  var app = angular.module('gemStore', []);
  app.controller('NomController', function(){
    this.lesnoms = nta;
  });
app.controller('StoreController', function(){
    this.product = gem;
  });
})();

