//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Expert {
    address public expert;
    address public rebalancer;
    address public wETH;
    address public routerAddress;
    address public factoryAddress;
    mapping(address => uint256) public amount_deposited;
    address[] public tokens;
    uint256 public total_amount_deposited;
    uint256 DENOM = 1000;

    constructor(
        address _expert,
        address _wETH,
        address _rebalancer,
        address _routerAddress,
        address _factoryAddress
    ) {
        console.log("Deploying a Expert with address:", _expert);
        expert = _expert;
        wETH = _wETH;
        rebalancer = _rebalancer;
        routerAddress = _routerAddress;
        factoryAddress = _factoryAddress;
        tokens = [address(0)];
    }

    modifier onlyRebalancer() {
        require(msg.sender == rebalancer, "only rebalncer");
        _;
    }

    function deposit() external payable {
        require(msg.value > 0, "value should be positive");
        if (total_amount_deposited == 0) {
            amount_deposited[msg.sender] = msg.value;
            total_amount_deposited += msg.value;
        } else {
            uint256[] memory value_in_ETH;
            uint256 total_value_in_ETH;
            for (uint256 i = 0; i < tokens.length; i++) {
                //if
                if (tokens[i] != address(0)) {
                    uint256 value = getValueInETH(tokens[i]);
                    total_value_in_ETH += value;
                    value_in_ETH[i] += value;
                }
            }
            if (tokens.length > 1) {
                for (uint256 i = 1; i < tokens.length; i++) {
                    //if
                    if (value_in_ETH[i] > 0) {
                        uint256 amount_to_swap = (value_in_ETH[i] * msg.value) /
                            total_value_in_ETH;
                        _swap(address(0), tokens[i], amount_to_swap);
                    }
                }
            }
            amount_deposited[msg.sender] += msg.value;
            total_amount_deposited += msg.value;
        }
    }

    function getValueInETH(address _token)
        public
        view
        returns (uint256 valueInETH)
    {
        address tokenA = _token;
        address tokenB = wETH;

        address pairAddress = IUniswapV2Factory(factoryAddress).getPair(
            tokenA,
            tokenB
        );
        //assume large liquidity
        IUniswapV2Pair pair = IUniswapV2Pair(pairAddress);
        ERC20 token1 = ERC20(pair.token1());
        (uint256 Res0, uint256 Res1, ) = pair.getReserves();
        // decimals
        uint256 res0 = Res0 * (10**token1.decimals());
        return ((ERC20(tokenB).balanceOf(address(this)) * res0) / Res1); // return amount of token0 needed to buy token1
    }

    function _swap(
        address _token1, //from
        address _token2, //to
        uint256 _amount //amount to swap
    ) internal returns (uint256 swapped_amount) {
        require(_token1 != _token2, "tokens to swap can't be the same");
        if (_token1 != address(0) && _token2 != address(0)) {
            ERC20(_token1).approve(routerAddress, _amount);
            uint256 before_swap_token = ERC20(_token2).balanceOf(address(this));
            address[] memory path = new address[](3);
            path[0] = _token1;
            path[1] = wETH;
            path[2] = _token2;
            IUniswapV2Router02(routerAddress)
                .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                    _amount,
                    0,
                    path,
                    address(this),
                    block.timestamp
                );

            //token array updation
            bool contains = false;
            for (uint256 i = 0; i < tokens.length; i++) {
                if (tokens[i] == _token2) {
                    contains = true;
                    break;
                }
            }
            if (contains == false) {
                tokens.push(_token2);
            }
            //get balance and return as swapped amount
            uint256 after_swap_token = ERC20(_token2).balanceOf(address(this));
            swapped_amount = after_swap_token - before_swap_token;
            return swapped_amount;
        }

        if (_token1 == address(0)) {
            //make path
            //send msg.value
            uint256 before_swap_token = ERC20(_token2).balanceOf(address(this));
            address[] memory path = new address[](2);
            path[0] = wETH;
            path[1] = _token2;

            IUniswapV2Router02(routerAddress)
                .swapExactETHForTokens{
                value: _amount
            }(0, path, address(this), block.timestamp);

            // //token array updation
            bool contains = false;
            for (uint256 i = 0; i < tokens.length; i++) {
                if (tokens[i] == _token2) {
                    contains = true;
                    break;
                }
            }
            if (contains == false) {
                tokens.push(_token2);
            }
            //get balance and return as swapped amount
            uint256 after_swap_token = ERC20(_token2).balanceOf(address(this));
            swapped_amount = after_swap_token - before_swap_token;
            return swapped_amount;
        }

        if (_token2 == address(0)) {
            ERC20(_token1).approve(routerAddress, _amount);
            //make path
            uint256 ETH_before_bal = address(this).balance;
            address[] memory path = new address[](2);
            path[0] = _token1;
            path[1] = wETH;

            IUniswapV2Router02(routerAddress)
                .swapExactTokensForETHSupportingFeeOnTransferTokens(
                    _amount,
                    0,
                    path,
                    address(this),
                    block.timestamp
                );
            //get balance and return as swapped amount
            uint256 ETH_after_bal = address(this).balance;
            swapped_amount = ETH_after_bal - ETH_before_bal;
            return swapped_amount;
        }
    }

    // function withdrawInETH(uint256 _percent) external {
    //     uint256[] memory return_amount;
    //     for (uint256 i = 0; i < tokens.length; i++) {
    //         //if
    //         uint256 contract_balance = 0;
    //         if (tokens[i] == address(0)) {
    //             contract_balance = address(this).balance;
    //         } else {
    //             contract_balance = ERC20(tokens[i]).balanceOf(address(this));
    //         }
    //         return_amount[i] =
    //             (contract_balance * amount_deposited[msg.sender] * _percent) /
    //             (total_amount_deposited * DENOM);
    //     }
    //     //update balance
    //     total_amount_deposited -= amount_deposited[msg.sender];
    //     amount_deposited[msg.sender] =
    //         (amount_deposited[msg.sender] * (DENOM - _percent)) /
    //         DENOM;
    //     total_amount_deposited += amount_deposited[msg.sender];
    //     //swap and transfer back
    //     uint256 amount_to_transfer = return_amount[0];
    //     if (tokens.length > 1) {
    //         for (uint256 i = 1; i < tokens.length; i++) {
    //             amount_to_transfer += _swap(
    //                 tokens[i],
    //                 address(0),
    //                 return_amount[i]
    //             );
    //         }
    //     }
    //     payable(msg.sender).transfer(amount_to_transfer);
    // }

    function withdraw(uint256 _percent) external {
        uint256[] memory return_amount;
        if (tokens.length > 1) {
            for (uint256 i = 1; i < tokens.length; i++) {
                uint256 contract_balance = ERC20(tokens[i]).balanceOf(
                    address(this)
                );
                return_amount[i] =
                    (contract_balance *
                        amount_deposited[msg.sender] *
                        _percent) /
                    (total_amount_deposited * DENOM);
            }
        }
        uint256 ReturnETH = (address(this).balance *
            amount_deposited[msg.sender] *
            _percent) / (total_amount_deposited * DENOM);
        //update balance
        total_amount_deposited -= amount_deposited[msg.sender];
        amount_deposited[msg.sender] =
            (amount_deposited[msg.sender] * (DENOM - _percent)) /
            DENOM;
        total_amount_deposited += amount_deposited[msg.sender];
        //transfer back
        if (tokens.length > 1) {
            for (uint256 i = 1; i < tokens.length; i++) {
                ERC20(tokens[i]).transfer(msg.sender, return_amount[i]);
            }
        }
        payable(msg.sender).transfer(ReturnETH);
    }

    function rebalance(
        address[2] memory _swapped_tokens, //from, to
        uint256[2] memory _change_amount //change amount token 1 (from token)
    ) external onlyRebalancer {
        //sell always
        require(_change_amount[0] > _change_amount[1], "incorrect swapping");
        require(_swapped_tokens[0] != _swapped_tokens[1], "Same tokens");
        uint256 delta = 0;
        //calculate percent
        uint256 current_bal_tkn1 = 0;
        delta = _change_amount[0] - _change_amount[1];
        if (_swapped_tokens[0] != address(0)) {
            current_bal_tkn1 = ERC20(_swapped_tokens[0]).balanceOf(
                address(this)
            );
        } else {
            current_bal_tkn1 = address(this).balance;
        }
        uint256 swap_amount = (current_bal_tkn1 * delta) / _change_amount[0];
        //swap the pool
        _swap(_swapped_tokens[0], _swapped_tokens[1], swap_amount);
    }

    function tokenLength() external view returns (uint256) {
        return (tokens.length);
    }

    // function _updateComposition(address _token, uint256 _amount) internal {
    //     composition[_token] = _amount;
    // }
}
