const express = require('express')
const fs = require('fs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const key = require('../config/keys.js')

const app = express()

const user = require('../models/user.js')

