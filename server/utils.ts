import { Xumm } from "xumm";
import { Wallet, Client } from 'xrpl';


export function getXumm() {
    const xumm = new Xumm(
        process.env.XAMAN_API_KEY || '',
        process.env.XAMAN_SECRET_KEY || '',
    );
    return xumm;
}

export function getWallet() {
    const wallet = Wallet.fromSeed(process.env.XRPL_COMMONS_SECRET || '');

    // console.log(`Wallet address: ${wallet.address}`);
    // console.log(`Wallet public key: ${wallet.publicKey}`);
    // console.log(`Wallet private key: ${wallet.privateKey}`);
    return wallet
}

export async function getExplorerClient(network: string) {
    /* @ts-ignore */
    const client = new Client(process.env[`${network}_WSS_EXPLORER`]);
    await client.connect();
    return client;
}
