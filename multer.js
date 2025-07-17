// const multer = require("multer");
// const path = require("path");

// // Set up storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, './uploads')); // Correct the path
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

// // File filter to allow only images
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Not an image! Please upload an image.', false));
//     }
// };


// const galleryimage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, './gallery')); // Correct the path
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

// // File filter to allow only images
// const filegallery= (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Not an image! Please upload an image.', false));
//     }
// };




// const storageresume = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, './resume')); // Specify the upload directory
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const ext = path.extname(file.originalname);
//         cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
//     },
// });

// // File filter to allow only PDF files for resumes
// const fileFilteresume = (req, file, cb) => {
//     if (file.mimetype === 'application/pdf') {
//         cb(null, true);
//     } else {
//         cb(new Error('Only PDF files are allowed for resumes.'));
//     }
// };





// // Set up multer



// const uploadresume = multer({
//     storage: storageresume,
//     fileFilter: fileFilteresume,
// });


// // Set up multer
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
// });


// const uploadgalleryimage = multer({
//     storage: galleryimage,
//     fileFilter: filegallery,
// });

// module.exports = { upload, uploadresume ,uploadgalleryimage};

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure upload directories exist
const ensureDir = dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Set up storage for general uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadPath = path.join(__dirname, './uploads');
//         ensureDir(uploadPath);
//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

const storage = multer.memoryStorage();

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.', false));
    }
};

// Set up multer for general uploads
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 5MB limit
});

// Set up storage for resumes
// const resumeStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const resumePath = path.join(__dirname, './resume');
//         ensureDir(resumePath);
//         cb(null, resumePath);
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const ext = path.extname(file.originalname);
//         cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
//     },
// });

const resumeStorage = multer.memoryStorage();

// File filter to allow only PDF files for resumes
const resumeFileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed for resumes.'));
    }
};

// Set up multer for resumes
const uploadResume = multer({
    storage: resumeStorage,
    fileFilter: resumeFileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

// Set up storage for gallery images
// const galleryStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const galleryPath = path.join(__dirname, './gallery');
//         ensureDir(galleryPath);
//         cb(null, galleryPath);
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

const galleryStorage = multer.memoryStorage();

// File filter to allow only images
const galleryFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.', false));
    }
};

// Set up multer for gallery images
const uploadGalleryImage = multer({
    storage: galleryStorage,
    fileFilter: galleryFileFilter,
});

module.exports = { upload, uploadResume, uploadGalleryImage };
