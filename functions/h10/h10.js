const output=require("@output")
const middy= require("middy")
const {jsonBodyParser}= require("middy/middlewares")

const entrada = async (event) => {

  let{httpMethod:method,
      queryStringParameters:p,
    body:b}=event;
   
    const Lista = ["foo","bar","baz","qux","fred"]   
  
    switch (method){

    case "GET":
        if(Lista.includes(b.alias)){
            return output({"payload": b.alias})
            }else{
                return output({"payload":"not found"})
            }
                    
     default:
    return output({})
    
   
  }

}

exports.handler = middy(entrada)
                .use(jsonBodyParser())