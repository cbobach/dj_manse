function main(){
  var songInfoSize = 4
  var parentElementTable = $('#content')
  createTable(songs, songInfoSize, parentElementTable)

  var elementType = 'button'
  var parentElementList = $('#categories')
  createUnorderedList(categories, elementType, parentElementList)
  
  handleCategories()
  handleSearch()
}
