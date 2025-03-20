import { PropsWithChildren } from "react";
import { ClientWalletProvider } from "./ClientWalletProvider";
import { APTOS_API_KEY, NETWORK } from "@/lib/constants";

export function WalletProvider({ children }: PropsWithChildren) {
  // Pass only serializable primitive values to the client component
  return (
    <ClientWalletProvider
      network={NETWORK}
      apiKey={APTOS_API_KEY ?? ""}
    >
      {children}
    </ClientWalletProvider>
  );
}
