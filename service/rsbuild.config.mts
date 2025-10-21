import {defineConfig} from '@rsbuild/core';

export default defineConfig({
  source: {
    entry: {
      fn_api: './src/fn_api.ts',
    }
  }
});
