const BeerStyleRouter = require("express").Router();
const BeerStyleController = require("../controllers/BeerStyleController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const axios = require("axios");
const qs = require("qs");

const SPOTIFY_API_URL = process.env.SPOTIFY_API_URL;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getAccessToken() {
  const response = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
  });
  console.log(response.data.access_token);
  return response.data.access_token;
}

function escolherEstilo(numero) {
  let estilos = ["pop", "hip hop", "rock", "indie", "electronic", "country", "r&b", "jazz", "latin", "classical"];
  let indice = Math.floor(numero * estilos.length)% 10;
  return estilos[indice];
}

async function searchTrackByStyle(maxtemperature, accessToken) {
  let estilo = escolherEstilo(maxtemperature);
  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
      params: {
        q: `genre:"${estilo}"`,
        type: "track",
        limit: 1,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200 && response.data.tracks.items.length > 0) {
      return response.data.tracks.items[0];
    } else {
      throw new Error("No tracks found.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to search for tracks.");
  }
}
//CRUD -> CREATE, READ, UPDATE AND DELETE
BeerStyleRouter.post("/beerstyle", BeerStyleController.create);
BeerStyleRouter.get("/beerstyle", BeerStyleController.read);

BeerStyleRouter.get("/beerstyle_temperature", async (req, res) => {
  const temperature = req.query.temperature;
  if (!temperature) {
    return res.status(400).send("Temperature is required.");
  }
  const beerStyle = await BeerStyleController.findBeerStyleByTemperature(
    Number(temperature)
  );

  try {
    console.log("Entrei no try")
    const accessToken = await getAccessToken();
     const track = await searchTrackByStyle(beerStyle.maxtemperature, accessToken);
     for (const propriedade in beerStyle.dataValues) {
      track[propriedade] = beerStyle[propriedade];
    }

    return res.send(track);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to search for track.");
  }
});

BeerStyleRouter.delete("/beerstyle", BeerStyleController.deleteAll);

// BeerStyleRouter.patch('/beerstyle/:id', BeerStyleController.update);

// BeerStyleRouter.delete('/beerstyle/:id', BeerStyleController.delete);

module.exports = BeerStyleRouter;
