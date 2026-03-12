process.env.HOME = '/app';
const { execSync } = require('child_process');
execSync('clawdbot gateway', {stdio:'inherit'});
