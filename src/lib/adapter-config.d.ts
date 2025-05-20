// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
export declare global {
	namespace ioBroker {
		interface AdapterConfig {
			option1: boolean;
			option2: string;
		}
	}
}
