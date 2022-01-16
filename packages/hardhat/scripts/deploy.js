
const { ethers } = require("hardhat");

async function main() {

  const VRNFT = await ethers.getContractFactory("VRNFT");
  const vRNFT = await VRNFT.deploy(
    "VRNFTCollection", 
    "VRNFT",
    "https://ipfs.io/ipfs/QmVWo3tgb43R7TWH9C3QGvZ2pLpnacDEU1y9qhfAmMwuqm"
    );

  await vRNFT.deployed();
  console.log("Success! Contract was deployed to: ", vRNFT.address);

  await vRNFT.mint(1);

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
