const request = require('request-promise')

callTBA(7558).then((output) => {
    console.log(output)
})

function callTBA(teamNumber) {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            url: 'https://www.thebluealliance.com/api/v3/team/frc7558',
            headers:
            {
                'X-TBA-Auth-Key': 'iILYwywnVYDP36CtgFVYcZC97yci1cvRtd94iehC541M9gkMVn6VuFxhtSRBqVHe'
            },
            json: true
        };
        request(requestOptions, (error, response, body) => {
            let country = body.country;
            let output = `they are from ${country}`
            console.log(output)
            resolve(output)
        })
    })
}

