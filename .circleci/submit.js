const { exec } = require("child_process");
const https = require("https");

exec(
  'npm test | grep -E "[0-9]+\\s(passing|failing)"',
  (err, stdout1, stderr) => {
    if (err) {
      console.log(err);
      throw new Error("can not take the test result");
    }

    // Get test result from the console and cleasing it for spread sheet
    let matchWithPassing = stdout1.match(/([.\d,]+)[ ]+passing/);
    let matchWithFailing = stdout1.match(/([.\d,]+)[ ]+failing/);
    let passed = matchWithPassing ? Number(matchWithPassing[1]) : 0;
    let failed = matchWithFailing ? Number(matchWithFailing[1]) : 0;

    console.log("test result", passed, failed);

    // Submit homework also to leanrco.
    exec('echo "$lambda_key"', (err, apikey) => {
      console.log("lambda_key is", apikey);

      if (err) {
        console.log(err);
        throw new Error("echo command did not work right");
      }

      if (apikey === "\n") {
        throw new Error("This is not the lambda_key");
      }

      exec('echo "$CIRCLE_PR_USERNAME"', (err, username) => {
        if (err) {
          console.log(err);
          throw new Error("echo command did not work right");
        }

        if (username === "\n") {
          throw new Error("There is not github username");
        }

        const options = {
          hostname: "hrirs6yhe0.execute-api.ap-northeast-2.amazonaws.com",
          path: "/dev/submition/create",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        };

        console.log(JSON.stringify(options.headers));

        const req = https.request(options, res => {
          let data;

          res.on("data", chunk => {
            data += chunk;
          });

          res.on("end", () => {
            console.log("data from labmda is ", data);

            if (res.statusCode >= 400) {
              if (res.statusCode === 400) {
                throw new Error("invalid github username.");
              }
              throw new Error("There is an error on response from lambda.");
            }
          });
        });

        req.on("error", e => {
          console.log(e);
          throw new Error("data did not send to lambda");
        });

        // send the request
        req.write(
          JSON.stringify({
            title: "Testbuilder",
            githubUsername: username.trim(),
            lambdaKey: apikey.trim(),
            passed,
            failed
          })
        );
        req.end();
      });
    });
  }
);
