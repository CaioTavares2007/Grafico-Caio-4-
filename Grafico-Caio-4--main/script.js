const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(grafico, {
    type: "pie",
    data: {
      labels: [
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
      datasets: [{
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
          1.7
        ],
        backgroundColor: [
          "red", 
          "blue",
          "green",
          "#ADFF2F",
          "#DAA520",
          "#BC8F8F",
          "rgb(245,222,179)",
          "rgb(186,85,211)",
          "rgb(255,20,147)",
          "CadetBlue",        
        ],
      }
    ]
    }
  }
);