// const { Postevents, UpcomingEvent, contact, jobapp, jobsup, postgallery ,postblogs} = require("../Model/Model");

// const postevent = async (req, res) => {
//     const { title, description } = req.body;
//     const files = req.files;
//     try {
//         const images = files.map(file => file.path);
//         const newPostevent = await Postevents.create({ title, description, images });
//         res.status(200).json(newPostevent);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const contactus = async (req, res) => {
//     const { name, mail, message, subject } = req.body;
//     try {
//         const contactdetials = await contact.create({ name, mail, message, subject });
//         res.status(200).json(contactdetials);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const jobsupdateadmin = async (req, res) => {
//     const { jobtitle, description, experience } = req.body;
//     try {
//         const jobupdate = await jobsup.create({ jobtitle, description, experience });
//         res.status(200).json(jobupdate);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const upcommingevent = async (req, res) => {
//     const { title, description } = req.body;
//     const files = req.files;
//     try {
//         const images = files.map(file => file.path);
//         const newUpcomingEvent = await UpcomingEvent.create({ title, description, images });
//         res.status(200).json(newUpcomingEvent);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const postgallert = async (req, res) => {
//     const files = req.files;
//     try {
//         const images = files.map(file => file.path);
//         const uploadgallery = await postgallery.create({ images });
//         res.status(200).json(uploadgallery);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const getevents = async (req, res) => {
//     try {
//         const tasks = await Postevents.find({}, { title: 1, description: 1, images: 1 });
//         res.status(200).json(tasks);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const getContact = async (req, res) => {
//     try {
//         const contacts = await contact.find({}, 'name mail subject message');
//         res.status(200).json(contacts);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const getjobupdates = async (req, res) => {
//     try {
//         const contacts = await jobsup.find({}, 'jobtitle description experience');
//         res.status(200).json(contacts);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const getUpcommingevent = async (req, res) => {
//     try {
//         // const postevents = await Postevents.find({}, { title: 1, description: 1, images: 1 });
//         const upcomingevents = await UpcomingEvent.find({}, { title: 1, description: 1, images: 1 });
//         res.status(200).json(upcomingevents);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const getgallery = async (req, res) => {
//     try {
//         // const postevents = await Postevents.find({}, { title: 1, description: 1, images: 1 });
//         const getgalleryimages = await postgallery.find({}, { images: 1 });
//         res.status(200).json(getgalleryimages);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const applyForJob = async (req, res) => {
//     try {
//         const { firstName, lastName, email, phoneNumber, resume, coverLetter, qualification } = req.body;

//         let resumePath = '';
//         if (req.file) {
//             resumePath = req.file.path;
//         } else {
//             return res.status(400).json({ error: 'Resume file is required.' });
//         }

//         const newApplication = new jobapp({
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             resume: req.file.path,
//             coverLetter,
//             qualification
//         });

//         // Save the job application to the database
//         const savedApplication = await newApplication.save();

//         // Respond with the saved application
//         res.status(201).json(savedApplication);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const getJobApplications = async (req, res) => {
//     try {
//         const jobApplications = await jobapp.find();
//         res.status(200).json(jobApplications);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const deleteEvent = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedTask = await Postevents.findByIdAndDelete(id);

//         if (!deletedTask) {
//             return res.status(404).json({ error: 'Task not found' });
//         }

//         res.status(200).json({ message: 'Task successfully deleted' });
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const deleteUpcommingEvent = async (req, res) => {
//     try {
//         const { id } = req.params;

//         console.log(`Deleting event with ID: ${id}`);
//         const deletedEvent = await UpcomingEvent.findByIdAndDelete(id);

//         if (!deletedEvent) {
//             return res.status(404).json({ error: 'Upload Event not found' });
//         }

//         res.status(200).json({ message: 'Upload Event successfully deleted' });
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };


