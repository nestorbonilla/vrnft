const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (name, web3) => {
  // const contractList = await fetch("/contracts/contracts.js").then((x) => { return x});
  // console.log("name: ", contractList);
  //const abi = await fetch(`/contracts/${name}.abi.json`);
  // console.log("abi: ", abi);

  const fullContract = await fetch(`/artifacts/contracts/${name}.sol/${name}.json`);
  const address = "0x432d32BAB6E8f1b01d1DD3Dab8d2d5e3757317Ab";
  const contractJson = await fullContract.json();
  const abiJson = contractJson.abi;
  // const address = await fetch(`/contracts/${name}.address.json`);
  // console.log("abi: ", await contract.json());
  
  // const addressJson = await address.json();

  
  // console.log("address: ", addressJson);
  let contract = null

  try {
    // contract = new web3.eth.Contract(
    //   Artifact.abi,
    //   Artifact.networks[NETWORK_ID].address
    // )
    contract = new web3.eth.Contract(
      abiJson,
      address
    )
    // console.log("contract: ", contract);
  } catch {
    console.log(`Contract ${name} cannot be loaded`)
  }

  return contract;
}