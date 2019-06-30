function handleError(error){
    switch(error){
        case 401: console.log("Authentication error"); 
                break;

        case 404: console.log("End point not found");
                break;

        case 500: console.log("Internal server error"); 
                break;

        default: console.log("Exception"); 
                break;
    }
}

export default handleError;