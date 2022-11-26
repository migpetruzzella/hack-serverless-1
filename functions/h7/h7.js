const output=require("@output")

exports.handler = async (event) => {

  let{httpMethod:method,
      queryStringParameters:p}=event;

  switch (method){

    case "GET":
     return output(p)
                    
     default:
    return output({})
    
   
  }

}
