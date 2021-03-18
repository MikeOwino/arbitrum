/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { BuddyDeployer } from '../BuddyDeployer'

export class BuddyDeployer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<BuddyDeployer> {
    return super.deploy(overrides || {}) as Promise<BuddyDeployer>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): BuddyDeployer {
    return super.attach(address) as BuddyDeployer
  }
  connect(signer: Signer): BuddyDeployer__factory {
    return super.connect(signer) as BuddyDeployer__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuddyDeployer {
    return new Contract(address, _abi, signerOrProvider) as BuddyDeployer
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_contract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'withdrawalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_success',
        type: 'bool',
      },
    ],
    name: 'Deployed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'contractInitCode',
        type: 'bytes',
      },
    ],
    name: 'executeBuddyDeploy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061033d806100206000396000f3fe60806040526004361061001e5760003560e01c8063cb18d43a14610023575b600080fd5b6100c96004803603602081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506100cb945050505050565b005b60646001600160a01b03166308bd624c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561010557600080fd5b505afa158015610119573d6000803e3d6000fd5b505050506040513d602081101561012f57600080fd5b5051610182576040805162461bcd60e51b815260206004820152601f60248201527f46756e6374696f6e206d7573742062652063616c6c65642066726f6d204c3100604482015290519081900360640190fd5b805133908190600090819083906020870134f560408051823b1519801515602480840191909152835180840382018152604493840185526020810180516001600160e01b031662d95a6760e31b17815285516349460b4d60e11b81526001600160a01b038c166004820190815293810196875282519581019590955281519698509296509460009460649463928c169a948c948994909392880191908083838c5b8381101561023b578181015183820152602001610223565b50505050905090810190601f1680156102685780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b505050506040513d60208110156102b257600080fd5b5051604080518515158152905191925082916001600160a01b0380881692908a16917f8e17e94cdef33f36cd482b554719b84708983285fb5fc5e08f0ba40571db9dc19181900360200190a45050505050505056fea2646970667358221220011cb89e63d3d571e6c2f6f33b084c8eec10fc41847f57c710d2fe24e154d1d964736f6c634300060b0033'