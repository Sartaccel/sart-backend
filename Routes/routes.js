// const express = require("express");
// const router = express.Router();
// const { postevent, getevents, upcommingevent, getUpcommingevent, contactus, getContact, applyForJob, getJobApplications, jobsupdateadmin, getjobupdates ,postgallert,getgallery, deleteEvent, deleteUpcommingEvent,uploadblogs,getblogs} = require("../Controller/Controller");
// const { upload, uploadresume ,uploadgalleryimage} = require("../multer");


// router.post("/event", upload.array('images', 10), postevent);
// router.get("/getevents", getevents);
// router.post("/upcommingevent", upload.array('images', 10), upcommingevent);
// router.get("/getUpcommingevent", getUpcommingevent)
// router.post("/contactus", contactus);


// router.get("/getContactdetials", getContact);
// router.post("/postjobapplication", uploadresume.single('resume'), applyForJob);
// router.get("/getjobapplications", getJobApplications);
// router.post("/jobupdateadmin", jobsupdateadmin);
// router.get("/getjobupdates", getjobupdates);

// router.post("/uploadgallery",uploadgalleryimage.array('images', 10), postgallert);
// router.get("/getgallery", getgallery);

// router.delete("/deleteevent/:id", deleteEvent);
// router.delete("/deleteUpcommingEvent/:id", deleteUpcommingEvent);

// router.post("/posttheblogs", uploadblogs);
// router.get("/getblogs",getblogs)

// module.exports = router;

const express = require("express");
const router = express.Router();
const { postevent, getevents, upcommingevent, getUpcommingevent, contactus, getContact, applyForJob, getJobApplications, jobsupdateadmin, getjobupdates, postgallery, getgallery, deleteEvent, deleteUpcommingEvent, uploadblogs, getblogs } = require("../Controller/Controller");
const { upload, uploadResume, uploadGalleryImage } = require("../multer");

router.post("/event", upload.array('images', 10), postevent);
router.get("/getevents", getevents);
router.post("/upcommingevent", upload.array('images', 10), upcommingevent);
router.get("/getUpcommingevent", getUpcommingevent);
router.post("/contactus", contactus);
router.get("/getContactdetials", getContact);
router.post("/postjobapplication", uploadResume.single('resume'), applyForJob);
router.get("/getjobapplications", getJobApplications);
router.post("/jobupdateadmin", jobsupdateadmin);
router.get("/getjobupdates", getjobupdates);

router.post("/uploadgallery", uploadGalleryImage.array('images', 10), postgallery);

router.get("/getgallery", getgallery);
router.delete("/deleteevent/:id", deleteEvent);
router.delete("/deleteUpcommingEvent/:id", deleteUpcommingEvent);
router.post("/posttheblogs", uploadblogs);
router.get("/getblogs", getblogs);

module.exports = router;

