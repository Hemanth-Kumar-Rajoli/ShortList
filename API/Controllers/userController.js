const {addDoc,collection,getDoc,getDocs,deleteDoc,doc} = require('firebase/firestore')
const db = require('./../firebaseconfig');
class DiffStatusControl{
    constructor(collectionDB){
        this.collectionDB = collectionDB;
    }
    simplifydocs = (docs)=>{
        return docs.map((data)=>{
            const doc = data._document.data.value.mapValue.fields
            const key = data._document.key.path.segments[data._document.key.path.segments.length-1]
            return {
                age : parseInt(doc.age.integerValue),
                name : doc.name.stringValue,
                score : parseInt(doc.score.integerValue),
                key : key
            }
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
            res.status(200).json(this.simplifydocs(docsnap.docs));
        }catch(e){
            res.status(500).json({
                message : "unable to fetch data"
            });
            console.error(e);
        }
    }
    deleteUser = async (req,res)=>{
        const id = req.body.key;
        try{
            await deleteDoc(doc(db,this.collectionDB,id));
            res.status(200).json({
                message:`deleted document from table ${this.collectionDB} with id ${id}`
            })
        }catch(e){
            res.status(500).json({
                message : "unable to delete data"
            });
            console.error(e);
        }
    }
}
module.exports  = DiffStatusControl;