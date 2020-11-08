const execa = require('execa');
const fs = require('fs');
(async () => {
    try {
        if (!fs.existsSync('dist')) {
            throw new Error('project not built, nothing to deploy (missing dist/)');
        }

        const gitStatus = await execa('git', ['status', '--porcelain'])
        if (gitStatus.stdout) {
            throw new Error('uncommitted changes found');
        }

        await execa('git', ['checkout', '--orphan', 'gh-pages']);
        await execa('git', ['--work-tree', 'dist', 'add', '--all']);
        await execa('git', ['--work-tree', 'dist', 'commit', '-m', "'gh-pages deploy'"]);
        await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
        await execa('git', ['checkout', '-f', 'master']);
        await execa('git', ['branch', '-D', 'gh-pages']);
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();