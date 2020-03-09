module.exports = {
    age: function(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        // yyyy ano
        const year = date.getUTCFullYear()
        // mm mes
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        // dd dia
        const day = `0${date.getUTCDate()}`.slice(-2)
        
        return `${year}-${month}-${day}`
        
    }



}