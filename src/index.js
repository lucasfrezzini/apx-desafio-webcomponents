function createData(data) {
  let newData = {};
  const services = [];
  const works = [];
  for (let index = 0; index < data.items.length; index++) {
    const item = data.items[index];
    if (item.sys.contentType.sys.id == "bio") {
      newData = {
        bio: item.fields,
      };
    } else if (item.sys.contentType.sys.id == "services") {
      services.push(item.fields);
    } else {
      works.push(item.fields);
    }
  }
  return (newData = {
    ...newData,
    services: services,
    works: works,
  });
}

function createAssets(data, assets) {
  const dev = assets.items.find(
    (item) => item.sys.id == data.bio.thumbnail[0].sys.id
  );
  const dev2 = assets.items.find(
    (item) => item.sys.id == data.bio.thumbnail[1].sys.id
  );
  data.bio = {
    ...data.bio,
    srcIMG: dev.fields.file.url,
    srcIMG2: dev2.fields.file.url,
  };
  for (let index = 0; index < data.services.length; index++) {
    const img = assets.items.find(
      (item) => item.sys.id == data.services[index].thumbnail.sys.id
    );
    if (img) {
      data.services[index] = {
        ...data.services[index],
        srcIMG: img.fields.file.url,
      };
    }
  }
  for (let index = 0; index < data.works.length; index++) {
    const img = assets.items.find(
      (item) => item.sys.id == data.works[index].thumbnail.sys.id
    );
    if (img) {
      data.works[index] = {
        ...data.works[index],
        srcIMG: img.fields.file.url,
      };
    }
  }
  return data;
}

async function main() {
  const SPACE_ID = "thxl3y3zknxi";
  const API_KEY = "2kdVQ8l8zBZPv0PzPUCr58AgSy2Rkkx4vhwu2vrPr5g";
  const ENVIRONMENT = "master";
  const endpointAll = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${API_KEY}`;
  const endpointAllAssets = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets?access_token=${API_KEY}`;

  const responseData = await fetch(endpointAll);
  const data = await responseData.json();
  const responseAssets = await fetch(endpointAllAssets);
  const assets = await responseAssets.json();

  const allData = createAssets(createData(data), assets);

  const index = document.body.classList.contains("index");
  const showData =
    document.body.classList.contains("portfolio") ||
    document.body.classList.contains("services");
  const contact = document.body.classList.contains("contact");

  Navbar(document.body);
  if (index) {
    Hero(
      document.body,
      `Full Stack <span>Developer Jr</span>`,
      allData.bio.srcIMG
    );
    Bio(document.body, allData);
    ShowInfo(document.body, allData);
    Contact(document.body);
  }
  if (showData) {
    document.body.classList.contains("portfolio")
      ? Hero(document.body, `Mis <span>Proyectos</span>`, allData.bio.srcIMG)
      : Hero(document.body, `Mis <span>Servicios</span>`, allData.bio.srcIMG2);
    ShowInfo(document.body, allData);
  }
  if (contact) {
    Contact(document.body);
  }

  Footer(document.body);
}

main();
