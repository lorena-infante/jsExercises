const baseUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserData = async (userId) => {
    try{
        const response = await axios(`${baseUrl}/${userId}`);
        
        const userName = await response.data.name;
        console.log(userName);
    }catch (err){
        console.log(err);
    }
}
//any number from 1 to 10: https://jsonplaceholder.typicode.com/users/
getUserData(6);
