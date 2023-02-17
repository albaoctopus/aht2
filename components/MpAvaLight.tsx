import type { NextPage } from "next";

import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";


const MpAvaLight: NextPage = () => {
  const router = useRouter();


  // Connect your marketplace smart contract here (replace this address)
  const { contract } = useContract(
    "0x35D49894301C6451b86695b852EB28f8f2693e04", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading} =
  useActiveListings(contract);

return (
<div>
<main className="p-5">
    
    {!isLoading ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {nfts && nfts.map((nft) => {
                return (
                    <div key={nft.id} className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg ">
                        <MediaRenderer
                            src={nft.asset.image}
                            height="260px"
                            width="260px"
                            className="w-full h-91 object-cover rounded-3xl border-4 border-red-600 my-5"
                        />
                        <div className="p-5 flex-col rounded-3xl border-4 border-red-600 flex  justify-between">
                            <span>
                            <p className="min-w-fit my-1 bg-red-800 text-white text-center text-lg font-extrabold rounded-3xl py-2 px-4 border-2 border-red-600 transition duration-200 ease-in-out hover:bg-opacity-75 focus:outline-none">{nft.asset.name}</p>
                            <p className="my-1 bg-red-800 text-white text-center text-lg font-extrabold rounded-3xl py-2 px-4 border-2 border-red-600 transition duration-200 ease-in-out hover:bg-opacity-75 focus:outline-none">
                                Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC
                            </p>
                            </span>
                            <button
                                className="min-w-fit my-1 bg-red-800 text-white text-center text-lg font-extrabold rounded-3xl py-2 px-4 border-2 border-red-600 transition duration-200 ease-in-out hover:bg-opacity-75 focus:outline-none"
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
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="text-center text-3xl">Loading...</div>
    )}
</main>

</div>
);
  };

export default MpAvaLight;