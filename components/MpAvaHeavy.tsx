import type { NextPage } from "next";
import Link from "next/link";
import { MediaRenderer, useActiveListings, useContract } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";

const MpAvaHeavy: NextPage = () => {
  const router = useRouter();

  const { contract } = useContract(
    "0x71200776E9C84AE5D491324640652870CE0E7e92", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading } = useActiveListings(contract);

  return (
    <div className="container m-auto">
      <main>
        {!isLoading ? (
          <div className="grid grid-cols-3 gap-4">
            {nfts &&
              nfts.map((nft) => {
                return (
                  <div key={nft.id} className="relative rounded-lg overflow-hidden">
                    <MediaRenderer
                      className="w-full h-64 object-cover"
                      src={nft.asset.image}
                    />
                    <div className="px-6 py-4">
                      <div className="font-medium text-lg mb-2">
                        {nft.asset.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        Price: {nft.buyoutCurrencyValuePerToken.displayValue}{" "}
                        MATIC
                      </p>
                    </div>
                    <button
                      className="bg-indigo-500 text-white py-2 px-4 rounded-lg absolute bottom-0 right-0 mr-4 mb-4"
                      onClick={async () => {
                        try {
                          await contract?.buyoutListing(
                            BigNumber.from(nft.id),
                            1
                          );
                        } catch (error) {
                          console.error(error);
                          alert(error);
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
          <div className="text-center">Loading...</div>
        )}
      </main>
    </div>
  );
};

export default MpAvaHeavy;
