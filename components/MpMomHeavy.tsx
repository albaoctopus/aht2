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

const MpMomHeavy: NextPage = () => {
  const router = useRouter();


  // Connect your marketplace smart contract here (replace this address)
  const { contract: marketplace } = useContract(
    "0x8C16eBD1045A2D0944A1706bc28789d18c5C405b", // Your marketplace contract address here
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className="flex flex-row items-center justify-center flex-wrap gap-3">
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer className={styles.ybart}
                      src={listing.asset.image}
                      style={{
                        borderRadius: 18,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                        
                      }}
                    />
                    <h2>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.nftName}>{listing.asset.name}</a>
                      </Link>
                    </h2>

                    <p className={styles.nftPrice}>
                      <b>{"PRICE "}{listing.buyoutCurrencyValuePerToken.displayValue  }{" ETH  "}</b>
                      
                    </p>
                    <div>
                    <Link href="/create">
                    <a className={styles.nftButton} >
                     BUY NFT
                     </a>
                    </Link>
                  </div>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default MpMomHeavy;