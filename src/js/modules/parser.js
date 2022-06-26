const parser = () => {
const body = document.querySelector('body');
let textNodes = [];
function recurcy(element) {
  element.childNodes.forEach(node => {
    // console.log(node);
    // if (element.childNodes.length > 1) {
    //   recurcy(node);
      
    // }
    // if (node.nodeName === "#text") {return;}
    if (node.nodeName.match(/^H\d/)) {
      // console.log(node);
      textNodes.push(node.textContent.trim());
      // const obj = {
      //   header: node.nodeName,
      //   content: node.textContent
      // };
      
    } else {
      
      recurcy(node);
    }
  });
}
recurcy(body);
// console.log(textNodes);
// return textNodes;

// fetch('url', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify(textNodes)
// })
// .then(response => response.json())
// .then(json => console.log(json));


};
export default parser;