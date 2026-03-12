// Railway keep-alive
process.env.HOME = process.env.HOME || '/root';
require('child_process').execSync('clawdbot gateway --force', {stdio:'inherit'});
