var itemController = {}

itemController.index = function(ctx, next) {

  item.fetchAll(ctx, next)
    .then(function(){
      ctx.allItems = allItems
      next();
    })
}

itemController.save = function(name, price) {
  var newItem = new item.Constructor(name, price);
  newItem.doAllTheMethods();
  item.save(newItem)
  itemView.renderNewItem(newItem)
}
