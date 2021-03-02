let info = {
  personagem: 'Margarida',
  origem: 'Pato Donaldo',
  nota: 'Namorada do personagem principal nos quadrinhos Pato Donald',
};

info['recorrente'] = 'sim';  



let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último do MacPatinhas',
};

info2['recorrente'] = 'sim';


for (let i in info) {
  if (info[i] === info.recorrente && info[i] === "sim" && info2[i] === "sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(`${info[i]} e ${info2[i]}.`);
  }
}

