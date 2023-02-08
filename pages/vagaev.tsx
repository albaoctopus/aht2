import {
    useClaimedNFTSupply,
    useContractMetadata,
    useUnclaimedNFTSupply,
    useActiveClaimCondition,
    Web3Button,
    useContract,
  } from "@thirdweb-dev/react";
  import { formatUnits, parseUnits } from "ethers/lib/utils";
  import type { NextPage } from "next";
  import { useState } from "react";
  
  // Put Your NFT Drop Contract address from the dashboard here
  const myNftDropContractAddress = "0xcC76e45F2340B503ef77a767e0A9DA9020C3A48E";
  
  const Vagaev: NextPage = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);
  
    // The amount the user claims
    const [quantity, setQuantity] = useState(1); // default to 1
  
    // Load contract metadata
    const { data: contractMetadata } = useContractMetadata(nftDrop);
  
    // Load claimed supply and unclaimed supply
    const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop);
    const { data: claimedSupply } = useClaimedNFTSupply(nftDrop);
  
    // Load the active claim condition
    const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop);
  
    // Check if there's NFTs left on the active claim phase
    const isNotReady =
      activeClaimCondition &&
      parseInt(activeClaimCondition?.availableSupply) === 0;
  
    // Check if there's any NFTs left
    const isSoldOut = unclaimedSupply?.toNumber() === 0;
  
    // Check price
    const price = parseUnits(
      activeClaimCondition?.currencyMetadata.displayValue || "0",
      activeClaimCondition?.currencyMetadata.decimals
    );
  
    // Multiply depending on quantity
    const priceToMint = price.mul(quantity);
  
    // Loading state while we fetch the metadata
    if (!nftDrop || !contractMetadata) {
      return <div className="bg-green-700 p-4 border-4 border-sky-500">Loading...</div>;
    }
    
    return (
      <div className="container mx-auto pt-10 justify-center flex flex-row flex-wrap bg-green-700 p-4 border-4 border-sky-500">
        <div className="flex border-4 border-red-500">
          <div className=" h-[300px] w-[300px] border-4 border-yellow-200">
            <video className=" object-cover object-center rounded-3xl border-4 border-yellow-500"  src="/Vakhaev.mp4" autoPlay loop muted controls />
    
            <div className="text-center py-2">
              <p>VAKHAEV</p>
            </div>
    
            <div className="flex py-2">
              <div className="h-45 w-45">
                <p>Total Minted </p>
              </div>
              <div className="h-45 w-45">
                {claimedSupply && unclaimedSupply ? (
                  <p>
                    <b>{claimedSupply?.toNumber()}</b>
                    {" / "}
                    {claimedSupply?.toNumber() + unclaimedSupply?.toNumber()}
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
    
            {isSoldOut ? (
              <div className="text-center py-2">
                <h2>Sold Out</h2>
              </div>
            ) : isNotReady ? (
              <div className="text-center py-2">
                <h2>Not ready to be minted yet</h2>
              </div>
            ) : (
              <div className="text-center py-2">
                <Web3Button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  contractAddress={myNftDropContractAddress}
                  action={async (contract) =>
                    await contract.erc721.claim(quantity)
                  }
                  onSuccess={(result) =>
                    alert(
                      `Successfully minted ${result.length} NFT${
                        result.length > 1 ? "s" : ""
                      }!`
                    )
                  }
                  onError={(error) => alert(error?.message)}
                >
                  {`Mint${quantity > 1 ? ` ${quantity}` : ""}${
                    activeClaimCondition?.price.eq(0)
                      ? " (Free)"
                      : activeClaimCondition?.currencyMetadata.displayValue
                      ? ` (${formatUnits(
                          priceToMint,
                          activeClaimCondition.currencyMetadata.decimals
                        )} ${activeClaimCondition?.currencyMetadata.symbol})`
                      : ""
                  }`}
                </Web3Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
    
  };
  
  export default Vagaev;