// const uploadblogs = async (req, res) => {
//     const { date, title, description } = req.body;
//     try {
//         const uploadblogs = await postblogs.create({  date, title, description});
//         res.status(200).json(uploadblogs);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// const getblogs = async (req, res) => {
//     try {
//         const blogs = await postblogs.find();
//         res.status(200).json(blogs);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// };

// module.exports = { postevent, getevents, upcommingevent, getUpcommingevent, contactus, getContact, applyForJob, getJobApplications, jobsupdateadmin, getjobupdates, postgallert, getgallery, deleteEvent, deleteUpcommingEvent ,uploadblogs,getblogs};
// const db = require('../config/db');


// const postevent = (req, res) => {
//     const { title, description } = req.body;
//     const files = req.files;
//     const images = JSON.stringify(files.map(file => file.path));

//     const query = 'INSERT INTO events (title, description, images) VALUES (?, ?, ?)';
//     req.db.query(query, [title, description, images], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, title, description, images });
//     });
// };

// const contactus = (req, res) => {
//     const { name, mail, message, subject } = req.body;

//     const query = 'INSERT INTO contact (name, mail, message, subject) VALUES (?, ?, ?, ?)';
//     req.db.query(query, [name, mail, message, subject], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, name, mail, message, subject });
//     });
// };

// const jobsupdateadmin = (req, res) => {
//     const { jobtitle, description, experience } = req.body;

//     const query = 'INSERT INTO jobs_updates (jobtitle, description, experience) VALUES (?, ?, ?)';
//     req.db.query(query, [jobtitle, description, experience], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, jobtitle, description, experience });
//     });
// };

// const upcommingevent = (req, res) => {
//     const { title, description } = req.body;
//     const files = req.files;
//     const images = JSON.stringify(files.map(file => file.path));

//     const query = 'INSERT INTO upcoming_events (title, description, images) VALUES (?, ?, ?)';
//     req.db.query(query, [title, description, images], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, title, description, images });
//     });
// };

// const postgallert = (req, res) => {
//     const files = req.files;
//     const images = JSON.stringify(files.map(file => file.path));

//     const query = 'INSERT INTO gallery (images) VALUES (?)';
//     req.db.query(query, [images], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, images });
//     });
// };

// const getevents = (req, res) => {
//     const query = 'SELECT title, description, images FROM events';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const getContact = (req, res) => {
//     const query = 'SELECT name, mail, subject, message FROM contact';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const getjobupdates = (req, res) => {
//     const query = 'SELECT jobtitle, description, experience FROM jobs_updates';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const getUpcommingevent = (req, res) => {
//     const query = 'SELECT title, description, images FROM upcoming_events';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const getgallery = (req, res) => {
//     const query = 'SELECT images FROM gallery';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const applyForJob = (req, res) => {
//     const { firstName, lastName, email, phoneNumber, resume, coverLetter, qualification } = req.body;

//     let resumePath = '';
//     if (req.file) {
//         resumePath = req.file.path;
//     } else {
//         return res.status(400).json({ error: 'Resume file is required.' });
//     }

//     const query = 'INSERT INTO job_applications (firstName, lastName, email, phoneNumber, resume, coverLetter, qualification) VALUES (?, ?, ?, ?, ?, ?, ?)';
//     req.db.query(query, [firstName, lastName, email, phoneNumber, resumePath, coverLetter, qualification], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(201).json({ id: result.insertId, firstName, lastName, email, phoneNumber, resume: resumePath, coverLetter, qualification });
//     });
// };

// const getJobApplications = (req, res) => {
//     const query = 'SELECT * FROM job_applications';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// const deleteEvent = (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM events WHERE id = ?';
//     req.db.query(query, [id], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Event not found' });
//         }
//         res.status(200).json({ message: 'Event successfully deleted' });
//     });
// };

// const deleteUpcommingEvent = (req, res) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM upcoming_events WHERE id = ?';
//     req.db.query(query, [id], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Upcoming event not found' });
//         }
//         res.status(200).json({ message: 'Upcoming event successfully deleted' });
//     });
// };

