/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StakeUtils } from "../StakeUtils";

export class StakeUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StakeUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StakeUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StakeUtils {
    return super.attach(address) as StakeUtils;
  }
  connect(signer: Signer): StakeUtils__factory {
    return super.connect(signer) as StakeUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeUtils {
    return new Contract(address, _abi, signerOrProvider) as StakeUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "Delegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheduledFor",
        type: "uint256",
      },
    ],
    name: "ScheduleUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "Undelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
    ],
    name: "UserUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimsManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "delegateShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "delegatedTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "delegatedToAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "depositAndStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserLocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getUserLockedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "payReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "sharesAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalStakeAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "undelegateShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "unstakeAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "userDelegating",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "userDelegatingAt",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "userStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "delegating",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldestLockedEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060065563047868c06007556a084595161401484a000000600855620f424060095562093a80600a55600654600b553480156200004357600080fd5b50604051620029a8380380620029a8833981810160405260208110156200006957600080fd5b50516040805180820182524380825260016020808401828152600280548085018255600082815296517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9183029182015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf909201919091558551808701909652928552848101828152600380549384018155855294517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b929093029182019290925592517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9093019290925580546001600160a01b0319166001600160a01b03841617905581908190819081906200019490429062093a809062000219811b62001e3f17901c565b608052620001b24262093a8062000219602090811b62001e3f17901c565b6005819055506040518060400160405280600081526020014381525060046000620001ef62093a80426200021960201b62001e3f1790919060201c565b81526020808201929092526040016000208251815591015160019091015550620003119350505050565b60006200026383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200026a60201b60201c565b9392505050565b60008183620002fa5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002be578181015183820152602001620002a4565b50505050905090810190601f168015620002ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200030757fe5b0495945050505050565b60805161266d6200033b600039806117fa5280611a71528061220f528061223e525061266d6000f3fe608060405234801561001057600080fd5b50600436106102525760003560e01c80637702059e11610146578063b70e6be6116100c3578063e7460a5211610087578063e7460a521461066c578063f301af4214610674578063f32ca51f14610691578063f3fef3a3146106bd578063f45346dc146106e9578063fe667bad1461071f57610252565b8063b70e6be6146105e4578063ce7c2ac2146105ec578063d7aa2b8014610612578063decac4f51461063e578063e14b5fac1461064657610252565b8063981b24d01161010a578063981b24d0146104f1578063a30d84241461050e578063a694fc3a1461053a578063a87430ba14610557578063acc3a939146105be57610252565b80637702059e146104b4578063784b3c5d146104d15780638b0e9f3f146104d9578063917656b9146104e157806392093b36146104e957610252565b80632def6620116101d457806350aa9f7b1161019857806350aa9f7b146103e25780636367f36f1461041c57806365da12641461044257806368e86df71461046857806370a082311461048e57610252565b80632def6620146103a557806341cb8c20146103ad5780634861f169146103ca5780634eb05c47146103d25780634f322ae8146103da57610252565b806318160ddd1161021b57806318160ddd1461032857806318dbf733146103305780631eb08ba91461035c57806320a0a0e914610380578063276e00581461038857610252565b806201e862146102575780631066441314610295578063106d08df1461029d57806311281a19146102bc57806313f2dad0146102f2575b600080fd5b6102836004803603604081101561026d57600080fd5b50803590602001356001600160a01b031661074b565b60408051918252519081900360200190f35b610283610795565b6102ba600480360360208110156102b357600080fd5b503561079b565b005b6102ba600480360360608110156102d257600080fd5b506001600160a01b03813581169160208101359160409091013516610a36565b61030f6004803603602081101561030857600080fd5b5035610a4f565b6040805192835260208301919091528051918290030190f35b610283610a7a565b6102ba6004803603604081101561034657600080fd5b506001600160a01b038135169060200135610a8a565b610364610b1c565b604080516001600160a01b039092168252519081900360200190f35b610283610b2b565b6102836004803603602081101561039e57600080fd5b5035610b32565b610283610b3f565b61030f600480360360208110156103c357600080fd5b5035610e0c565b6102ba610e19565b610283610f8e565b610283610f94565b610408600480360360208110156103f857600080fd5b50356001600160a01b0316610f9a565b604080519115158252519081900360200190f35b6102ba6004803603602081101561043257600080fd5b50356001600160a01b0316610fa6565b6102836004803603602081101561045857600080fd5b50356001600160a01b0316610fc0565b6102ba6004803603602081101561047e57600080fd5b50356001600160a01b0316610fcc565b610283600480360360208110156104a457600080fd5b50356001600160a01b0316611234565b6102ba600480360360208110156104ca57600080fd5b5035611240565b610283611538565b61028361153e565b610283611549565b61028361154f565b6102836004803603602081101561050757600080fd5b5035611555565b6104086004803603604081101561052457600080fd5b506001600160a01b038135169060200135611562565b6102ba6004803603602081101561055057600080fd5b503561159c565b61057d6004803603602081101561056d57600080fd5b50356001600160a01b031661178a565b604080519889526020890197909752878701959095529215156060870152608086019190915260a085015260c084015260e083015251908190036101000190f35b610283600480360360208110156105d457600080fd5b50356001600160a01b03166117d1565b6102836117f8565b6102836004803603602081101561060257600080fd5b50356001600160a01b031661181c565b6102836004803603604081101561062857600080fd5b50803590602001356001600160a01b0316611824565b610283611850565b6102836004803603602081101561065c57600080fd5b50356001600160a01b0316611855565b61028361186d565b61030f6004803603602081101561068a57600080fd5b5035611873565b610283600480360360408110156106a757600080fd5b506001600160a01b03813516906020013561188c565b6102ba600480360360408110156106d357600080fd5b506001600160a01b038135169060200135611b64565b6102ba600480360360608110156106ff57600080fd5b506001600160a01b03813581169160208101359160409091013516611d1b565b6102836004803603604081101561073557600080fd5b50803590602001356001600160a01b0316611e1a565b60006107578284611562565b156107645750600061078f565b60006107708484611824565b9050600061077e8585611e1a565b905061078a8282611e81565b925050505b92915050565b60095481565b60006107a5611edb565b90506107b081611240565b60006107bc6003611f34565b905060006107ca6002611f34565b33600090815260016020819052604082209293506107e9908301611f34565b905085610800846107fa8488611f40565b90611e3f565b101561080b57600080fd5b600061081a4262093a80611e3f565b60008181526009850160205260408120549192509060ff1615801561084c575060008281526004602052604090205415155b156109d457600082815260046020526040812060018082015491929161087491880190611f99565b9050600061088760028460010154611f99565b835490915061089c9082906107fa9085611f40565b935060006108ae8a6107fa8b88611f40565b9050868111156108bb5750855b6108c587826120d8565b96506108d189826120d8565b6040805180820182524380825260208083018c81526001808f0180548083018255600091825284822096516002918202909701968755925195820195909555855180870190965292855290840185815281549283018255818452935191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81019190915591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf9092019190915590995061098e90829061211a565b848860020154116109a05760016109af565b60028801546109af90866120d8565b600289015550505060008381526009860160205260409020805460ff19166001179055505b600a546109e2904290611e81565b6007850181905560088501899055604080518a81526020810192909252805133927fbe333ba89af2daf0172a0b2d35c3b284379b82470eff81373dcb2dd696573b4892908290030190a25050505050505050565b610a41838383611d1b565b610a4a8261159c565b505050565b60028181548110610a5c57fe5b60009182526020909120600290910201805460019091015490915082565b6000610a8543611555565b905090565b6000610a96838361188c565b6001600160a01b038416600090815260016020526040902060028101829055909150610ac06121f8565b600b820155600a8101839055600281015460408051858152602081019290925280516001600160a01b038716927f6aa46aa24dd78d66eaff80fdc122ff406f1b5afe46204d8008b60282c8ec79af92908290030190a250505050565b600c546001600160a01b031681565b62093a8081565b600061078f600383611f99565b600080610b4a611edb565b9050610b5581611240565b33600090815260016020526040902060078101544211610bbc576040805162461bcd60e51b815260206004820152601960248201527f57616974696e6720706572696f6420696e636f6d706c65746500000000000000604482015290519081900360640190fd5b6007810154610bce9062093a80611e81565b4210610c21576040805162461bcd60e51b815260206004820152601a60248201527f556e7374616b652077696e646f77206861732065787069726564000000000000604482015290519081900360640190fd5b60088101546000610c326002611f34565b90506000610c406003611f34565b90506000610c5085600101611f34565b90506000610c62836107fa8688611f40565b905081811115610c7f575080610c7c846107fa8386611f40565b94505b8554610c8b9086611e81565b865560408051808201909152438152600187019060208101610cad85856120d8565b9052815460018181018455600093845260209384902083516002938402909101908155928401519201919091556040805180820190915243815290918101610cf587856120d8565b905281546001818101845560009384526020808520845160029094020192835590920151910155610d2790829061211a565b6000858411610d37576000610d41565b610d4184876120d8565b604080518082018252438152602080820184815260038054600181018255600091825293517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b60029095029485015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9093019290925560078b0182905560088b01919091558151898152915192935033927f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd9281900390910190a25093965050505050505090565b60038181548110610a5c57fe5b33600090815260016020526040812090610e3560058301612273565b90506001600160a01b038116610e92576040805162461bcd60e51b815260206004820152601860248201527f4e6f742063757272656e746c792064656c65676174696e670000000000000000604482015290519081900360640190fd5b6000610ea083600101611f34565b6001600160a01b03831660009081526001602090815260409182902082518084019093524383529293506006830191908101610ee585610edf85611f34565b906120d8565b90528154600180820184556000938452602080852084516002948502909101908155938101519382019390935560408051808201825243815280850186815260058b0180548086018255908852958720915195909402019384559151920180546001600160a01b0319166001600160a01b03938416179055519085169133917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da729190a350505050565b60085481565b600b5481565b600061078f8243611562565b6000610fb0610b3f565b9050610fbc8282611b64565b5050565b600061078f4383611e1a565b6001600160a01b03811615801590610fed57506001600160a01b0381163314155b61102f576040805162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081d185c99d95d60921b604482015290519081900360640190fd5b61103881610f9a565b156110745760405162461bcd60e51b81526004018080602001828103825260358152602001806125e26035913960400191505060405180910390fd5b33600090815260016020819052604082209190611092908301611f34565b905060006110a283600501612273565b90506001600160a01b0381161561113c57836001600160a01b0316816001600160a01b031614156110d557505050611231565b6001600160a01b0381166000908152600160209081526040918290208251808401909352438352916006830191810161111186610edf85611f34565b9052815460018181018455600093845260209384902083516002909302019182559290910151910155505b6001600160a01b0384166000908152600160209081526040918290208251808401909352438352916006830191810161117e8661117885611f34565b90611e81565b9052815460018082018455600093845260208085208451600294850290910190815593810151938201939093556040805180820182524381526001600160a01b038b811682870181815260058d0180548088018255908a5297892093519790960290920195865593519490920180546001600160a01b03191694909316939093179091559051909133917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea29190a3505050505b50565b600061078f438361074b565b61124d4262093a80611e3f565b81111561125957600080fd5b80600554101561123157600554600090611274906001611e81565b905060006112826003611f34565b905060005b8383116114b0576000546040805163bbb30c5d60e01b815230600482015290516001600160a01b039092169163bbb30c5d91602480820192602092909190829003018186803b1580156112d957600080fd5b505afa1580156112ed573d6000803e3d6000fd5b505050506040513d602081101561130357600080fd5b505161137957604080518082018252600080825243602080840191825287835260048152848320935184559051600190930192909255600b54835191825291810191909152815185927fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde4928290030190a261149e565b6113828261227f565b60006113a66305f5e1006107fa60346107fa600b5488611f4090919063ffffffff16565b60408051808201825282815243602080830191825260008981526004909152929092209051815590516001909101559050801561145d5760008054604080516340c10f1960e01b81523060048201526024810185905290516001600160a01b03909216926340c10f199260448084019382900301818387803b15801561142b57600080fd5b505af115801561143f573d6000803e3d6000fd5b505050506114568184611e8190919063ffffffff16565b9250600191505b600b54604080518381526020810192909252805186927fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde492908290030190a2505b6114a9836001611e81565b9250611287565b600584905580156115325760408051808201909152438152602081018381526003805460018101825560009190915291517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600290930292830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c909101555b50505050565b60065481565b6000610a8543610b32565b60055481565b60075481565b600061078f600283611f99565b6001600160a01b038216600090815260016020526040812081906115899060050184612391565b6001600160a01b03161515949350505050565b60006115a6611edb565b90506115b181611240565b3360009081526001602052604090208054831115611616576040805162461bcd60e51b815260206004820152601b60248201527f416d6f756e7420657863656564732075736572206465706f7369740000000000604482015290519081900360640190fd5b805461162290846120d8565b815560006116306002611f34565b9050600061163e6003611f34565b90506000611650826107fa8589611f40565b9050600061166085600101611f34565b905084600101604051806040016040528043815260200161168a8585611e8190919063ffffffff16565b90528154600181810184556000938452602093849020835160029384029091019081559284015192019190915560408051808201909152438152909181016116d28786611e81565b90528154600181810184556000938452602093849020835160029093020191825591830151910155604080518082019091524381526003918101611716868b611e81565b90528154600181810184556000938452602093849020835160029093020191825592909101519082015561174b90839061211a565b60408051888152905133917febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a919081900360200190a250505050505050565b6001602052600090815260409020805460028201546003830154600484015460078501546008860154600a870154600b9097015495969495939460ff909316939192909188565b600061078f6117de610a7a565b6107fa6117e961153e565b6117f28661181c565b90611f40565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061078f43835b6001600160a01b03811660009081526001602081905260408220611849910184611f99565b9392505050565b603481565b600061078f826118684262093a80611e3f565b61188c565b600a5481565b6004602052600090815260409020805460019091015482565b600080611897611edb565b90506118a281611240565b60006118b14262093a80611e3f565b905060006118bd6121f8565b6001600160a01b0387166000908152600160205260409020600a810154919250908387118015906118ed57508087115b80156118f857508287115b61193a576040805162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081d185c99d95d60921b604482015290519081900360640190fd5b828110156119d8576000835b8881116119cb576000818152600460205260408120600181015490919061196f90600290611f99565b90506000611984876001018460010154611f99565b90506119ab6119a4836107fa848760000154611f4090919063ffffffff16565b8690611e81565b94505050506119c4600182611e8190919063ffffffff16565b9050611946565b509550611b5d9350505050565b600282015460006119ea836001611e81565b90505b888111611a6b5760008181526004602052604081206001810154909190611a1690600290611f99565b90506000611a2b876001018460010154611f99565b9050611a4b6119a4836107fa848760000154611f4090919063ffffffff16565b9450505050611a64600182611e8190919063ffffffff16565b90506119ed565b50611a977f00000000000000000000000000000000000000000000000000000000000000006034611e81565b8810611b5657600b8301545b611aae8560016120d8565b8111611b54576000600481611ac48460346120d8565b815260200190815260200160002090506000611ae560028360010154611f99565b90506000611afa876001018460010154611f99565b90506000611b19836107fa848760000154611f4090919063ffffffff16565b9050808611611b29576000611b33565b611b3386826120d8565b955050505050611b4d600182611e8190919063ffffffff16565b9050611aa3565b505b9550505050505b5092915050565b6000611b734262093a80611e3f565b336000908152600160205260409020600a810154919250908214611b9b57611b9b3383610a8a565b60008160020154826000015411611bb3576000611bc3565b60028201548254611bc3916120d8565b9050600082600301548211611bd9576000611be9565b6003830154611be99083906120d8565b905084811015611c40576040805162461bcd60e51b815260206004820181905260248201527f416d6f756e74206578636565647320617661696c61626c652062616c616e6365604482015290519081900360640190fd5b8254611c4c90866120d8565b8355600080546040805163a9059cbb60e01b81526001600160a01b038a81166004830152602482018a90529151919092169263a9059cbb92604480820193602093909283900390910190829087803b158015611ca757600080fd5b505af1158015611cbb573d6000803e3d6000fd5b505050506040513d6020811015611cd157600080fd5b50506040805186815290516001600160a01b0388169133917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63989181900360200190a3505050505050565b6001600160a01b038116600090815260016020526040902054611d3e9083611e81565b6001600160a01b03808316600090815260016020908152604080832094909455815484516323b872dd60e01b815288851660048201523060248201526044810188905294519316936323b872dd9360648083019491928390030190829087803b158015611daa57600080fd5b505af1158015611dbe573d6000803e3d6000fd5b505050506040513d6020811015611dd457600080fd5b50506040805183815290516001600160a01b038316917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a2505050565b6001600160a01b03811660009081526001602052604081206118499060060184611f99565b600061184983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506124e5565b600082820183811015611849576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600080611eeb4262093a80611e3f565b90506000611f04600554836120d890919063ffffffff16565b90506005811115611f2b57611f26611f1d826002611e3f565b60055490611e81565b611f2d565b815b9250505090565b600061078f8243611f99565b600082611f4f5750600061078f565b82820282848281611f5c57fe5b04146118495760405162461bcd60e51b81526004018080602001828103825260218152602001806126176021913960400191505060405180910390fd5b8154600090611faa5750600061078f565b82548390611fb99060016120d8565b81548110611fc357fe5b906000526020600020906002020160000154821061200d5782548390611fea9060016120d8565b81548110611ff457fe5b906000526020600020906002020160010154905061078f565b8260008154811061201a57fe5b90600052602060002090600202016000015482101561203b5750600061078f565b8254600090819061204d9060016120d8565b90505b818111156120b057600061206e60026107fa60016111788688611e81565b90508486828154811061207d57fe5b9060005260206000209060020201600001541161209c578092506120aa565b6120a78160016120d8565b91505b50612050565b8482815481106120bc57fe5b9060005260206000209060020201600101549250505092915050565b600061184983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612587565b33600090815260016020526040812061213590600501612273565b90506001600160a01b038116158061214b575082155b156121565750610fbc565b6001600160a01b03811660009081526001602052604081209061217b60068301611f34565b9050600084156121965761218f8287611e81565b90506121b1565b8582116121a45760006121ae565b6121ae82876120d8565b90505b604080518082019091524381526020808201928352600690940180546001818101835560009283529590912091516002909102909101908155905192019190915550505050565b6000806122084262093a80611e3f565b90506122357f00000000000000000000000000000000000000000000000000000000000000006034611e81565b811015612262577f000000000000000000000000000000000000000000000000000000000000000061226d565b61226d8160346120d8565b91505090565b600061078f8243612391565b60085461229157600654600b55611231565b600060085482106122af576008546122aa9083906120d8565b6122bc565b6008546122bc90836120d8565b905060006122dd6008546107fa6305f5e10085611f4090919063ffffffff16565b905060006122fd620f42406107fa60095485611f4090919063ffffffff16565b90506000600854851015612330576123296305f5e1006107fa6123208286611e81565b600b5490611f40565b905061235a565b816305f5e10011612342576000612357565b6123576305f5e1006107fa61232082866120d8565b90505b60065481101561236f57600654600b5561238a565b60075481111561238457600754600b5561238a565b600b8190555b5050505050565b81546000906123a25750600061078f565b825483906123b19060016120d8565b815481106123bb57fe5b906000526020600020906002020160000154821061241057825483906123e29060016120d8565b815481106123ec57fe5b60009182526020909120600160029092020101546001600160a01b0316905061078f565b8260008154811061241d57fe5b90600052602060002090600202016000015482101561243e5750600061078f565b825460009081906124509060016120d8565b90505b818111156124b357600061247160026107fa60016111788688611e81565b90508486828154811061248057fe5b9060005260206000209060020201600001541161249f578092506124ad565b6124aa8160016120d8565b91505b50612453565b8482815481106124bf57fe5b60009182526020909120600290910201600101546001600160a01b031695945050505050565b600081836125715760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561253657818101518382015260200161251e565b50505050905090810190601f1680156125635780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161257d57fe5b0495945050505050565b600081848411156125d95760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561253657818101518382015260200161251e565b50505090039056fe43616e6e6f742064656c656761746520746f206120757365722077686f2069732063757272656e746c792064656c65676174696e67536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220c96ff206363135df13b40efd676ba7fdc174b56293f8426692e3367e51fe8dda64736f6c634300060c0033";
