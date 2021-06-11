/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface L2CustomGatewayTesterInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'exitNum()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'initialize(address,address)': FunctionFragment
    'l1ToL2Token(address)': FunctionFragment
    'mintAndCall(address,uint256,address,address,bytes)': FunctionFragment
    'outboundTransfer(address,address,uint256,bytes)': FunctionFragment
    'registerTokenFromL1(address,address)': FunctionFragment
    'router()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'exitNum', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'l1ToL2Token', values: [string]): string
  encodeFunctionData(
    functionFragment: 'mintAndCall',
    values: [string, BigNumberish, string, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'registerTokenFromL1',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'exitNum', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l1ToL2Token', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintAndCall', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'registerTokenFromL1',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result

  events: {
    'InboundTransferFinalized(address,address,address,uint256,uint256,bytes)': EventFragment
    'OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)': EventFragment
    'TransferAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TxToL1(address,address,uint256,bytes)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'InboundTransferFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboundTransferInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL1'): EventFragment
}

export class L2CustomGatewayTester extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: L2CustomGatewayTesterInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<[string]>

    exitNum(overrides?: CallOverrides): Promise<[BigNumber]>

    'exitNum()'(overrides?: CallOverrides): Promise<[BigNumber]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    initialize(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address)'(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<[string]>

    'l1ToL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    mintAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'mintAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    registerTokenFromL1(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'registerTokenFromL1(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    router(overrides?: CallOverrides): Promise<[string]>

    'router()'(overrides?: CallOverrides): Promise<[string]>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateL2TokenAddress(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

  exitNum(overrides?: CallOverrides): Promise<BigNumber>

  'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  'getOutboundCalldata(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  initialize(
    _l1Counterpart: string,
    _router: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address)'(
    _l1Counterpart: string,
    _router: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<string>

  'l1ToL2Token(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>

  mintAndCall(
    _l2Address: string,
    _amount: BigNumberish,
    _sender: string,
    _dest: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'mintAndCall(address,uint256,address,address,bytes)'(
    _l2Address: string,
    _amount: BigNumberish,
    _sender: string,
    _dest: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  registerTokenFromL1(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'registerTokenFromL1(address,address)'(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  router(overrides?: CallOverrides): Promise<string>

  'router()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    initialize(
      _l1Counterpart: string,
      _router: string,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address)'(
      _l1Counterpart: string,
      _router: string,
      overrides?: CallOverrides
    ): Promise<void>

    l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<string>

    'l1ToL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>

    mintAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'mintAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    registerTokenFromL1(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    'registerTokenFromL1(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    router(overrides?: CallOverrides): Promise<string>

    'router()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    InboundTransferFinalized(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    OutboundTransferInitiated(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    TransferAndCallTriggered(
      success: null,
      _from: string | null,
      _to: string | null,
      _amount: null,
      callHookData: null
    ): EventFilter

    TxToL1(
      _from: string | null,
      _to: string | null,
      _id: BigNumberish | null,
      _data: null
    ): EventFilter
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<BigNumber>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    initialize(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address)'(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'l1ToL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    mintAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'mintAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    registerTokenFromL1(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'registerTokenFromL1(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>

    'router()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'counterpartGateway()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    exitNum(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'exitNum()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initialize(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address)'(
      _l1Counterpart: string,
      _router: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    l1ToL2Token(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'l1ToL2Token(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    mintAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'mintAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _sender: string,
      _dest: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    registerTokenFromL1(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'registerTokenFromL1(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'router()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}