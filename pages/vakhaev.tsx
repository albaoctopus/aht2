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
  import styles from "../styles/Mint.module.css";
  
  // Put Your NFT Drop Contract address from the dashboard here
  const myNftDropContractAddress = "0x0a813027c5E70F714BAa157d911b893D9CF6312b";
  
  const Vakhaev: NextPage = () => {
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
      return <div className="bg-gray-200 p-6">Loading...</div>;
    }
    
    return (
      <div className="flex flex-row bg-gray-200 p-6">
        <div className="flex">
          <div className="w-1/2">
            <video className="py-3 object-cover object-center rounded-3xl"  src="/Vakhaev.mp4" autoPlay loop muted controls />
    
            <div className="text-center py-3">
              <p>VAKHAEV</p>
            </div>
    
            <div className="flex">
              <div className="w-1/2">
                <p>Total Minted </p>
              </div>
              <div className="w-1/2">
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
              <div>
                <h2>Sold Out</h2>
              </div>
            ) : isNotReady ? (
              <div>
                <h2>Not ready to be minted yet</h2>
              </div>
            ) : (
              <div className="text-center py-3">
                <Web3Button
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
                  accentColor="#B9261C"
                  colorMode="light"
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
  }
  
  export default Vakhaev;