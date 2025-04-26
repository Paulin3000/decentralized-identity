# Mask Identity

## Overview

Mask Identity is a frontend prototype designed to improve trust, transparency, and usability in decentralized identity (DI) and self-sovereign identity (SSI) systems. It functions as a digital identity wallet allowing users to manage their verifiable credentials.

The application supports three distinct roles:
- **Credential Holder**: The main user who owns and manages their credentials
- **Credential Issuer**: Responsible for creating, managing, and revoking credentials
- **Credential Verifier**: Checks if credentials presented by the holder are authentic and valid

This prototype delivers a user-friendly experience for storing, requesting, sharing, and verifying credentials while prioritizing usability, trust, and transparency.

## Installation

### Clone the repository:
```bash
git clone git@github.com:Paulin3000/mask-identity.git
cd mask-identity
```

### Install dependencies:
```bash
npm install
```

### Run the application locally:
```bash
npm run dev
```

The app will be available at http://localhost:5173/

## Features and Basic Operation

- **Start Screen**: Navigate between "Credentials", "Sharing", "Settings", and "Info" sections from the homepage
- **Credential Storage**: View all credentials, check their status, and access detailed information
- **Request New Credential**: Request credentials by entering the issuer's DID and signing the request
- **Selective Sharing**: Choose specific parts of credentials to share with verifiers using selective disclosure
- **Settings Page**: View and manage personal information and preferences
- **Info Page**: Learn more about decentralized identity
- **Role Switching**: Switch between different roles (Holder, Issuer, Verifier) using the role selector in the navigation bar

### Issuer Role
- Receive credential requests, verify provided data, and issue or reject credentials
- View all previously issued credentials with detailed information
- Revoke issued credentials when necessary

### Verifier Role
- View incoming verification requests
- Verify received credentials through blockchain-simulated verification