let nomeHeroi =  "Hercules "
let experienciaXP = -10002
let nivel = ""
if(experienciaXP <= 1000){
    nivel = " MADEIRA "
} if ((experienciaXP > 1001) && (experienciaXP <=2000 )) {
    nivel = " FERRO "
} if ((experienciaXP > 2001) && (experienciaXP <=3000 )) {
    nivel = " COBRE "
} if ((experienciaXP > 3001) && (experienciaXP <=4000 )) {
    nivel = " BRONZE "
} if ((experienciaXP > 4001) && (experienciaXP <=5000 )) {
    nivel = " PRATA "
} if ((experienciaXP > 5001) && (experienciaXP <=6000 )){
    nivel = " OURO "
} if ((experienciaXP > 6001) && (experienciaXP <=7000 )) {
    nivel = " PLATINA "
} if ((experienciaXP > 7001) && (experienciaXP <=8000 )) {
    nivel = " DIAMANTE "
} if ((experienciaXP > 8001) && (experienciaXP <=9000 )) {
    nivel = " ASCENTENDE"
} if ((experienciaXP > 9001) && (experienciaXP <=10000 )){
    nivel = " IMORTAL "
} if ((experienciaXP > 10001)){
    nivel = " RADIANTE "
}else{
    nivel = " IMPOSSIVEL"
    console.log("Esse Jogador deve ser Hack ou GameMaster, é impossivel chegar a esse level sem bug")
}
    console.log("O Heroi de Nome " + nomeHeroi + "está no nivel de " + nivel + " com " +experienciaXP + " de XP.")