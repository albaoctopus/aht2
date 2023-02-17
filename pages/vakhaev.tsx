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
      return <div className="bg-gray-900 p-6">Loading...</div>;
    }
    
    return (
      <div className="bg-gray-900 p-6 grid grid-row-3 items-center">
  <div className="py-3 object-cover object-center h-91 w-full">
    <video src="/Vakhaev.mp4" autoPlay loop muted controls className="rounded-3xl border-red-600 border-4 "/>
  </div>

  <div className="p-5 border-4 border-red-600 rounded-3xl items-center justify-between">
    <div className=" flex flex-col text-left">
      <p className="my-1 bg-red-800 text-white text-center text-lg font-extrabold rounded-3xl py-2 px-4 border-2 border-red-600 transition duration-200 ease-in-out hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Vakhaev</p>
      <p className="my-1 bg-red-800 text-white text-center text-lg font-extrabold rounded-3xl py-2 px-4 border-2 border-red-600 transition duration-200 ease-in-out hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Price: 5.0 Matic</p>
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