module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if ((req.query.weight || req.query.height ) || (req.body && req.body.name)) {
        let result;
        let weight = req.query.weight;
        let height = req.query.height;

        let BMI = weight / (height*height)
        context.log("BMI from Git: ", BMI)
        if(BMI < 18.5){
            result = "You are underweight"
        }
        else if(BMI >= 18.5 && BMI <= 24.9){
            result = "You are normal"
        }
        else if(BMI >24.9 && BMI < 30 ){
            result = "You are overweight"
        }
        else{
            result = "You are very unhealthy"
        }

        context.res = {
            status: 200, /* Defaults to 200 */
            body: result
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};