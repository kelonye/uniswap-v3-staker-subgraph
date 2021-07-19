import { BigInt } from '@graphprotocol/graph-ts';
import {
  Approval,
  ApprovalForAll,
  Collect,
  DecreaseLiquidity,
  IncreaseLiquidity,
  Transfer,
} from '../generated/NFTPositionsManager/NFTPositionsManager';
import { Position } from '../generated/schema';

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void {
  let entity = Position.load(event.params.tokenId.toHex());
  if (entity == null) {
    entity = new Position(event.params.tokenId.toHex());
  }
  entity.liquidity = event.params.liquidity;
  entity.save();
}

export function handleDecreaseLiquidity(event: DecreaseLiquidity): void {
  let entity = Position.load(event.params.tokenId.toHex());
  if (entity != null) {
    entity.liquidity = event.params.liquidity;
    entity.save();
  }
}

export function handleTransfer(event: Transfer): void {
  let entity = Position.load(event.params.tokenId.toHex());
  if (entity != null) {
    entity.oldOwner = event.params.to;
    entity.owner = event.params.from;
    entity.save();
  }
}

export function handleApproval(event: Approval): void {
  let entity = Position.load(event.params.tokenId.toHex());
  if (entity != null) {
    entity.owner = event.params.approved;
    entity.oldOwner = event.params.owner;
    entity.save();
  }
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleCollect(event: Collect): void {}
