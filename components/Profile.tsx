
import type { NextPage } from "next";
import { useSDK,
useAddress,

 } from "@thirdweb-dev/react";

 import useAsyncEffect from "use-async-effect";


const Profile = () => {

  
  
    const sdk = useSDK();
    const userAddress = useAddress();

    useAsyncEffect(async () => {
        if (!sdk) {
          return;
        }
        if (!userAddress) {
          return;
        }
        try {
          const contractList: {
            address: string;
            contractType: string,
            metadata: () => Promise<any>;
          }[] = await sdk.getContractList("{{0x96bA733fCaC2a4B95d7Dc5a1aDC22f56d879DbFf}}");
          if (!contractList) {
            return;
          }
          const allNftContracts = contractList.filter((contract) => {
            return contract.contractType === 'nft-collection';
          });
          const getAllNftsForContracts = async () => {
            const asd = allNftContracts.map(
                async (contract: {
                  address: string;
                  contractType: string;
                  metadata: () => Promise<any>;
                }) => {
                  const contractEnriched = await sdk.getContract(contract.address);
                  // @ts-ignore
                  return await (contractEnriched as NFTCollection).getOwned(userAddress)
                }
            );
            return await Promise.all(asd);
          }
          const allNftsPromiseResults = await Promise.all([getAllNftsForContracts()]);
          const flattenedNfts = allNftsPromiseResults.flat(Infinity);
          console.log(flattenedNfts);
        } catch (e) {}
      }, [sdk, userAddress]);   

     

    }

      export default Profile