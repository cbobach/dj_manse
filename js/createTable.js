function createElement(element){
  var tr = '<tr>'
  for(var i = 0; i < element.length; i++){
    tr += '<td>' + element[i] + '</td>'
  }
  tr += '</tr>'
  return tr
}

//Working for uniform elements in one dimention array
function createTable(elements, elementSize, parentElement){
  var table = '<table>'
  for(var i = 0; i < elements.length; i = i + elementSize){
    var elementArray = elements.slice(i, i + elementSize)
    var element = createElement(elementArray)
    table += element
  }
  
  table += '</table>'
  parentElement.html(table)
}
