const output=require("@output")

exports.handler = async (event) => {

  let{httpMethod:method}=event;

  switch (method){

    case "DELETE":
     return output({"content":"DELETE"})
    
    
  }

}