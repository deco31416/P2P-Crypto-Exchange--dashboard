import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESSES } from "./contracts";
import StakingABI from "./abis/Staking.json";

export function useStakeTokens() {
  const { contract } = useContract(CONTRACT_ADDRESSES.staking, StakingABI.abi);
  const { mutate: stake, isLoading } = useContractWrite(contract, "stake");

  return { stake, isLoading };
}
