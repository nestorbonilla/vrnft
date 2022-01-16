import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import HLS from "hls.js";
import { ActiveLink, Button } from "@components/ui/common";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function ManageEvents() {

  const [info, setInfo] = useState(null);
  const [errorText, setErrorText] = useState("");  
  const [realUrl, setRealUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  // On first load, scrape the NFT info
  useEffect(() => {
    fetch("http://localhost:3001/info")
      .then((res) => res.json())
      .then((info) => setInfo(info));
  }, []);
  if (!info) {
    return <div />;
  }

  return (
    <>
      <div className="py-4">
        <MarketHeader />
        {/* <EventFilter /> */}
      </div>
      <section className="grid grid-cols-1">        
        <h3>This livestream is only viewable by holders of a certain NFT.</h3>
        <p>
          Token ID: <code>{info.tokenId}</code>
          <br />
          Contract Address: <code>{info.contractAddress}</code> <br />
          <ActiveLink href={`https://testnets.opensea.io/assets/${info.contractAddress}/${info.tokenId}`}>
              <a target="_blank">
              Link to OpenSea
              </a>
            </ActiveLink>          
        </p>
        <Button
          onClick={async () => {
            try {
              
              setErrorText("");
              const provider = new ethers.providers.Web3Provider(web3.currentProvider);
              // Prompt user for account connections
              const signer = provider.getSigner();
              const signed = await signer.signMessage(info.signString);
              const res = await fetch("http://localhost:3001/check", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  signature: signed,
                }),
              });
              const data = await res.json();
              if (data.error) {
                throw new Error(data.error);
              } else {
                setRealUrl(data.url);
              }
              setShowVideo(true);
            } catch (e) {
              setErrorText(e.message);
            }
          }}
        >
          Log in
      </Button>
      <h3 style={{ color: "red" }}>{errorText}</h3>
      {showVideo && (
        <video
          style={{ width: 1280, height: 720, backgroundColor: "black", marginBottom: "24px" }}
          ref={(ref) => {
            if (!ref) {
              return;
            }
            if (HLS.isSupported()) {
              var hls = new HLS({
                debug: true,
              });
              hls.loadSource(`${realUrl}/index.m3u8`);
              hls.attachMedia(ref);
              hls.on(HLS.Events.MEDIA_ATTACHED, function () {
                ref.muted = true;
                ref.play();
              });
            }
          }}
        />
        )}
      </section>
    </>
  )
}
ManageEvents.Layout = BaseLayout