var itemController = {}

itemController.index = function() {
  item.fetchAll().then(function(){
    itemView.init();
  })
  item.detectNewItem()
}

itemController.save = function(name, price) {
  var newItem = new item.Constructor(name, price);
  newItem.doAllTheMethods();
  item.save(newItem)
  itemView.renderNewItem(newItem)
}
