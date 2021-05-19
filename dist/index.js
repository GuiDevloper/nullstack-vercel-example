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
  console.log(pawn);
  if (pawn.stderr) showExit(pawn.stderr);
  return pawn;
}

try {
  runCLI('run build', 'npm');
} catch (error) {
  core.setFailed(error.message);
}