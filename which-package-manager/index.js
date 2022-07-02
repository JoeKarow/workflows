const { detect } = require('detect-package-manager');
const core = require('@actions/core');

try {
  const pm = detect().then((result) => {
    core.setOutput('package_manager', result);
  });
} catch (error) {
  core.setFailed(error.message);
}
