// import html from '<../nepmesek.html';

class MeseXmlHandler {
  constructor() {
    this.xmlDoc;
  }

  loadXMLDoc() {
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        this.xmlDoc = xml.responseXML;
        // meseSearch(this, 'három');
      }
    };
    let url = './xml/nepmesek.xml';
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  meseSearch(searchWord) {
    let meseIterator;
    let table = '<tr><th>Cím</th></tr>';
    let mese = xmlDoc.getElementsByTagName('div1');
    for (meseIterator = 0; meseIterator < mese.length; meseIterator++) {
      nodeText = mese[meseIterator].getElementsByTagName('head')[0].childNodes[0].nodeValue;
      if (nodeText.includes(searchWord))
        table += '<tr onclick=\'displayMese(' + meseIterator + ')\'><td>' +
          mese[meseIterator].getElementsByTagName('head')[0].childNodes[0].nodeValue +
          '</td></tr>';
    }
    document.getElementById('demo').innerHTML = table;
  }

  displayAllCim() {
    let i;
    let table = '<tr><th>Cím</th></tr>';
    let x = xmlDoc.getElementsByTagName('div1');
    for (i = 0; i < x.length; i++) {
      table += '<tr onclick=\'displayMese(' + i + ')\'><td>' +
        x[i].getElementsByTagName('head')[0].childNodes[0].nodeValue +
        '</td></tr>';
    }
    document.getElementById('demo').innerHTML = table;
  }

  displayMese(i) {
    let x = xmlDoc.getElementsByTagName('div1');
    let meseText = x[i].getElementsByTagName('p');
    let allMeseText = x[i].getElementsByTagName('head')[0].childNodes[0].nodeValue + '<br></br>';
    for (iter = 0; iter < meseText.length; iter++) {
      allMeseText += meseText[iter].childNodes[0].nodeValue;
    }
    document.getElementById('demo').innerHTML = '<button type=\'button\' onclick=\'displayAllCim()\'>Vissza</button></br>' + allMeseText;
  }
}

let meseTar = new MeseXmlHandler();
meseTar.loadXMLDoc();
meseTar.displayAllCim();

