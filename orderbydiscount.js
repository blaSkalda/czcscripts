var tilesContainer = $("#tiles");
var tiles = $("#tiles .new-tile");
var data = [];
for (let index = 0; index < tiles.length; index++) {
   var itemData = $(tiles[index]).data("ga-impression"); 
   var decimalReplace = /\D/ig; 
    var discount = $(tiles[index]).find(".special-sticker .price-vatin")[0]?.innerHTML.replaceAll(decimalReplace, '');
   var prevPrice = $(tiles[index]).find(".price-before .price-vatin")[0]?.innerHTML.replaceAll(decimalReplace, '');
   itemData.prevPrice = prevPrice ? parseFloat(prevPrice) : itemData.price;
    itemData.discount = discount ? parseFloat(discount) : 0;
   itemData.tileRef= $(tiles[index]);
   data.push(itemData);
}
tilesContainer.empty();
data.sort((a, b) => ((a.discount > b.discount) ? -1 : ((a.discount < b.discount) ? 1 : 0)));
data.forEach(d => tilesContainer.append(d.tileRef))
