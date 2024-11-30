import * as core from '@actions/core';
import * as github from'@actions/github';
import { execSync } from 'child_process';

const linting = core.getInput('linting');
const tests = core.getInput('tests');
const packageManager = core.getInput('package-manager');
const nodeVersion = core.getInput('node-version');

if (packageManager === 'yarn') {
  console.log('Enabling corepack');
  execSync('corepack enable');
}
