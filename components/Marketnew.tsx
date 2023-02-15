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


const Marketnew: NextPage = () => {
  const router = useRouter();


  // Connect your marketplace smart contract here (replace this address)
  const { contract } = useContract(
    "0x9D9b5029b02075025929797D54509552E7DC8E4e", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading} =
  useActiveListings(contract);

return (
<div>
<main className="p-5 border-4 border-red-500">
    
    {!isLoading ? (
        <div className="border-4 border-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {nfts && nfts.map((nft) => {
                return (
                    <div key={nft.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border-4 border-orange-500">
                        <MediaRenderer
                            src={nft.asset.image}
                            height="300px"
                            width="300px"
                            className="w-full h-91 object-cover border-4 border-yellow-500"
                        />
                        <div className="p-5 flex-row border-4 border-blue-400 flex items-center justify-between">
                            <span>
                            <p className="text-lg font-medium">{nft.asset.name}</p>
                            <p className="text-sm text-white">
                                Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC
                            </p>
                            </span>
                            <button
                                className="place-self-endtext-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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

  export default Marketnew;