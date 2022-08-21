import eeCli from '../src/ee-cli.js';
import { strict as assert } from 'assert';

assert.strictEqual(eeCli(), 'Hello from eeCli');
console.info("eeCli tests passed");
