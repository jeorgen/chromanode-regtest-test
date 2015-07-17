#!/usr/bin/env node

require('longjohn')

require('../app/common').run(function() {
    return require('../app/master').run()
})