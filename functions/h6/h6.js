const output=require("@output")

exports.handler = async (event) => {

  let{httpMethod:method}=event;

  switch (method){

    case "GET":
     return output({"method":method,
                    "content":"el metodo es "+method})

    case "POST":
    return output({"method":method,
                    "content":"el metodo es "+method})
    
    case "PUT":
    return output({"method":method,
    "content":"el metodo es "+method})

    case "DELETE":
    return output({"method":method,
    "content":"el metodo es " +method})
                    
     default:
    return output({})
    
   
  }

}
