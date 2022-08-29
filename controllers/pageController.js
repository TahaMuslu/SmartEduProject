const nodemailer = require('nodemailer');
const Course = require('../models/Course');
const User = require('../models/User');


exports.getIndexPage = async (req, res) => {

    const courses = await Course.find().sort('-createdAt').limit(2);
    const total_courses = await Course.find().countDocuments();
    const total_students = await User.countDocuments({ role: 'student' });
    const total_teachers = await User.countDocuments({ role: 'teacher' });

    res.status(200).render('index', {
        page_name: "index",
        courses,
        total_courses,
        total_students,
        total_teachers
    });
}


exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
}



exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: "register"
    });
}


exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: "login"
    });
}


exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
    });
}

exports.sendEmail = async (req, res) => {
    const outputMessage = `
    
    <h1>Message Details</h1>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    
    `
    let transporter = nodemailer.createTransport({
        host: "smtp.live.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "taha-_muslu@hotmail.com", // generated ethereal user
            pass: "ibeenamelesi1221", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Smart Edu Contact Form" <smokesmokesono@gmail.com>', // sender address
        to: "tahamuslu1216@gmail.com", // list of receivers
        subject: "Smart Edu ✔", // Subject line
        html: outputMessage, // html body
    });

    res.status(200).redirect('contact');
}

