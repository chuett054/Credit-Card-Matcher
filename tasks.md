## Engineer
- [x] Initialize repo; set up React (client/) and Express (server/) boilerplate  
- [ ] Build “Spend Profile” form (client/src/components/SpendProfileForm.js)  
- [ ] Create backend endpoint POST `/api/spend-profile` (server/index.js)  
- [ ] Wire in placeholder scoring logic (server/scoring.js + cardData.json)  
- [ ] Test end-to-end: form → API → JSON response  
- [ ] Next: Build `ResultPage` component to display recommendation

## Finance
- [ ] **(Due now)** Draft initial scoring weights:
  - Multipliers for travel, dining, other spend
  - APR penalty rules (e.g. APR >20% → −1× penalty)
- [ ] Populate `server/cardData.json` with 3–5 real card profiles:
  - name, logoUrl, reward rates, APR  
- [ ] Share JSON or Google Doc of weights & card stats for refinement  
- [ ] After tests: Adjust weights for intuitive outputs  