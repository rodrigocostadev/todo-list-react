
function ReverseCounter(){    

    let dateNow = new Date()
    // let dateNow = new Date("1/1/2025")

    let limitDate = new Date()    

    let currentYear = dateNow.getFullYear()
    limitDate.setFullYear(currentYear)
    limitDate.setMonth(11)
    limitDate.setDate(31)
    limitDate.setHours(23)
    limitDate.setMinutes(59)
    limitDate.setSeconds(59)
    limitDate.setMilliseconds(999)    

    let miliSecondsDataLimite = Date.parse(limitDate)
    let miliSecondsNow = Date.parse(dateNow)

    let subMiliSeconds = (miliSecondsDataLimite - miliSecondsNow)
    //    console.log (subMiliSeconds)

    let counterDays = Math.floor(subMiliSeconds / 86400000)
    // console.log(counterDays)

    if(dateNow < limitDate ){        

        return counterDays
    }

}

export default ReverseCounter





    
    // let datepaused = Date("12/31/2023")
    // let mS = Date.parse("12/31/2023")
    // let data = new Date(mS)
    // let getMSToday = dateNow.getMilliseconds()
    // let testdate = new Date(1703991600000)
    // let testdate = new Date(1704077999000)
    //    let testdate = new Date(1686167358000)  


    // console.log(miliSecondsDataLimite)
    // console.log(miliSecondsNow)
    // console.log(dateNow)
    // console.log(testdate)
    // console.log(limitDate)
    // console.log(datepaused)
    // console.log(mS)
    // console.log(data)