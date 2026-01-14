const core = require("@actions/core");
const github = require("@actions/github");

function run() {
  const bucket = core.getInput("bucket", { required: true });
  const region = core.getInput("region", { required: true });
  const dist = core.getInput("dist-folder", { required: true });
  core.notice("Hello from my custom JS action!");
  core.notice(JSON.stringify({ bucket, region, dist }));

  const websiteURl = "https://website-url.com";
  core.setOutput("website-url", websiteURl);
}

run();
