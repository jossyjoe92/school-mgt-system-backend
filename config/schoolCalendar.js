const mongoose = require('mongoose')
const Calendar = require('../models/schoolCalendar')
const Admin = require('../models/admin')

const date = new Date()
const year = date.getFullYear()
const day= date.getDay()
const datee = date.getDate()
const hr = date.getHours()
const min= date.getMinutes()



const schoolCalendar= ()=>{

    Calendar.findOne()
    .then(data=>{
        console.log(data)
        const notification = {
            sender:'Server',
            notice:{
                text:'Its a new week',
                currentCalendar:data
            }
            
        }
        Admin.findOneAndUpdate({},{
            $push:{notification}
        },{
            new:true
        })
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
/*
  
   

    /* 
    const calendar = new Calendar({
        year,
        term,
       week

    })
    calendar.save()
    
    */
}

module.exports = schoolCalendar