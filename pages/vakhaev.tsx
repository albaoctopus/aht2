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
  import styles from "../styles/Button.module.css";
  
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
      <div className="bg-gray-900 p-6 grid grid-row-2 items-center">
  <div className="py-3 border-4 border-green-100 object-cover object-center rounded-3xl">
    <video src="/Vakhaev.mp4" autoPlay loop muted controls />
  </div>

  <div className="p-5 border-4 border-blue-400 flex flex-row items-center justify-between">
    <div className=" flex flex-col text-left">
      <p className="text-white text-base font-medium xl:text-lg">VAKHAEV</p>
      <p className="text-white text-xs xl:text-sm">Price: 5.0 MATIC</p>
    </div>

    {isSoldOut ? (
      <div className="text-white">Sold Out</div>
    ) : isNotReady ? (
      <div className="text-white">Not ready to be minted yet</div>
    ) : (
     
      <Web3Button
      className={styles.btn}
      
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
      
    )}
  </div>
</div>






    

    

    );
  }
  
  export default Vakhaev;