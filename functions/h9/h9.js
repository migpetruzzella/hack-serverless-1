const output=require("@output")

exports.handler = async (event) => {

  let{httpMethod:method,
      queryStringParameters:p}=event;

    const Lista = ["foo","bar","baz","qux","fred"]    
  
    switch (method){

    case "GET":
        if(Lista.includes(p.alias)){
        return output({"payload": p.alias})
        }else{
            return output({"payload":"not found"})
        }
                    
     default:
    return output({})
    
   
  }

}