const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Polite interrogative request',
      input: 'oyaata mata udhav karanna puluvandha?',
      expected: 'ඔයාට මට උදව් කරන්න පුලුවන්ද?',
      category: 'Common requests',
      grammar: 'Interrogative sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Casual greeting with slang',
      input: 'good morning! hoDHAta exam liyanna.',
      expected: 'good morning! හොඳට exam ලියන්න.',
      category: 'greetings',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Urgent informal request',
      input: 'oyaata puluvan ikmanata meeka confirm karanna',
      expected: 'ඔයාට පුලුවන් ඉක්මනට මේක confirm කරන්න',
      category: 'Informal language',
      grammar: 'Imperative sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Short informational statement',
      input: 'meeting eka @9 a.m.',
      expected: 'meeting එක @9 a.m.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Emotional informal question',
      input: 'ayiyoo... aeyi haemavelaavema mama',
      expected: 'අයියෝ... ඇයි හැමවෙලාවෙම මම',
      category: 'Informal language',
      grammar: 'Interrogative sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Direct command',
      input: 'eeka dhaen evanna.',
      expected: 'ඒක දැන් එවන්න.',
      category: 'Commands',
      grammar: 'Imperative sentence',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_007',
      name: 'Repeated-word emphasis',
      input: 'yanna, yanna, yanna!',
      expected: 'යන්න, යන්න, යන්න!',
      category: 'Emphasis expressions',
      grammar: 'Imperative sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Technical error message',
      input: 'login eka asaarThakayi.',
      expected: 'login එක අසාර්ථකයි.',
      category: 'Technical language',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_009',
      name: 'Polite interrogative request',
      input: 'oyaata meeka dhaen dhenna puluvandha?',
      expected: 'ඔයාට මේක දැන් දෙන්න පුලුවන්ද?',
      category: 'Common requests',
      grammar: 'Interrogative sentence',
      length: 'S'
    },
    
    // Compound sentence
    {
      tcId: 'Pos_Fun_010',
      name: 'Compound sentence with contrast',
      input: 'mama magee vaedee ivara kalaa. eeth hadhdhissiyeema magee laptop eka kaedunaa.',
      expected: 'මම මගේ වැඩේ ඉවර කලා. ඒත් හද්දිස්සියේම මගේ laptop එක කැඩුනා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Compound sentence with cause and result',
      input: 'mata eLiyata yanna onee unaa, eeth vahinna patan gaththa nisaa mama gedhara hitiyaa.',
      expected: 'මට එළියට යන්න ඔනේ උනා, ඒත් වහින්න පටන් ගත්ත නිසා මම ගෙදර හිටියා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Imperative with instruction',
      input: 'mata file eka email karanna. whatsApp eken evanna epaa.',
      expected: 'මට file එක email කරන්න. whatsApp එකෙන් එවන්න එපා.',
      category: 'Requests and instructions',
      grammar: 'Imperative sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Compound sentence with result',
      input: 'eyaa ee vaedee kalinma ivara kalaa. manager pudhuma unaa eeka dhaekalaa.',
      expected: 'එයා ඒ වැඩේ කලින්ම ඉවර කලා. manager පුදුම උනා ඒක දැකලා.',
      category: 'Workplace communication',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'mama iiyee gedhara giyaa',
      expected: 'මම ඊයේ ගෙදර ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'api heta kolambata yamu',
      expected: 'අපි හෙට කොලඹට යමු',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'mata epaa eeka',
      expected: 'මට එපා ඒක',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'eyaalaa heta enavaa',
      expected: 'එයාලා හෙට එනවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'poddak innako mama ennam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'mata Facebook account eka login karanna baee',
      expected: 'මට Facebook account එක login කරන්න බෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'nimeelaa Kandy giyaa',
      expected: 'නිමේලා Kandy ගියා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'supiri!',
      expected: 'සුපිරි!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'mata Rs. 500k oonee',
      expected: 'මට Rs. 500ක් ඕනෑ',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'mama heta office yanavaa eehindha mata adha raee kanna baee. oyaa mata raee eka savanna puluvandha',
      expected: 'මම හෙට office යනවා ඒහින්ද මට අද රෑ කන්න බෑ. ඔයා මට රෑ එක සවන්න පුලුවන්ද',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata     oonee  eeka',
      expected: 'මට ඕනෑ ඒක',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම ගෙදර යනවා කමල්ටත් කියන්න',
      expected: 'මම යනවම්\nගෙදර',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang supiriyaane',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adooo mokakkdha mee',
      expected: 'අඩෝඕ මොකක්ක්ද මේ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mamaWhatsAppekagiyaa',
      expected: 'මම WhatsApp එකගියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka oonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eyi bro eeka set karala denna',
      expected: 'එයි bro ඒක set කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
