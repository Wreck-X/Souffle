import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'append' : ActorMethod<[string], undefined>,
  'getItems' : ActorMethod<[], Array<string>>,
}
