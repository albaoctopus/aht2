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


const MpAvaFeather: NextPage = () => {
  const router = useRouter();


  // Connect your marketplace smart contract here (replace this address)
  const { contract } = useContract(
    "0xF154903A30c13084C24026e5543b3C223531846b", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading} =
  useActiveListings(contract);

return (
<div >
<main className={styles.container}>
    
    {!isLoading ? (
        <div className={styles.listingGrid}>
            {nfts && nfts.map ((nft) => {
                return (
                    <div className={styles.listingShortView}>
                        <MediaRenderer className={styles.ybart}
                            src={nft.asset.image}
                            style={{
                                borderRadius: 18,
                            height:"350px",
                            width:"350px",

                            }}
                            
                            />
                            <p className={styles.nftName}>{nft.asset.name}</p>
                            <p className={styles.nftPrice}>Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC</p>
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
                               <p className={styles.nftName}>Buy Now </p>
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

  export default MpAvaFeather;