// const uploadblogs = (req, res) => {
//     const { date, title, description } = req.body;

//     const query = 'INSERT INTO blogs (date, title, description) VALUES (?, ?, ?)';
//     req.db.query(query, [date, title, description], (err, result) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json({ id: result.insertId, date, title, description });
//     });
// };

// const getblogs = (req, res) => {
//     const query = 'SELECT * FROM blogs';
//     req.db.query(query, (err, results) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };

// module.exports = {
//     postevent,
//     contactus,
//     jobsupdateadmin,
//     upcommingevent,
//     postgallert,
//     getevents,
//     getContact,
//     getjobupdates,
//     getUpcommingevent,
//     getgallery,
//     applyForJob,
//     getJobApplications,
//     deleteEvent,
//     deleteUpcommingEvent,
//     uploadblogs,
//     getblogs
// };




const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const app = express();

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Store in environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Store in environment variables
    region: process.env.AWS_REGION // Update with your desired region
});

const s3 = new AWS.S3();

// Set up Multer to handle file uploads
const storage = multer.memoryStorage(); // Store files in memory temporarily
const upload = multer({ storage: storage });

const postevent = async (req, res) => {
    try {
        const { title, description } = req.body;
        const files = req.files;
        const hostUrl = `${req.protocol}://${req.get('host')}`;

        let images = [];

        // Upload files to S3
        for (const file of files) {
            const params = {
                Bucket: 'sartwebsite', // Replace with your S3 bucket name
                Key: `${Date.now()}_${file.originalname}`, // Generate a unique name for the file
                Body: file.buffer, // File content from multer
                ContentType: file.mimetype // Set the MIME type
            };

            // Upload to S3
            const data = await s3.upload(params).promise();

            // Collect the file URL
            images.push(data.Location);
        }

        // Convert images array to JSON string
        const imagesJson = JSON.stringify(images);

        console.log("Uploaded images:", imagesJson);

        // Insert event details into the database
        const query = 'INSERT INTO events (title, description, images) VALUES (?, ?, ?)';
        const [result] = await req.db.query(query, [title, description, imagesJson]);

        // Respond with the inserted data
        res.status(200).json({ id: result.insertId, title, description, images: imagesJson });
    } catch (err) {
        // Handle any errors
        res.status(400).json({ error: err.message });
    }
};

