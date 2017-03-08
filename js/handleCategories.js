var categoriesToShow = []

function handleCategories(){
  addCategoryToTr()
  handleButton()
}

function addCategoryToTr(){
  $('tr').each(function(){
    var thisCategories = $(this).find('td:last').text()
    $(this).addClass(thisCategories)
   })
}

function handleButton(){
  $('#categories button').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
      categoriesToShow.splice(categoriesToShow.indexOf($(this).text()), 1)
    }else{
      $(this).addClass('active')
      categoriesToShow.push($(this).text())
    }
    showCategories(categoriesToShow)
  })
}

function showCategories(categories){
  if(categories.length !== 0){
    $('tr').hide()
    categories = '.' + categories.join('.')
    $(categories).show()
  }else{
    $('tr').show()
  }
}
