# Trikl - DeFi Copy Trading For Crypto

[Trikl](https://trikl.xyz/) is a DeFi Copy Trading Platform, similar to eToro but decentralized. Our decentralized application (dApp) enables crypto experts to share their high-earning portfolios. Copy traders can instantly clone trades and match portfolios to earn a high return on investment with minimal effort.

## Why We Exist?
Most crypto influencers, who trade and provide signals, preach decentralization and trustless ownership. However, these influencers are forced to use centralized social media groups due to a lack of DeFi platforms catering to their needs. Since they cannot practice what they preach and their operations are opaque and centralized, their followers don’t fully trust them. Moreover, their followers have to use centralized platforms to follow recommendations and manually copy trades.

Trikl is the first of its kind platform to solve these issues with a transparent, on-chain, secure platform that curates the top-performing crypto traders and their recommendations/portfolios, and allows users to invest automatically in a few simple steps.

## About This Version
- This is a proof-of-concept version for demonstrating the concept with one expert trader and one copy trader (or new user).
- We've already created the portfolio for an expert that tracks their [Metamask](https://metamask.io/) wallet in real-time.
- A copy trader can connect their Metamask wallet and subscribe to the expert trader and choose the amount they want to invest.

---

## Getting Started With The Code
### Setting Front-end
- Make sure you've react and node installed on your system.
- clone this github repository in your local directory using: `git clone https://github.com/crypto-case/trikl-poc-v1.git`
- Inside the front-end directory, install the required files using `npm install or npm i`
- To start the application use: `npm run start`
- Your browser should automatically take you to `http://localhost:3000/` where you can host the website

---

### Detailed Example Showing PoC Functions:
- Crypto Expert
  - **Trados, a crypto expert** earning high returns, shares his portfolio on Trikl
  - Current portfolio composition of Trados is as follows:

    | Crypto  | Share (%) |
    | ------------- | ------------- |
    | Ether (ETH)  | 80%  |
    | Bitcoin (BTC)  | 20%  |

  - Trados sets a subscription charge for his portfolio as **$10 per month**
  - Trikl's cloud functions tracks Trados' Metamask wallet in real-time
- Copy Trader
  - **Newman, a copy trader** wants to copy trade Trados' portfolio
  - So Newman makes a payment of $100 through his Metamask and subscribes to Trados' portfolio
- Subscription  
  - Newman's funds are swapped on Uniswap to match Trados' current portfolio

    | Crypto  | Share (%) |  Value Worth (USD) |
    | ------------- | ------------- | ------------- |
    | Ether (ETH)  | 80%  | 80 |
    | Bitcoin (BTC)  | 20%  | 20 |

  - Then this funds are transferred to smart contract made for Trados on Trikl - let's call it SC~Trados~
- Cloning Function
  - Trados buys **MATIC** token and his new portfolio looks as follows:

    | Crypto  | Share (%) |
    | ------------- | ------------- |
    | Ether (ETH)  | 70%  |
    | Bitcoin (BTC)  | 20%  |
    | Polygon (MATIC)  | 10%  |
    
  - In realtime the funds stored in smart contract (currently of Newman) rebalances to match Trados' new portfolio
  - The new asset composition of SC~Trados~ becomes as follows:

    | Crypto  | Share (%) |  Value Worth (USD) |
    | ------------- | ------------- | ------------- |
    | Ether (ETH)  | 70%  | 70 |
    | Bitcoin (BTC)  | 20%  | 20 |
    | Polygon (MATIC)  | 10%  | 10 |

- Withdraw Function
  - Newman's funds are stored and copy traded using Trikl's smart contract in such a way that:
    - Only Newman (depositor) can withdraw the funds
    - Funds can be withdrawn at any given point in time
  - After 15 days, Newman's $100 copy trading portfolio has grown to $500
  - He wants to withdraw a portion of his funds
  - He clicks the withdraw button on his dashboard and enters 50% to withdraw half of his total fund value (i.e., $250)
  - The amount is instantly transferred back to Newman's Metamask Wallet
