const { body, validationResult, header } = require('express-validator/check')
const magicWordsService = require('../service/magicWords');
const messages = require('../utils/messages').MAGIC_WORD

