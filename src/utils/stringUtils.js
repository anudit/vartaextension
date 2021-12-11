import { getAddress, isAddress } from 'ethers/lib/utils';

export const addressToChainName = (address) => {
    if (isAddress(address) === true) {
        return "ethereum";
    }
    else if (address.slice(address.length - 5, address.length) === ".near" || address.slice(address.length - 8, address.length) === ".testnet") {
        return "near";
    }
    else if (address.length === 18 && address.slice(0, 2) === "0x") {
        return "flow";
    }
    else if (/^[A-HJ-NP-Za-km-z1-9]*$/.test(address)) {
        return "solana";
    }
    else {
        return "ethereum";
    }
}

export const isBlockchainAddress = (address) => {
    if (isAddress(address) === true) { // ethereum
        return true;
    }
    if (address.length === 18 && address.slice(0, 2) === "0x") {  // flow
        return true;
    }
    else if (address.slice(address.length - 5, address.length) === ".near" || address.slice(address.length - 8, address.length) === ".testnet") { //near
        return true;
    }
    else if (/^[A-HJ-NP-Za-km-z1-9]*$/.test(address)) {  // solana base58 check
        return true;
    }
    else if (address.slice(0, 2) === "0:" && address.length === 66) {  // freeton
        return true;
    }
    else {
        return false;
    }
}


export const truncateAddress = (address, len = 4) => {
    if (Boolean(address) === false) {
        return ""
    }
    else if (addressToChainName(address) === "ethereum") {
        return address.slice(0, 2 + len) + "..." + address.slice(-len);
    }
    else if (addressToChainName(address) === "near") {
        return address;
    }
    else {
        return address.slice(0, 2 + len) + "..." + address.slice(-len);
    }
};

export async function ensToAddress(ensAddress) {
    try {

        let resp = await fetch("https://api.thegraph.com/subgraphs/name/ensdomains/ens", {
            "headers": {
                "accept": "*/*",
                "content-type": "application/json",
            },
            "body": "{\"query\":\"{\\n  domains(where:{name:\\\"" + ensAddress + "\\\"}) {\\n    resolvedAddress {\\n      id\\n    }\\n  }\\n}\\n\",\"variables\":null}",
            "method": "POST",
        }).then((r) => { return r.json() });

        if (Boolean(resp['data']["domains"][0]["resolvedAddress"]) === false) {
            return false;
        }
        else {
            return getAddress(resp['data']["domains"][0]["resolvedAddress"]['id'])
        }

    } catch (error) {
        return false;
    }
}

export default function timeAgo(time) {
    switch (typeof time) {
        case "number":
            break;
        case "string":
            if (time.length <= "10") {
                time = time + "000";
            }
            time = +new Date(parseInt(time));
            break;
        case "object":
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    var time_formats = [
        [60, "s", 1], // 60
        [120, "1min ago", "1 minute from now"], // 60*2
        [3600, "mins", 60], // 60*60, 60
        [7200, "1hr ago", "1 hour from now"], // 60*60*2
        [86400, "h", 3600], // 60*60*24, 60*60
        [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
        [604800, "d", 86400], // 60*60*24*7, 60*60*24
        [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
        [2419200, "w", 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
        [29030400, " mths", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, "Last yr", "Next year"], // 60*60*24*7*4*12*2
        [2903040000, "yrs", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
        [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
        token = "ago",
        list_choice = 1;

    if (seconds == 0) {
        return "Just now";
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = "from now";
        list_choice = 2;
    }
    var i = 0,
        format;
    while ((format = time_formats[i++]))
        if (seconds < format[0]) {
            if (typeof format[2] == "string") return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + format[1] + " " + token;
        }
    return time;
}

