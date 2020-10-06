const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User_Cntrl = require('../../controllers/Student_cntrl');
//const { json } = require('express');

const User = require('../../models/User');

/////////////////////////////////////////////////////////////
// @route    POST api/users/register
// @desc     Register User
// @access   Public

router.post('/register', User_Cntrl.validationChecks, User_Cntrl.CreateUser);

/////////////////////////////////////////////////////////////
// @route    POST api/auth/login
// @desc     Authenticate User & get token
// @access   Public

router.post('/login', User_Cntrl.validateLoginInput, User_Cntrl.loginUser);

/////////////////////////////////////////////////////////////
// @route    GET api/User
// @desc     Get all Users
// @access   Public

router.get('/', User_Cntrl.getAllUsers);
/////////////////////////////////////////////////////////////



router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified) return res.json(false)
    const user = await User.findById(verified.id);
    if(!user) return res.json(false)

    return res.json(true)
  } catch (err) {
      return err.message
  }
    
});

/////////////////////////////////////////////////////////////

// @route    GET api/auth/userauth
// @desc     Test route
// @access   Public

router.get('/userauth', auth, User_Cntrl.authenticateUser);

/////////////////////////////////////////////////////////////

module.exports = router;
