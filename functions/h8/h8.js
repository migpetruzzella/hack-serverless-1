const output=require("@output")
const middy= require("middy")
const {jsonBodyParser}= require("middy/middlewares")

const entrada = async (event) => {

  let{httpMethod:method,
      queryStringParameters:p,
    body:b}=event;

  switch (method){

    case "GET":
     return output(b)
                    
     default:
    return output({})
    
   
  }

}

exports.handler = middy(entrada)
                .use(jsonBodyParser())