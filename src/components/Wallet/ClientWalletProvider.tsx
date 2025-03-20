"use client";

import { PropsWithChildren } from "react";
import { AptosWalletAdapterProvider, Network } from "@aptos-labs/wallet-adapter-react";
import { Toaster } from "@/components/ui/toast";
import { toast } from "sonner";

interface ClientWalletProviderProps extends PropsWithChildren {
    network: string;
    apiKey: string;
}

export function ClientWalletProvider({
    children,
    network,
    apiKey
}: ClientWalletProviderProps) {
    return (
        <>
            <Toaster />
            <AptosWalletAdapterProvider
                autoConnect={true}
                dappConfig={{
                    network: network as Network,
                    aptosApiKeys: { [network]: apiKey }
                }}
                onError={(error) => {
                    toast.error(error || "Unknown wallet error");
                }}
            >
                {children}
            </AptosWalletAdapterProvider>
        </>
    );
} 