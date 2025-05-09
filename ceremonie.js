function getLastDelegation(array){
    let letre=''
    for(let i=0;i<array.length;i++){
        letre+=array[i]+','
    }
    let nomPays=''
    for(let i=0;i<letre.length;i++){
        if(isNaN(letre[i])){
            nomPays+=letre[i]
        }
    }
    let tableauNomPays=nomPays.split(",")
    

    let nombre=''
    for(let i=0;i<letre.length;i++){
        if(!isNaN(letre[i])){
            nombre+=letre[i]
        }
    }
    let tableauNombre=nombre.split(" ")
    let resulta=[]
    for(let i=1;i<tableauNombre.length;i=i+2){
        resulta.push(tableauNombre[i]/tableauNombre[i+1])

    }
    
    const valeurMin = resulta.sort((a, b) => a - b)[0];
    console.log(valeurMin);
    console.log(index)


    for(let i=0;i<tableauNomPays.length;i++){


    }
    return valeurMin 
    
}console.log(getLastDelegation(["ranto 4 2","ela 12 3"]));
