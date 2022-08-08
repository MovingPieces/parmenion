function controlContainer(parent, text, child = 0) {
  let div = createDiv(text + ':');
  div.parent(parent);
  if(child) {
    child.parent(div);
    let value = createDiv(child.value().toString());
    value.parent(div);
    child.input(() => value.elt.innerText = child.value().toString());
  }
  return div;
}
