# Credit Card Matcher

**Demo:** [https://credit-card-matcher.vercel.app/](https://credit-card-matcher.vercel.app/)

**Key Contributors:**

* **Cole Huetten (@chuett054)** – Lead Developer

  * Architected and implemented the full-stack application: React/MUI frontend, Express API backend, and CI/CD deployments.
* **Graham Ellingson (@grahamelli22)** – Lead Financial Analyst

  * Developed the APR cost model, reward rate calculations, intro bonus logic, and validated scoring parameters to ensure accurate net-benefit recommendations.

## Overview

Credit Card Matcher is a web application that analyzes a user’s monthly spending habits—across travel, dining, and other categories—and recommends the Capital One credit card that delivers the highest net benefit. It factors in reward rates, APR ranges, annual fees, and intro bonuses to calculate a personalized recommendation, complete with a clear summary explaining why that card is the best fit.

## Features

* **Dynamic Scoring Engine**: Weighs rewards earned, APR costs, annual fees, and bonus offers to generate a net annual benefit score.
* **Personalized Summary**: Highlights your top spend category and explains why the recommended card maximizes your rewards.
* **Elegant UI**: Built with React and Material-UI, featuring a fintech-inspired theme and an intuitive user flow.
* **Health Check & CORS**: Express API includes health-check endpoint and secure CORS setup for seamless integration with the frontend.

## Tech Stack

* **Frontend**: React, Material-UI, Axios
* **Backend**: Node.js, Express, CORS
* **Data**: JSON configuration of Capital One card details (APR, fees, rewards)
* **Hosting**: Vercel (frontend), Render (API)

## Installation & Local Development

1. **Clone the repo**:

   ```bash
   git clone https://github.com/chuett054/Credit-Card-Matcher.git  
   cd Credit-Card-Matcher  
   ```
2. **API setup**:

   ```bash
   cd server  
   npm install  
   node index.js  
   ```
3. **Client setup**:

   ```bash
   cd ../client  
   npm install  
   npm start  
   ```
4. **Access** the application at `http://localhost:3000`.

## License

This project is open-source and available under the MIT License.



