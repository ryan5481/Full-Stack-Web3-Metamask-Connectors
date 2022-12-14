import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { use } from "react";
import { abi } from "../constants/abi";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functinName: "store",
    params: {
      _favoriteNumber: "9876",
    },
  });

  return (
    <div>
      {isWeb3Enabled ? (
        <>
          "connected" <button onClick={() => execute()}>execute</button>
        </>
      ) : (
        <button onClick={() => enableWeb3()}>connect</button>
      )}
    </div>
  );
}
