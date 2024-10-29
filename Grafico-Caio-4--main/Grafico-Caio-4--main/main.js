const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico,{
type:"pie",
data: {
 labels:[
"Instagram",
"WhatsApp",
"Facebook",
"WeChat",
"TikTok",
"DouYin",
"Twitter",
"Telegram",
"FB Messenger",
"LINE"
 ],
 datasets:[{
    data: [
        16.5,
        16.1,
        12.8,
        12.8,
        7.4,
        6.6,
        3.2,
        2.4,
        2.3,
        1.7,
    ],
    backgroudColor:[
        "rgb(25,25,112)",
        "rgb(34,139,34)",
        "rgb(245,222,179)",
        "rgb(75,0,130)",
        "rgb(165,42,42)",
        "rgb(255,99,71)",
        "rgb(255,255,0)",
        "rgb(255,69,0)",
        "rgb(175,238,238)",
        "rgb(199,21,133)",




    ]
 }

 ]

}
}
)
