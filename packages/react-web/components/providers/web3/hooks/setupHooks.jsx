import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...dependencies) => {
    return {
        useAccount: createAccountHook(...dependencies),
        useNetwork: createNetworkHook(...dependencies)
    }
}