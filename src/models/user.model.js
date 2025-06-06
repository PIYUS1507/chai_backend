import mongoose ,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true
        },
         
        email:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullname:{
            type:String,
            required: true,
            index:true
        },
        avatar:{
            type:String,
            required: true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required: [true,"Password is required"],

        },

        coerpage:{
            type:String
        },

        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type:String
        }


    },{timestamps:true}
);

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hashSync(this.password,10);
    next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);

};

userSchema.methods.createAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRES}
    )
};
userSchema.methods.createRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
          
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRES}
    )
};

export const User  =mongoose.model('User',userSchema);