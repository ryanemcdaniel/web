import type {LambdaContext} from '@effect-aws/lambda';
import { LambdaRuntime} from '@effect-aws/lambda';
import {Effect, Logger} from 'effect';

const runtime = LambdaRuntime.fromLayer(
  Logger.replace(Logger.defaultLogger, Logger.logfmtLogger),
);

export const handler = async (event: unknown, context: LambdaContext) => {
 return await Effect.logInfo('Hello, world!').pipe(runtime.runPromise);
};
