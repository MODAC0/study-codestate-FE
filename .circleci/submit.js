#!/usr/bin/env node

const { exec } = require('child_process');
const https = require('https');
exec('npm test | grep -E \"[0-9]+\\s(passing|failing)\"', (err, stdout1, stderr) => {
  if (err) {
    return;
  }

  exec('echo "$aws_lambda_apikey"', (err, apikey) => {
    exec('echo "\n\n$CIRCLE_PR_USERNAME\n$CIRCLE_REPOSITORY_URL\n"', (err, stdout2) => {
      console.log(`${stdout1}${stdout2}`);

      const options = {
        host: '3921zr9vkg.execute-api.ap-northeast-2.amazonaws.com',
        path: '/default/getTestCaseResult',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${apikey}`.trim(),
          'Access-Control-Request-Method': 'POST'
        }
      };
      console.log(JSON.stringify(options.headers));

      const req = https.request(options, (res) => {
        res.on('data', (chunk) => {
          console.log('ok');
          console.log(chunk.toString());
          // callback(null, result);
        });
      });

      req.on('error', (e) => {
        console.log('error');
        // callback(new Error('failure'));
      });

      // send the request
      req.write(JSON.stringify({
        'log': stdout1 + stdout2
      }));
      req.end();

    });
  });
});

