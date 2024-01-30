import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=0ad97caa-3a29-4ff4-ba58-6c239c405cf1" // my rpc address from the site u said ??

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = '3WdcfH6Gwe5bT6sXueUu7gb7U7dMq1yUFm351RJ4zLQT' // my address ? 

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'topia.casino' // topia.casino ??

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   decimals: 1e9,
  //   baseWager: 1,
  // }
]
