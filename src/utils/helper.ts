import { toast } from "react-hot-toast";
import BigNumber from "bignumber.js";

export const shortenAddress = (address:string) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};

export const BIG_TEN = new BigNumber(10);