const contactus = async (req, res) => {
    try {
        const { name, mail, message, subject } = req.body;

        const query = 'INSERT INTO contact (name, mail, message, subject) VALUES (?, ?, ?, ?)';
        const [result] = await req.db.query(query, [name, mail, message, subject]);
        res.status(200).json({ id: result.insertId, name, mail, message, subject });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const jobsupdateadmin = async (req, res) => {
    try {
        const { jobtitle, description, experience } = req.body;

        const query = 'INSERT INTO jobs_updates (jobtitle, description, experience) VALUES (?, ?, ?)';
        const [result] = await req.db.query(query, [jobtitle, description, experience]);
        res.status(200).json({ id: result.insertId, jobtitle, description, experience });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const upcommingevent = async (req, res) => {
    try {
        const { title, description } = req.body;
        const files = req.files; // Multer should provide files here

        if (!files || files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        let images = [];

        // Upload files to S3
        for (const file of files) {
            const params = {
                Bucket: 'sartwebsite', // Replace with your S3 bucket name
                Key: `${Date.now()}_${file.originalname}`, // Generate a unique name for the file
                Body: file.buffer, // File content from multer
                ContentType: file.mimetype // Set the MIME type
            };

            // Upload to S3
            const data = await s3.upload(params).promise();

            // Collect the file URL
            images.push(data.Location);
        }

        // Convert images array to JSON string
        const imagesJson = JSON.stringify(images);

        console.log("Uploaded images:", imagesJson);

        // Insert event details into the database
        const query = 'INSERT INTO upcoming_events (title, description, images) VALUES (?, ?, ?)';
        const [result] = await req.db.query(query, [title, description, imagesJson]);

        // Respond with the inserted data
        res.status(200).json({ id: result.insertId, title, description, images: imagesJson });
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};


const postgallery = async (req, res) => {
    try {
        const files = req.files;

        let images = [];

        for (const file of files) {
            // Configure S3 upload parameters
            const params = {
                Bucket: 'sartwebsite', // Replace with your S3 bucket name
                Key: `${Date.now()}_${file.originalname}`, // Generate a unique name for the file
                Body: file.buffer, // File content from multer
                ContentType: file.mimetype // Set the MIME type
            };

            // Upload the file to S3
            const data = await s3.upload(params).promise();

            // Collect the file URL
            images.push(data.Location);
        }

        // Convert the images array to JSON string
        const imagesJson = JSON.stringify(images);

        console.log("Uploaded images:", imagesJson);

        // Insert image URLs into the database
        const query = 'INSERT INTO gallery (images) VALUES (?)';
        const [result] = await req.db.query(query, [imagesJson]);

        // Send a successful response with the image URLs and database record ID
        res.status(200).json({ id: result.insertId, images });
    } catch (err) {
        // Handle any errors during the process
        res.status(400).json({ error: err.message });
    }
};


const getevents = async (req, res) => {
    try {
        const query = 'SELECT title, description, images FROM events';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getContact = async (req, res) => {
    try {
        const query = 'SELECT name, mail, subject, message, created_at, updated_at FROM contact ORDER BY created_at DESC';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUpcommingevent = async (req, res) => {
    try {
        const query = 'SELECT id, title, description, images FROM upcoming_events';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getgallery = async (req, res) => {
    try {
        const query = 'SELECT images FROM gallery';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const applyForJob = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'Resume file is required.' });
        }

        // Configure S3 upload parameters
        const params = {
            Bucket: 'sartwebsite', // Replace with your S3 bucket name
            Key: `${Date.now()}_${req.file.originalname}`, // Generate a unique name for the file
            Body: req.file.buffer, // File content from multer
            ContentType: req.file.mimetype // Set the MIME type
        };

        // Upload the resume to S3
        const data = await s3.upload(params).promise();

        // Collect the file URL
        const resumePath = data.Location;

        // Insert job application details into the database
        const query = 'INSERT INTO job_applications (firstName, lastName, email, phoneNumber, resume) VALUES (?, ?, ?, ?, ?)';
        const [result] = await req.db.query(query, [firstName, lastName, email, phoneNumber, resumePath]);

        // Respond with the inserted data
        res.status(201).json({ id: result.insertId, firstName, lastName, email, phoneNumber, resume: resumePath });
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};


const getJobApplications = async (req, res) => {
    try {
        const query = 'SELECT * FROM job_applications ORDER BY created_at DESC';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM events WHERE id = ?';
        const [result] = await req.db.query(query, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json({ message: 'Event successfully deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUpcommingEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM upcoming_events WHERE id = ?';
        const [result] = await req.db.query(query, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Upcoming event not found' });
        }
        res.status(200).json({ message: 'Upcoming event successfully deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const uploadblogs = async (req, res) => {
    try {
        const { date, title, description } = req.body;

        const query = 'INSERT INTO blogs (date, title, description) VALUES (?, ?, ?)';
        const [result] = await req.db.query(query, [date, title, description]);
        res.status(200).json({ id: result.insertId, date, title, description });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getblogs = async (req, res) => {
    try {
        const query = 'SELECT * FROM blogs';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getjobupdates = async (req, res) => {
    try {
        const query = 'SELECT jobtitle, description, experience FROM jobs_updates';
        const [results] = await req.db.query(query);
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    postevent,
    contactus,
    jobsupdateadmin,
    upcommingevent,
    postgallery,
    getevents,
    getContact,
    getjobupdates,
    getUpcommingevent,
    getgallery,
    applyForJob,
    getJobApplications,
    deleteEvent,
    deleteUpcommingEvent,
    uploadblogs,
    getblogs
};
