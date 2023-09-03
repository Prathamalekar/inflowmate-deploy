const mongoose1 = require('mongoose')

main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose1.connect('mongodb://pratham:pratham@06@127.0.0.1:27017/inflowmate');
  
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        const dataSchema = new mongoose1.Schema({
            first:{
                type: String, 
                required:[true,"This field is required"]
            },
            last:{
                type:String,
                required:[true,"This field is required"]
            },
            CompanyName:{
                type:String,
                required:[true,"This field is required"]
            },
            BussinessEmail :{
                type:String,
                required:[true,"This field is required"]
            },
            useCaseDescription: {
                type: String,
                required:[true ,"This field is required"]
            }
        });
        const Data1= mongoose1.model("inflowmatedata" , dataSchema)
        const person1 = new Data1({
            first:"pratham",
            last:"Alekar",
            CompanyName:"inflowmate",
            BussinessEmail:"pratham@465gmail.com",
            useCaseDescription:"making bots that pleases everyone"
    
        })
        person1.save()
        mongoose1.connection.close()
    }catch(error){
        console.log(error)
    }

}
main();