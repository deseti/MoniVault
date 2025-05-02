# MoniVault

MoniVault is a decentralized finance application that integrates with Farcaster to provide social-powered vault management for cryptocurrency assets.

## 🚀 Features

- **Social Integration**: Connect with friends on Farcaster and see their vaults
- **Secure Vaults**: Manage your crypto assets in secure vaults
- **Easy Deposits**: Simple interface for depositing funds
- **Friend Activity**: Track your friends' vault activities
- **Web3 Native**: Built for the decentralized web

## 📋 Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Web3**: EVM compatible smart contracts
- **Social**: Farcaster integration
- **Wallet**: Frame Wallet Provider

## 🏗️ Project Structure

```
MoniVault/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── Dashboard/        # Dashboard related components
│   ├── Home/             # Home page components
│   └── pages/            # Page layouts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and constants
│   └── abi/              # Smart contract ABIs
│   └── config/           # Contract configurations
├── public/               # Static assets
├── types/                # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A Web3 wallet (like MetaMask or Frame)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deseti/MoniVault.git
   cd MoniVault
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add necessary environment variables:
   ```
   # Farcaster Configuration
   NEXT_PUBLIC_FARCASTER_HUB_URL=
   NEXT_PUBLIC_FARCASTER_NETWORK=
   
   # Contract Configuration
   NEXT_PUBLIC_MONIVAULT_CONTRACT_ADDRESS=
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔒 Smart Contracts

The MoniVault smart contract provides the following functionality:
- Creating personal vaults
- Depositing funds
- Withdrawing funds
- Friend management
- Activity tracking

## 📝 Documentation

For more detailed information about the project architecture and components, please check out the following:

- [Contributing Guide](./CONTRIBUTING.md)
- [License Information](./LICENSE)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📞 Contact

For questions or feedback, please open an issue or contact the maintainers through [GitHub](https://github.com/deseti).