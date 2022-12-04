let vagasFront = document.querySelector(".vagas-front")
let vagasBack = document.querySelector(".vagas-back")



    for(let i = 0; i < frontEndJobs.length; i++){

        let card = document.createElement("li")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let span = document.createElement("span")

        h3.innerText = frontEndJobs[i].title
        p.innerText = frontEndJobs[i].descrription
        span.innerText = frontEndJobs[i].modality

        card.appendChild(h3)
        card.appendChild(p)
        card.appendChild(span)
        
        vagasFront.appendChild(card)

    }



    for(let i = 0; i < backEndJobs.length; i++){

        let card = document.createElement("li")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let span = document.createElement("span")

        h3.innerText = backEndJobs[i].title
        p.innerText = backEndJobs[i].descrription
        span.innerText = backEndJobs[i].modality

        card.appendChild(h3)
        card.appendChild(p)
        card.appendChild(span)
        
        vagasBack.appendChild(card)

    }