/**
 * Script to build comprehensiveVocabKnowledgeBase.ts
 */
const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/comprehensiveVocabKnowledgeBase.ts');

console.log('Generating comprehensive primary English vocabulary knowledge base...');
