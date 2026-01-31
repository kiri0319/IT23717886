const { test, expect } = require('@playwright/test');

const TEST_CASES = [
  { id: 'Pos_Fun_0001', input: 'Hello eppadi sugamaa irukireengaloo?', expected: 'ஹலோ எப்படி சுகமா இருக்கிறீங்களா?  ' },

  { id: 'Pos_Fun_0002', input: 'Naan colombo pogiren.', expected: 'நான் கொழும்பு போகிறேன். ' },

  { id: 'Pos_Fun_0003', input: 'enakku orukka help pannuveengala? ', expected: 'எனக்கு ஒருக்கா ஹெல்ப் பண்ணுவீங்களா? ' },

  { id: 'Pos_Fun_0004', input: 'seekiram vaanga pokonum.', expected: 'சீக்கிரம் வாங்க போகனும். ' },

  { id: 'Pos_Fun_0005', input: 'Naan onnum athaii seijelai.', expected: 'நான்  ஒன்னும்  அதை செய்யல' },

  { id: 'Pos_Fun_0006', input: 'naan ippo veetukku pogiren piraku thaan  kovil povan.', expected: 'நான் இப்போ வீட்டுக்கு போகிறேன் பிறகு தான் கோவில் போவேன். ' },

  { id: 'Pos_Fun_0007', input: 'namma sir oodai zoom class inniku irukkaa?', expected: 'நீங்க நாளைக்கு கிளாஸ் வருவீங்களா?' },

  { id: 'Pos_Fun_0008', input: 'Nee eppo assignment submit seiyappogirai?', expected: 'நம்ம சார் ஓடை zoom கிளாஸ் இன்னிக்கு இருக்கா?' },

  { id: 'Pos_Fun_0009', input: ' nallaai paaduvaangal.', expected: ' நல்லாய் பாடுவாங்கள். ' },

  { id: 'Pos_Fun_0010', input: 'naan netru thaan veetukku ponen.', expected: 'நான் நேற்று தான் வீட்டுக்கு போனேன் .' },

  { id: 'Pos_Fun_0011', input: 'naan naalaikuu thaan colombo poren.', expected: 'நான் நாளைக்கு தான் கொழும்பு போறேன் .  ' },

  { id: 'Pos_Fun_0012', input: 'naan akka oodai australia poka poren.', expected: 'நான் அக்கா ஓடை ஆஸ்திரேலியா போக  போறேன் .' },

  { id: 'Pos_Fun_0013', input: 'ennaku oru Rs1000 venum annupi viduriyaa?', expected: 'எனக்கு ஒரு Rs1000 வேணும் அனுப்பி விடுறியா ?' },

  { id: 'Pos_Fun_0014', input: 'meeting indaikku 10.30am aam.', expected: 'மீட்டிங் இண்டைக்கு 10.30am ஆம் . ' },

  { id: 'Pos_Fun_0015', input: 'neengal romba romba kastapadureengal.', expected: 'நீங்கள் ரொம்ப ரொம்ப கஷ்டப்படுறீங்கள் .' },

  { id: 'Pos_Fun_0016', input: 'naannaalaikuthaanvaruven.', expected: 'நான்நாளைக்குதான்வருவேன் . ' },

  { id: 'Pos_Fun_0017', input: 'semma da kutty.', expected: 'செம்ம டா குட்டி .    ' },

  { id: 'Pos_Fun_0018', input: 'intha bus nala traffic lai maatiruchuu adhunaala office pogave late aaka pokuthu.', expected: 'இந்த பஸ் நல்ல டிராபிக் லாய் மாட்டிருச்சுவதுனால  ஆபீஸ்  போகவே  லேட்டா  ஆக  போகுது .     ' },

  { id: 'Pos_Fun_0019', input: 'naan koviluku pogiren\nneengalum varuveengala? ', expected: 'நான் கோவிலுக்கு போகிறேன் \நீங்களும்  வருவீங்களா?' },

  { id: 'Pos_Fun_0020', input: 'email orukka anuppi viduvingaloo?', expected: 'ஈமெயில் ஒருக்கா அனுப்பி விடுவிங்களோ ?  ' },

  { id: 'Pos_Fun_0021', input: 'orukka konjam help pannuveengaloo? ', expected: 'ஒருக்கா கொஞ்சம் ஹெல்ப் பண்ணுவீங்களோ ?  ' },

  { id: 'Pos_Fun_0022', input: 'sorry ennalai intha porupuu seija eelathu.', expected: 'சொரி என்னால இந்த  பொறுப்புக்கு சேஜை ஏலாது.  ' },

  { id: 'Pos_Fun_0023', input: 'unkadai numberku vanthaa otp aai sollungoo? ', expected: 'உங்கடை numberku வந்தா otp  ஆய் சொல்லுங்கோவ்?  ' },

  { id: 'Pos_Fun_0024', input: 'athaii seija mudiyumaa illaiyaa?', expected: 'அதைஇ சேஜை முடியுமா இல்லையா ?  ' },

  { id: 'Pos_UI_0001', input: 'naan ammama veedai pogiren.', expected: 'நான் அம்மம்மா வீடை போகிறேன் .' },

   { id: 'Neg_Fun_0001', input: 'naannaalaikuthaanvaruven.', expected: 'நான் நாளைக்குத்தான் வருவேன்.' },

  { id: 'Neg_Fun_0002', input: 'naaaaan uniiiiiiiku pooooreeen', expected: 'நான் யூனிவர்சிட்டிக்கு போகிறேன் ' },

  { id: 'Neg_Fun_0003', input: 'naan university ku bus lai poren because traffic romba adhigam', expected: 'நான் யுனிவர்சிட்டிகு பஸ்  லை போறேன்  because  டிராபிக்  ரொம்ப அதிகம்  ' },

  { id: 'Neg_Fun_0004', input: 'romba boreaai irukudaa kavi ', expected: 'ரொம்ப போரீஐ இருக்குடா  கவி  ' },

  { id: 'Neg_Fun_0005', input: 'naen veetuku pogiraen nee piraku vaaaven', expected: 'நான் வீட்டுக்கு போகிறேன்நீ  பிறகு  வாவென் ' },

  { id: 'Neg_Fun_0006', input: 'avan     aai   netru      jaffnalai     kandanan.', expected: 'அவன்      ஆய்    நேற்று       jaffnalai     கண்டனான் .' },

  { id: 'Neg_Fun_0007', input: 'naan university ku pogiren aana weather romba mosama irukuu late aagum pola .', expected: 'நான்  யுனிவர்சிட்டி  கு  போகிறேன் .ஆனா  வெஅத்தேர்  ரொம்ப  மோசமா  இருக்கு லேட்டா  ஆகும்  போல  .' },

  { id: 'Neg_Fun_0008', input: 'amma market ku 10.00 ku pooi varuvanga', expected: 'அம்மா  மார்க்கெட்  கு  10.00 கு  போய் வருவாங்க  .' },

  { id: 'Neg_Fun_0009', input: 'nee eppo srilanka varuvaai', expected: 'நீ  எப்போ  ஸ்ரீலங்கா  வருவாய் ' },

   { id: 'Neg_Fun_0010', input: '', expected: '' },










];

async function runTest(page, testInfo, inputText, expected) {
  await page.goto('https://tamil.changathi.com');
  const input = page.locator('textarea, input[type="text"]').first();
  await input.fill('');
  // Type character-by-character with delay to emulate user typing
  await input.type(inputText, { delay: 75 });
  // Press space to trigger transliteration
  await page.keyboard.press('Space');

  // Poll for conversion
  const attempts = 8;
  const waitMs = 800;
  let output = '';
  for (let i = 0; i < attempts; i++) {
    output = await input.inputValue();
    if (output && output.includes(expected)) break;
    await page.waitForTimeout(waitMs);
  }

  // Attach test data for reporters
  await testInfo.attach('test-data', { body: Buffer.from(JSON.stringify({ input: inputText, expected, output })), contentType: 'application/json' });

  const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
  expect(normalize(output)).toContain(normalize(expected));
}

for (const tc of TEST_CASES) {
  test(tc.id + ' - ' + tc.input, async ({ page }, testInfo) => {
    await runTest(page, testInfo, tc.input, tc.expected);
  });
}
