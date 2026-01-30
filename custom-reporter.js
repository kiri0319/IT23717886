const fs = require('fs');
const path = require('path');

class CustomMarkdownReporter {
  constructor() {
    this.results = [];
  }

  onTestEnd(test, result) {
    this.results.push({
      title: test.title,
      status: result.status,
      duration: result.duration || 0,
      error: result.error ? (result.error.message || String(result.error)) : null,
      attachments: result.attachments || []
    });
  }

  onEnd() {
    const lines = [];
    const total = this.results.length;
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = total - passed;

    lines.push('# Test Report');
    lines.push('');
    lines.push(`- Total: ${total}`);
    lines.push(`- Passed: ${passed}`);
    lines.push(`- Failed: ${failed}`);
    lines.push('');

    this.results.forEach(r => {
      const statusIcon = r.status === 'passed' ? '✅' : '❌';
      lines.push(`## ${statusIcon} ${r.title}`);
      lines.push(`- Status: ${r.status}`);
      lines.push(`- Duration(ms): ${r.duration}`);
      if (r.error) lines.push(`- Error: ${r.error}`);
      if (r.attachments && r.attachments.length) {
        r.attachments.forEach(a => {
          lines.push(`- Attachment: ${a.name || a.path || 'attachment'}`);
        });
      }
      lines.push('');
    });

    const out = lines.join('\n');
    try {
      fs.writeFileSync(path.join(process.cwd(), 'test-report.md'), out, 'utf8');
    } catch (e) {
      // swallow write errors
      console.error('Failed to write test-report.md', e);
    }
  }
}

module.exports = CustomMarkdownReporter;
