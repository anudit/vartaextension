// export const getNftMetadata = async (chainId, contractAddress, tokenId) => {

//     let req = await fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?quote-currency=USD&format=JSON&key=ckey_b469893fc4c9418893d32a8720d`)
//     let resp = await req.json();
//     return resp;
// };

export const getNftMetadata = async (chainId, contractAddress, tokenId) => {
    let req;
    if (parseInt(chainId) === 137) {
        req = await fetch(`https://polygon-mainnet.g.alchemy.com/v2/A4OQ6AV7W-rqrkY9mli5-MCt-OwnIRkf/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`)
    }
    else if (parseInt(chainId) === 1) {
        req = await fetch(`https://eth-mainnet.g.alchemy.com/v2/A4OQ6AV7W-rqrkY9mli5-MCt-OwnIRkf/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`)
    }
    let resp = await req.json();
    console.log(resp);
    return resp;
};
