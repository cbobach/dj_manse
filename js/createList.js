function createListElement(value, type){
  var li = '<li>'
  li += '<' + type + '>' + value + '</' + type + '>'
  li += '</li>'
  return li
}

function createUnorderedList(elements, type, parentElement){
  var ul = '<ul>'
  for(var i = 0; i < elements.length; i++){
    ul += createListElement(elements[i], type)
  }
  ul += '</ul>'
  parentElement.html(ul)
}
