import input from 'readline-sync'; 

console.log("Verificador de DDDs Brasileiros \n\n");

let ddd = input.question("Informe o ddd que deseja descobrir: \n");

switch(ddd){
    case "11":
    case "12":
    case "13": 
    case "14": 
    case "15": 
    case "16": 
    case "17": 
    case "18": 
    case "19": 
        console.log("Estado de Sao Paulo! \n");
        break;
    case "21": 
    case "22": 
    case "24": 
        console.log("Estado do Rio de Janeiro! \n");
        break;
    case "27": 
    case "28": 
        console.log("Estado do Espirito Santo! \n");
        break;
    case "31": 
    case "32": 
    case "33": 
    case "34": 
    case "35": 
    case "37": 
    case "38": 
        console.log("Estado de Minas Gerais! \n");
        break;
    case "41": 
    case "42": 
    case "43": 
    case "44": 
    case "45": 
    case "46": 
        console.log("Estado do Parana! \n");
        break;
    case "47": 
    case "48":
    case "49": 
        console.log("Estado de Santa Catarina! \n");
        break;
    case "51": 
    case "53": 
    case "54": 
    case "55": 
        console.log("Estado do Rio Grande do Sul! \n");
        break;
    case "61": 
        console.log("Estado de Distrito Federal! \n");
        break;
    case "62": 
    case "64": 
        console.log("Estado de Goias! \n");
        break;
    case "65": 
    case "66": 
        console.log("Estado do Mato Grosso! \n");
        break;
    case "67": 
        console.log("Estado do Mato Grosso do Sul! \n");
        break;
    case "63": 
        console.log("Estado do Tocantins! \n");
        break;
    case "68": 
        console.log("Estado do Acre! \n");
        break;
    case "69": 
        console.log("Estado de Rondonia! \n");
        break;
    case "71": 
    case "73": 
    case "74": 
    case "75": 
    case "77": 
        console.log("Estado da Bahia! \n");
        break;
    case "79": 
        console.log("Estado do Sergipe! \n");
        break;
    case "81": 
    case "87": 
        console.log("Estado de Pernambuco! \n");
        break;
    case "82": 
        console.log("Estado de Alagoas! \n");
        break;
    case "83": 
        console.log("Estado da Paraiba! \n");
        break;
    case "84": 
        console.log("Estado do Rio Grande do Norte! \n");
        break;
    case "85": 
    case "88": 
        console.log("Estado do Ceara! \n");
        break;
    case "86": 
    case "89": 
        console.log("Estado do Piaui! \n");
        break;
    case "91": 
    case "93": 
    case "94": 
        console.log("Estado do Para! \n");
        break;
    case "92": 
    case "97": 
        console.log("Estado do Amazonas! \n");
        break;
    case "95": 
        console.log("Estado de Roraima! \n");
        break;
    case "96": 
        console.log("Estado do Amapa! \n");
        break;
    case "98": 
    case "99":
        console.log("Estado do Maranhao! \n");
        break;
    default:
        console.log("DDD Invalido!! \n");
        break;

}