function shoppingList(){
    const shoppingList = ('.shopping-list');
    const checkBtn = ('.shopping-item-toggle');
    const deleteBtn = ('.shopping-item-delete');
    const itemName = ('.shopping-item');
    
    $('ul').on('click', deleteBtn, function(event){
      $(this).parents('li').remove();
    })
  
    $('ul').on('click', checkBtn, function(){
      $(this).closest('li').find(itemName).toggleClass("shopping-item__checked");
    });
  
    $('button[type="submit"]').on('click', function(event){
      event.preventDefault();
      let newItem = $("#shopping-list-entry").val();
      $("ul").append(
        '<li><span class="shopping-item">' + newItem + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle"><span class="button-label">check</span></button>&nbsp;'+ '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
      )
    })
  
  }
  $(shoppingList);