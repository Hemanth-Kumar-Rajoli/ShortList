const {addDoc,collection,getDoc,getDocs} = require('firebase/firestore')
const db = require('./../firebaseconfig');
class DiffStatusControl{
    constructor(collectionDB){
        this.collectionDB = collectionDB;
    }
    simplifydocs = (docs)=>{
        return docs.map((data)=>{
            const doc = data._document.data.value.mapValue.fields
            
            return {
                age : parseInt(doc.age.integerValue),
                name : doc.name.stringValue,
                score : parseInt(doc.score.integerValue)
            };
        })
    }
    createUser = async (req,res)=>{
        const data = req.body;
        console.log(data);
        try{
            await addDoc(collection(db,this.collectionDB),data);
            res.status(201).json({
                message : `user added to ${this.collectionDB}`
            });
        }catch(e){
            res.status(500).json({
                message : "user not created"
            });
            console.error(e);
        }
    }
    getAllUsers = async (req,res)=>{
        try{
            const docsnap = await getDocs(collection(db,this.collectionDB))
            res.status(200).json(simplifydocs(docsnap.docs));
        }catch(e){
            res.status(500).json({
                message : "unable to fetch data"
            });
            console.error(e);
        }
    }
}
module.exports  = DiffStatusControl;