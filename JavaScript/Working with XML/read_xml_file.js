const readXML = async () => {
  const response = await fetch("https://www.w3schools.com/xml/note.xml");
  const xmlData = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(str, "application/xml");
  console.log(xmlDoc);
};

readXML();
