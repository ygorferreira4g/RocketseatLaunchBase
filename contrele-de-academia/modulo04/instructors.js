const fs = require ("fs")
const data = require("./data.json")
const { age } = require("./utils")

exports.show = function(req, res){
    
    const { id } = req.params
    

    const foundInstructor = data.instructors.find(function(instructor){
      return instructor.id == id
        
    })

    if (!foundInstructor) return res.send("Instructor não encontrado")

    

console.log(foundInstructor.birth)
    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: (new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)),

    }
  
    return res.render("instructors/show", { instructor})

}


exports.post = function(req, res){
    //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    let {avatar_url, name, birth, gender, services} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    

    data.instructors.push({
        id,
        name, 
        avatar_url, 
        birth, 
        gender, 
        services, 
        created_at, 
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if (err) return res.send("Erro ao gravar arquivo")

        return res.redirect("/instructors")

    })

   // return res.send(req.body)
}