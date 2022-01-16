# Virtual Reality Non Fungible Token

This repo contains a prototype to integrate 360 video streaming into a dapp using an NFT collection deployed on Polygon as an entry ticket and livepeer as a decentralized video streaming protocol to connect fans with artists.

## Requirement

- [360 camera](https://www.pcmag.com/picks/the-best-360-cameras)
- [OBS](https://obsproject.com/)
- [Livepeer account](https://livepeer.com/)

## Clone the repo

```bash
git clone git@github.com:nestorbonilla/vrnft.git
```

```bash
yarn install            # install the dependencies
cd packages/gate-server # authentication server to verify signature
yarn start              # start a nodemon on port 3001
cd packages/react-web
yarn dev                # start web interface
```

# Steps

1. Connect your 360 vr camera to your computer either via cable or wifi, and start to deliver the signal to be captured by OBS.
2. Connect OBS with the signal from your 360 camera.
3. Go to livepeer and create a new api key, this will be required for the web interface.
4. Create a new stream in livepeer dashboard, get the stream key and set it into OBS.
5. Start streaming.
6. Run the web interface (if you want to deploy a new ERC1155 collection deploy the contract on hardhat package).
