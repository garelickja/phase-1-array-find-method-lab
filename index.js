function superbowlWin(result) {
const winningYear = result.find(superbowl => superbowl.result === 'W');
return winningYear ? winningYear.year : undefined;
}