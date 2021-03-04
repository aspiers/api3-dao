/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TransferUtils } from "../TransferUtils";

export class TransferUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    api3TokenAddress: string,
    overrides?: Overrides
  ): Promise<TransferUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<TransferUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): TransferUtils {
    return super.attach(address) as TransferUtils;
  }
  connect(signer: Signer): TransferUtils__factory {
    return super.connect(signer) as TransferUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferUtils {
    return new Contract(address, _abi, signerOrProvider) as TransferUtils;
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
  "0x60a0604052622625a060065563047868c06007556a084595161401484a000000600855620f424060095562093a80600a55600654600b553480156200004357600080fd5b506040516200206f3803806200206f833981810160405260208110156200006957600080fd5b50516040805180820182524380825260016020808401828152600280548085018255600082815296517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9183029182015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf909201919091558551808701909652928552848101828152600380549384018155855294517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b929093029182019290925592517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9093019290925580546001600160a01b0319166001600160a01b0384161790558190819081906200019290429062093a809062000216811b620015e717901c565b608052620001b04262093a8062000216602090811b620015e717901c565b6005819055506040518060400160405280600081526020014381525060046000620001ed62093a80426200021660201b620015e71790919060201c565b815260208082019290925260400160002082518155910151600190910155506200030e92505050565b60006200026083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200026760201b60201c565b9392505050565b60008183620002f75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002bb578181015183820152602001620002a1565b50505050905090810190601f168015620002e95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200030457fe5b0495945050505050565b608051611d376200033860003980610fa25280611219528061169a52806116c95250611d376000f3fe608060405234801561001057600080fd5b506004361061021b5760003560e01c80638b0e9f3f11610125578063d7aa2b80116100ad578063f301af421161007c578063f301af421461059f578063f32ca51f146105bc578063f3fef3a3146105e8578063f45346dc14610614578063fe667bad1461064a5761021b565b8063d7aa2b801461053d578063decac4f514610569578063e14b5fac14610571578063e7460a52146105975761021b565b8063a30d8424116100f4578063a30d842414610456578063a87430ba14610482578063acc3a939146104e9578063b70e6be61461050f578063ce7c2ac2146105175761021b565b80638b0e9f3f14610421578063917656b91461042957806392093b3614610431578063981b24d0146104395761021b565b80634861f169116101a857806365da12641161017757806365da12641461038a57806368e86df7146103b057806370a08231146103d65780637702059e146103fc578063784b3c5d146104195761021b565b80634861f169146103385780634eb05c47146103405780634f322ae81461034857806350aa9f7b146103505761021b565b806318dbf733116101ef57806318dbf733146102a45780631eb08ba9146102d257806320a0a0e9146102f6578063276e0058146102fe57806341cb8c201461031b5761021b565b806201e86214610220578063106644131461025e57806313f2dad01461026657806318160ddd1461029c575b600080fd5b61024c6004803603604081101561023657600080fd5b50803590602001356001600160a01b0316610676565b60408051918252519081900360200190f35b61024c6106c0565b6102836004803603602081101561027c57600080fd5b50356106c6565b6040805192835260208301919091528051918290030190f35b61024c6106f1565b6102d0600480360360408110156102ba57600080fd5b506001600160a01b038135169060200135610701565b005b6102da610793565b604080516001600160a01b039092168252519081900360200190f35b61024c6107a2565b61024c6004803603602081101561031457600080fd5b50356107a9565b6102836004803603602081101561033157600080fd5b50356107b6565b6102d06107c3565b61024c610938565b61024c61093e565b6103766004803603602081101561036657600080fd5b50356001600160a01b0316610944565b604080519115158252519081900360200190f35b61024c600480360360208110156103a057600080fd5b50356001600160a01b0316610950565b6102d0600480360360208110156103c657600080fd5b50356001600160a01b031661095c565b61024c600480360360208110156103ec57600080fd5b50356001600160a01b0316610bc4565b6102d06004803603602081101561041257600080fd5b5035610bd0565b61024c610ece565b61024c610ed4565b61024c610edf565b61024c610ee5565b61024c6004803603602081101561044f57600080fd5b5035610eeb565b6103766004803603604081101561046c57600080fd5b506001600160a01b038135169060200135610ef8565b6104a86004803603602081101561049857600080fd5b50356001600160a01b0316610f32565b604080519889526020890197909752878701959095529215156060870152608086019190915260a085015260c084015260e083015251908190036101000190f35b61024c600480360360208110156104ff57600080fd5b50356001600160a01b0316610f79565b61024c610fa0565b61024c6004803603602081101561052d57600080fd5b50356001600160a01b0316610fc4565b61024c6004803603604081101561055357600080fd5b50803590602001356001600160a01b0316610fcc565b61024c610ff8565b61024c6004803603602081101561058757600080fd5b50356001600160a01b0316610ffd565b61024c611015565b610283600480360360208110156105b557600080fd5b503561101b565b61024c600480360360408110156105d257600080fd5b506001600160a01b038135169060200135611034565b6102d0600480360360408110156105fe57600080fd5b506001600160a01b03813516906020013561130c565b6102d06004803603606081101561062a57600080fd5b506001600160a01b038135811691602081013591604090910135166114c3565b61024c6004803603604081101561066057600080fd5b50803590602001356001600160a01b03166115c2565b60006106828284610ef8565b1561068f575060006106ba565b600061069b8484610fcc565b905060006106a985856115c2565b90506106b58282611629565b925050505b92915050565b60095481565b600281815481106106d357fe5b60009182526020909120600290910201805460019091015490915082565b60006106fc43610eeb565b905090565b600061070d8383611034565b6001600160a01b038416600090815260016020526040902060028101829055909150610737611683565b600b820155600a8101839055600281015460408051858152602081019290925280516001600160a01b038716927f6aa46aa24dd78d66eaff80fdc122ff406f1b5afe46204d8008b60282c8ec79af92908290030190a250505050565b600c546001600160a01b031681565b62093a8081565b60006106ba6003836116fe565b600381815481106106d357fe5b336000908152600160205260408120906107df6005830161183d565b90506001600160a01b03811661083c576040805162461bcd60e51b815260206004820152601860248201527f4e6f742063757272656e746c792064656c65676174696e670000000000000000604482015290519081900360640190fd5b600061084a83600101611849565b6001600160a01b0383166000908152600160209081526040918290208251808401909352438352929350600683019190810161088f8561088985611849565b90611855565b90528154600180820184556000938452602080852084516002948502909101908155938101519382019390935560408051808201825243815280850186815260058b0180548086018255908852958720915195909402019384559151920180546001600160a01b0319166001600160a01b03938416179055519085169133917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da729190a350505050565b60085481565b600b5481565b60006106ba8243610ef8565b60006106ba43836115c2565b6001600160a01b0381161580159061097d57506001600160a01b0381163314155b6109bf576040805162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081d185c99d95d60921b604482015290519081900360640190fd5b6109c881610944565b15610a045760405162461bcd60e51b8152600401808060200182810382526035815260200180611cac6035913960400191505060405180910390fd5b33600090815260016020819052604082209190610a22908301611849565b90506000610a328360050161183d565b90506001600160a01b03811615610acc57836001600160a01b0316816001600160a01b03161415610a6557505050610bc1565b6001600160a01b03811660009081526001602090815260409182902082518084019093524383529160068301918101610aa18661088985611849565b9052815460018181018455600093845260209384902083516002909302019182559290910151910155505b6001600160a01b03841660009081526001602090815260409182902082518084019093524383529160068301918101610b0e86610b0885611849565b90611629565b9052815460018082018455600093845260208085208451600294850290910190815593810151938201939093556040805180820182524381526001600160a01b038b811682870181815260058d0180548088018255908a5297892093519790960290920195865593519490920180546001600160a01b03191694909316939093179091559051909133917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea29190a3505050505b50565b60006106ba4383610676565b610bdd4262093a806115e7565b811115610be957600080fd5b806005541015610bc157600554600090610c04906001611629565b90506000610c126003611849565b905060005b838311610e46576000546040805163bbb30c5d60e01b815230600482015290516001600160a01b039092169163bbb30c5d91602480820192602092909190829003018186803b158015610c6957600080fd5b505afa158015610c7d573d6000803e3d6000fd5b505050506040513d6020811015610c9357600080fd5b5051610d0957604080518082018252600080825243602080840191825287835260048152848320935184559051600190930192909255600b54835191825291810191909152815185927fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde4928290030190a2610e34565b610d1282611897565b6000610d3c6305f5e100610d366034610d36600b54886119a990919063ffffffff16565b906115e7565b604080518082018252828152436020808301918252600089815260049091529290922090518155905160019091015590508015610df35760008054604080516340c10f1960e01b81523060048201526024810185905290516001600160a01b03909216926340c10f199260448084019382900301818387803b158015610dc157600080fd5b505af1158015610dd5573d6000803e3d6000fd5b50505050610dec818461162990919063ffffffff16565b9250600191505b600b54604080518381526020810192909252805186927fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde492908290030190a2505b610e3f836001611629565b9250610c17565b60058490558015610ec85760408051808201909152438152602081018381526003805460018101825560009190915291517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600290930292830155517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c909101555b50505050565b60065481565b60006106fc436107a9565b60055481565b60075481565b60006106ba6002836116fe565b6001600160a01b03821660009081526001602052604081208190610f1f9060050184611a02565b6001600160a01b03161515949350505050565b6001602052600090815260409020805460028201546003830154600484015460078501546008860154600a870154600b9097015495969495939460ff909316939192909188565b60006106ba610f866106f1565b610d36610f91610ed4565b610f9a86610fc4565b906119a9565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006106ba43835b6001600160a01b03811660009081526001602081905260408220610ff19101846116fe565b9392505050565b603481565b60006106ba826110104262093a806115e7565b611034565b600a5481565b6004602052600090815260409020805460019091015482565b60008061103f611b56565b905061104a81610bd0565b60006110594262093a806115e7565b90506000611065611683565b6001600160a01b0387166000908152600160205260409020600a8101549192509083871180159061109557508087115b80156110a057508287115b6110e2576040805162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081d185c99d95d60921b604482015290519081900360640190fd5b82811015611180576000835b8881116111735760008181526004602052604081206001810154909190611117906002906116fe565b9050600061112c8760010184600101546116fe565b905061115361114c83610d368487600001546119a990919063ffffffff16565b8690611629565b945050505061116c60018261162990919063ffffffff16565b90506110ee565b5095506113059350505050565b60028201546000611192836001611629565b90505b88811161121357600081815260046020526040812060018101549091906111be906002906116fe565b905060006111d38760010184600101546116fe565b90506111f361114c83610d368487600001546119a990919063ffffffff16565b945050505061120c60018261162990919063ffffffff16565b9050611195565b5061123f7f00000000000000000000000000000000000000000000000000000000000000006034611629565b88106112fe57600b8301545b611256856001611855565b81116112fc57600060048161126c846034611855565b81526020019081526020016000209050600061128d600283600101546116fe565b905060006112a28760010184600101546116fe565b905060006112c183610d368487600001546119a990919063ffffffff16565b90508086116112d15760006112db565b6112db8682611855565b9550505050506112f560018261162990919063ffffffff16565b905061124b565b505b9550505050505b5092915050565b600061131b4262093a806115e7565b336000908152600160205260409020600a810154919250908214611343576113433383610701565b6000816002015482600001541161135b57600061136b565b6002820154825461136b91611855565b9050600082600301548211611381576000611391565b6003830154611391908390611855565b9050848110156113e8576040805162461bcd60e51b815260206004820181905260248201527f416d6f756e74206578636565647320617661696c61626c652062616c616e6365604482015290519081900360640190fd5b82546113f49086611855565b8355600080546040805163a9059cbb60e01b81526001600160a01b038a81166004830152602482018a90529151919092169263a9059cbb92604480820193602093909283900390910190829087803b15801561144f57600080fd5b505af1158015611463573d6000803e3d6000fd5b505050506040513d602081101561147957600080fd5b50506040805186815290516001600160a01b0388169133917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63989181900360200190a3505050505050565b6001600160a01b0381166000908152600160205260409020546114e69083611629565b6001600160a01b03808316600090815260016020908152604080832094909455815484516323b872dd60e01b815288851660048201523060248201526044810188905294519316936323b872dd9360648083019491928390030190829087803b15801561155257600080fd5b505af1158015611566573d6000803e3d6000fd5b505050506040513d602081101561157c57600080fd5b50506040805183815290516001600160a01b038316917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a2505050565b6001600160a01b0381166000908152600160205260408120610ff190600601846116fe565b6000610ff183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611baf565b600082820183811015610ff1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000806116934262093a806115e7565b90506116c07f00000000000000000000000000000000000000000000000000000000000000006034611629565b8110156116ed577f00000000000000000000000000000000000000000000000000000000000000006116f8565b6116f8816034611855565b91505090565b815460009061170f575060006106ba565b8254839061171e906001611855565b8154811061172857fe5b9060005260206000209060020201600001548210611772578254839061174f906001611855565b8154811061175957fe5b90600052602060002090600202016001015490506106ba565b8260008154811061177f57fe5b9060005260206000209060020201600001548210156117a0575060006106ba565b825460009081906117b2906001611855565b90505b818111156118155760006117d36002610d366001610b088688611629565b9050848682815481106117e257fe5b906000526020600020906002020160000154116118015780925061180f565b61180c816001611855565b91505b506117b5565b84828154811061182157fe5b9060005260206000209060020201600101549250505092915050565b60006106ba8243611a02565b60006106ba82436116fe565b6000610ff183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c51565b6008546118a957600654600b55610bc1565b600060085482106118c7576008546118c2908390611855565b6118d4565b6008546118d49083611855565b905060006118f5600854610d366305f5e100856119a990919063ffffffff16565b90506000611915620f4240610d36600954856119a990919063ffffffff16565b90506000600854851015611948576119416305f5e100610d366119388286611629565b600b54906119a9565b9050611972565b816305f5e1001161195a57600061196f565b61196f6305f5e100610d366119388286611855565b90505b60065481101561198757600654600b556119a2565b60075481111561199c57600754600b556119a2565b600b8190555b5050505050565b6000826119b8575060006106ba565b828202828482816119c557fe5b0414610ff15760405162461bcd60e51b8152600401808060200182810382526021815260200180611ce16021913960400191505060405180910390fd5b8154600090611a13575060006106ba565b82548390611a22906001611855565b81548110611a2c57fe5b9060005260206000209060020201600001548210611a815782548390611a53906001611855565b81548110611a5d57fe5b60009182526020909120600160029092020101546001600160a01b031690506106ba565b82600081548110611a8e57fe5b906000526020600020906002020160000154821015611aaf575060006106ba565b82546000908190611ac1906001611855565b90505b81811115611b24576000611ae26002610d366001610b088688611629565b905084868281548110611af157fe5b90600052602060002090600202016000015411611b1057809250611b1e565b611b1b816001611855565b91505b50611ac4565b848281548110611b3057fe5b60009182526020909120600290910201600101546001600160a01b031695945050505050565b600080611b664262093a806115e7565b90506000611b7f6005548361185590919063ffffffff16565b90506005811115611ba657611ba1611b988260026115e7565b60055490611629565b611ba8565b815b9250505090565b60008183611c3b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c00578181015183820152602001611be8565b50505050905090810190601f168015611c2d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611c4757fe5b0495945050505050565b60008184841115611ca35760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611c00578181015183820152602001611be8565b50505090039056fe43616e6e6f742064656c656761746520746f206120757365722077686f2069732063757272656e746c792064656c65676174696e67536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220b658c324522934aaaf374fe01a1e6994a98a186a6e5e8f6641e88f9a640f999364736f6c634300060c0033";
