import type { NextPage } from "next";
import styles from "../styles/Market.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";


const Marketnew: NextPage = () => {
  const router = useRouter();


  // Connect your marketplace smart contract here (replace this address)
  const { contract } = useContract(
    "0x8C16eBD1045A2D0944A1706bc28789d18c5C405b", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading} =
  useActiveListings(contract);

return (
<div>
<main>
    <h1>Market</h1>
    {!isLoading ? (
        <div>
            {nfts && nfts.map ((nft) => {
                return (
                    <div>
                        <MediaRenderer
                            src={nft.asset.image}
                            height="200px"
                            width="200px"
                            />
                            <p>{nft.asset.name}</p>
                            <p>Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC</p>
                            <button
                                onClick={async () => {
                                    try {
                                        await contract?.buyoutListing(BigNumber.from(nft.id),1);
                                    } catch (error) {
                                        console.error(error);
                                        alert(error)
                                    }
                                }}
                             >   
                               Buy Now 
                            </button>
                            </div>
                );
            
            })}
        </div>
            ) : (
                <div>Loading...</div>
            )}
</main>
</div>
);
  };

  export default Marketnew;