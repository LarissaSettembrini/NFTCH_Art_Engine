const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 422,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_CocoDelight" },
      { name: "Hair_CocoDelight" },
      { name: "Tops_CocoDelight" },
      { name: "Shoes_CocoDelight" },
      { name: "Pants_CocoDelight" },
      { name: "Ladies_Eyes" },
      { name: "Ladies_Accessories" },
      { name: "Hand_CocoDelight" },
      { name: "Mouth_CocoDelight" },
    ],
  },
  {
    growEditionSizeTo: 845,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_GoldenBronze" },
      { name: "Hair_GoldenBronze" },
      { name: "Tops_GoldenBronze" },
      { name: "Shoes_GoldenBronze" },
      { name: "Pants_GoldenBronze" },
      { name: "Ladies_Eyes" },
      { name: "Ladies_Accessories" },
      { name: "Hand_GoldenBronze" },
      { name: "Mouth_GoldenBronze" },
    ],
  },
  {
    growEditionSizeTo: 1267,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_SandyTan" },
      { name: "Hair_SandyTan" },
      { name: "Tops_SandyTan" },
      { name: "Shoes_SandyTan" },
      { name: "Pants_SandyTan" },
      { name: "Ladies_Eyes" },
      { name: "Ladies_Accessories" },
      { name: "Hand_SandyTan" },
      { name: "Mouth_SandyTan" },
    ],
  },
  {
    growEditionSizeTo: 1689,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_GoldenShimmer" },
      { name: "Hair_GoldenShimmer" },
      { name: "Tops_GoldenShimmer" },
      { name: "Shoes_GoldenShimmer" },
      { name: "Pants_GoldenShimmer" },
      { name: "Ladies_Eyes" },
      { name: "Ladies_Accessories" },
      { name: "Hand_GoldenShimmer" },
      { name: "Mouth_GoldenShimmer" },
    ],
  }, 
  {
    growEditionSizeTo: 2111,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_Tanalicious" },
      { name: "Body_Tanalicious" },
      { name: "Mens_Eyes" },
      { name: "Mouth_Tanalicious" },
      { name: "Mens_Accessories" },
      { name: "Shoes_Tanalicious" },
    ],
  },
  {
    growEditionSizeTo: 2533,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_DustyBronze" },
      { name: "Body_DustyBronze" },
      { name: "Mens_Eyes" },
      { name: "Mouth_DustyBronze" },
      { name: "Mens_Accessories" },
      { name: "Shoes_DustyBronze" },
    ],
  },
  {
    growEditionSizeTo: 2955,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_DarkChocolate" },
      { name: "Body_DarkChocolate" },
      { name: "Mens_Eyes" },
      { name: "Mouth_DarkChocolate" },
      { name: "Mens_Accessories" },
      { name: "Shoes_DarkChocolate" },
    ],
  },
  {
    growEditionSizeTo: 3377,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Head_HazelnutGold" },
      { name: "Body_HazelnutGold" },
      { name: "Mens_Eyes" },
      { name: "Mouth_HazelnutGold" },
      { name: "Mens_Accessories" },
      { name: "Shoes_HazelnutGold" },
    ],
  },
  
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
