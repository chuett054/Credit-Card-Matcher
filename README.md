Credit Card Matcher

Credit Card Matcher is a full-stack web application that analyzes a user’s monthly spending habits—across travel, dining, and other categories—and recommends the Capital One credit card that delivers the highest net benefit. It factors in reward rates, APR ranges, annual fees, and intro bonuses to calculate a personalized recommendation, complete with a clear summary explaining why that card is the best fit.

Demo

Try it live: https://credit-card-matcher.vercel.app/

Features
	•	Dynamic Scoring Engine: Weighs rewards, fees, APR costs, and bonus offers to compute net annual benefit.
	•	Personalized Summary: Highlights your top spend category and explains why the recommended card maximizes your rewards.
	•	Elegant UI: Built with React and Material-UI, featuring a fintech-inspired theme and intuitive form/result flow.
	•	Deployments:
	•	Frontend: Hosted on Vercel (React app)
	•	Backend: Hosted on Render (Express API) with secure CORS configuration

Tech Stack
	•	Frontend: React, Material-UI, Axios
	•	Backend: Node.js, Express, CORS
	•	Data: JSON file containing Capital One card details and reward parameters
	•	Hosting: Vercel (client), Render (API)

Installation & Local Development
	1.	Clone the repo:

git clone https://github.com/<your-username>/Credit-Card-Matcher.git
cd Credit-Card-Matcher


	2.	Install & run the API:

cd server
npm install
node index.js


	3.	Install & run the client:

cd ../client
npm install
npm start


	4.	Visit http://localhost:3000 to use the app locally.

License

This project is open-source and available under the MIT License.
