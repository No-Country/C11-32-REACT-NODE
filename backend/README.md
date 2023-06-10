# SpeakUp - Backend

EnglishConnect is a calling application designed to help you practice and improve your fluency in any language, focusing on grammar resources. This repository contains the backend of the application, developed using Typescript, Express, Sequelize,PostgreSQL.

## Key Features

- User Management: registration, login, and authentication.
- User Profiles: users can create profiles
- Real-time Conversations: users can have real-time audio and video calls to practice their language skills.
- Grammar Resources: users can access additional learning materials, such as grammar exercises and vocabulary.
- subscriptions plans to use all features

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (with a created database)

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/No-Country/C11-32-REACT-NODE/tree/main/backend
```

2. Install the project dependencies:

```
pnpm i
```

3. Create an `.env` file in the root of the project and configure the necessary environment variables. You can find an example configuration in the `.env.example` file.  
   You need to generate a token in SDKvideos and the secret key in Stripe
4. Create a database with the name `speakup`
5. Start the server:

```
pnpm dev
```
