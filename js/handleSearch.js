function handleSearch(){
  $('input').keyup(function(e){
    var input = $(this).val()
    input = input.toLowerCase()
    
    var key = e.which
    if(key == 46 || key == 8){
      searchAllRows(input)
    }else{
      searchVisibleRows(input)      
    }
  })
}

function searchAllRows(input){
  if(categoriesToShow.length !== 0){
    var categories = '.' + categoriesToShow.join('.')
    $(categories).each(function(){
      var stringToMatch = createStringToMatch($(this))
      toggleTr(input, stringToMatch, $(this))
    })
  }else{
    $('tr').each(function(){
      var stringToMatch = createStringToMatch($(this))
      toggleTr(input, stringToMatch, $(this))
    })
  }
}

function searchVisibleRows(input){
  $('tr:visible').each(function(){
    var stringToMatch = createStringToMatch($(this))
    toggleTr(input, stringToMatch, $(this))
  })
}

function createStringToMatch(element){
  var row = []
  element.children().each(function(){
    row.push($(this).text())
  })
  row = row.join(' ')
  return row.toLowerCase()
}

function toggleTr(input, stringToMatch, element){
  if(stringToMatch.match(input)){
    element.show()
  }else{
    element.hide()
  }
}
