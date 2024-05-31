import { CracoConfig } from "@craco/types";

const config = {
  webpack: {
    configure(config, context) {
      const experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }

      return {
        ...config,
        experiments,
      };
    },
  }
} satisfies CracoConfig;

export default config;
