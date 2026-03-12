const fs = require('fs');
const { execSync } = require('child_process');

const configDir = '/root/.clawdbot';
const agentDir = '/root/.clawdbot/agents/main/agent';
fs.mkdirSync(agentDir, { recursive: true });

const config = {
  agents: { defaults: { model: { primary: "anthropic/claude-haiku-4-5-20251001" }, workspace: "/root/clawd" } },
  gateway: { mode: "local", auth: { mode: "token", token: "116260a7a4899ae9933000e5ebe2c98c6ea03569d3f65bf1" } },
  channels: { telegram: { enabled: true, botToken: process.env.TELEGRAM_BOT_TOKEN } }
};
fs.writeFileSync(configDir + '/clawdbot.json', JSON.stringify(config));

const auth = {
  version: 1,
  profiles: { "anthropic:default": { type: "api_key", provider: "anthropic", key: process.env.ANTHROPIC_API_KEY } },
  lastGood: { anthropic: "anthropic:default" }
};
fs.writeFileSync(agentDir + '/auth-profiles.json', JSON.stringify(auth));

execSync('clawdbot gateway', {stdio:'inherit', env: Object.assign({}, process.env, {HOME: '/root'})});
