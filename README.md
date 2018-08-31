<h3>Demo</h3>
https://dev-connect-app.herokuapp.com/

<h3>What is it?</h3>
<p>Social Network for Developers with authentication, Developer Profiles with latest repositories from the github api. Protected route “Post Feed” which allows users to create posts and make comments on other users posts.</p>

<h3>What technologies are used?</h3>
<p>React, Redux, Node, Express, MongoDB and Bootstrap</p>

<h3>How to run it</h3>

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
You will need to create a keys_dev.js in the server config folder with

module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

<h3>How to use it</h3>

Register with any email or use (email: test@test.com, password: testpassword) to login.
Create Your profile by filling in the required fields.

<img src="https://github.com/KabirMaan/profile-app/blob/master/readme-images/image-1.jpg" width="1100" title="Dashboard">

Click on the Developers Tab in the Navbar to view profiles.

<img src="https://github.com/KabirMaan/profile-app/blob/master/readme-images/image-2.jpg" width="1100" title="Add Client">

Click on the Post Feed Tab to view/create posts and comment/like existing posts.

<img src="https://github.com/KabirMaan/profile-app/blob/master/readme-images/image-3.jpg" width="1100" title="Details">

Click on the Dashboard Tab to view/edit current profile

<img src="https://github.com/KabirMaan/profile-app/blob/master/readme-images/image-4.jpg" width="1100" title="Dashboard">
