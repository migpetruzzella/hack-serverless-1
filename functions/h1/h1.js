const output=require("@output")

exports.handler = async (event) => {

  let{httpMethod:method}=event;

  switch (method){

    case "GET":
     return output({"content":"GET"})
    
   
  }

}

