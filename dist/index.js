const core = require('@actions/core');
const child = require('child_process');

function showExit(...message) {
  console.log(...message);
  process.exit(0);
}

function runCLI(args, cli, stdio = 'pipe') {
  const pawn = child.spawnSync(
    cli,
    args.split(' '),
    { encoding: 'utf8', stdio }
  );
  if (pawn.stderr) showExit(pawn.stderr);
  return pawn;
}

try {
  runCLI('build', 'npm', 'inherit');
} catch (error) {
  core.setFailed(error.message);
}