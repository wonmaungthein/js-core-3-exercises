function equals(got, expected) {
  if(got === expected) {
    return console.log("✔︎ Passed");
    console.log();
  }
  console.log("𝙭 Failed");
  console.log("    Expected: " + expected);
  console.log("    But got:  " + got);
  console.log();
}

module.exports = equals;
