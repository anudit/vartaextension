export const getNftMetadata = async (chainId, contractAddress, tokenId) => {

    let req = await fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?quote-currency=USD&format=JSON&key=ckey_b469893fc4c9418893d32a8720d`)
    let resp = await req.json();
    return resp;
};
