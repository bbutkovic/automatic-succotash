const { exec } = require('child_process');
const execa = require('execa');
(async () => {
    try {
        await execa('git', ['checkout', '--orphan', 'gh-pages']);
        await execa('npm', ['run', 'build']);
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