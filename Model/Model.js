// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const TaskSchema = new Schema(
//     {
//         title: {
//             type: String,
//             require: true,
//         },
//         description: {
//             type: String,
//         },
//         images: [{
//             type: String,
//         }],
//     },
//     { timestamps: true }
// );


// const UploadEvents = new Schema(
//     {
//         title: {
//             type: String,
//             require: true,
//         },
//         description: {
//             type: String,
//         },
//         images: [{
//             type: String,
//         }],
//     },
//     { timestamps: true }
// );

// const gallery = new Schema(
//     {
//         images: [{
//             type: String,
//         }],
//     },
//     { timestamps: true }
// );

// const contactus = new Schema({
//     name: {
//         type: String,
//         require: true,
//     },
//     mail: {
//         type: String,
//         require: true,
//     },
//     subject: {
//         type: String,
//         require: true,
//     },
//     message: {
//         type: String,
//         require: true,
//     }
// }, { timestamps: true });

// const jobapplication = new Schema({
//     firstName: {
//         type: String,
//         require: true,
//     },
//     lastName: {
//         type: String,
//         require: true,
//     },
//     email: {
//         type: String,
//         require: true,
//     },
//     phoneNumber: {
//         type: String,
//         require: true,
//     },
//     resume: {
//         type: String,
//         require: true,
//     },
//     coverLetter: {
//         type: String,
//         require: true,
//     },
//     qualification: {
//         type: String,
//         require: true,
//     },
// })


// const jobsupdate = ({
//     jobtitle: {
//         type: String,
//         require: true
//     },
//     description: {
//         type: String,
//         require: true
//     },
//     experience: {
//         type: String,
//         require: true
//     },
// })

// const blogsdata=({
//     date:{
//         type:String,
//         require:true
//     },
//     title:{
//         type:String,
//         require:true
//     },
//     description:{
//         type:String,
//         require:true
//     },
// })


// const Postevents = mongoose.model("Postevents", TaskSchema); // Model for regular events
// const UpcomingEvent = mongoose.model("UpcomingEvent", UploadEvents);
// const contact = mongoose.model("contact", contactus);
// const jobapp = mongoose.model("jobapplication", jobapplication);
// const jobsup = mongoose.model("jobsupdate", jobsupdate);

// const postgallery = mongoose.model("gallerypost", gallery);

// const postblogs = mongoose.model("blog", blogsdata);


// module.exports = { Postevents, UpcomingEvent, contact, jobapp, jobsup ,postgallery,postblogs};
