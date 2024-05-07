/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
} from '@solana/web3.js';

export enum AuthorityType {
  MintTokens,
  FreezeAccount,
  AccountOwner,
  CloseAccount,
}

export type AuthorityTypeArgs = AuthorityType;

export function getAuthorityTypeEncoder(): Encoder<AuthorityTypeArgs> {
  return getEnumEncoder(AuthorityType);
}

export function getAuthorityTypeDecoder(): Decoder<AuthorityType> {
  return getEnumDecoder(AuthorityType);
}

export function getAuthorityTypeCodec(): Codec<
  AuthorityTypeArgs,
  AuthorityType
> {
  return combineCodec(getAuthorityTypeEncoder(), getAuthorityTypeDecoder());
}