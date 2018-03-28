var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //大於7
                let Rulistheart = [];  //小於等於7
                let Rulistspade = [];  //J
                let Rulistclubs = [];  //Q
                let RulistJOKER = [];  //K
    
    var diamondChance = 0;//大於7
    var heartChance = 0;//小於等於7
    var spadeChance = 0;//J
    var clubsChance = 0;//Q
    var JOKERChance = 0;//K
    
    
    //確定遊戲階段
		
		if(pokercard == '比大'){
			//設定基本變數
      
			//出現卡片
                        times = 1;
      
			diamondChance = 40;
			heartChance = 30;
			spadeChance = 10;
			clubsChance = 10;
			JOKERChance = 10;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 3;
			Rulistdiamond = ['8','9','10'];
			
			Rulistheart.length = 7;
			Rulistheart = ['7','6','5','4','3','2','A'];
			
			Rulistspade.length = 1;
			Rulistspade = ['J'];
      
      Rulistclubs.length = 1;
			Rulistclubs = ['Q'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['K'];
      
      
      
     } else if(pokercard == '比小'){
				times = 1;
      
			diamondChance = 15;
			heartChance = 70;
			spadeChance = 5;
			clubsChance = 5;
			JOKERChance = 5;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 3;
			Rulistdiamond = ['8','9','10'];
			
			Rulistheart.length = 7;
			Rulistheart = ['7','6','5','4','3','2','A'];
			
			Rulistspade.length = 1;
			Rulistspade = ['J'];
      
      Rulistclubs.length = 1;
			Rulistclubs = ['Q'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['K'];
      
      }
			
     
     
      //設定說明文
			else if(pokercard == null){
				
				//設定說明文內容
				rply.text =  '【賭博之城】 皇帝撲克比大小\
					\n 可以選擇的模式有\
					\n 比大跟比小。\
					\n 規則:\
                                        \n 1.玩家抽完一張卡且選擇完模式後，NPC也會從牌庫隨機出一張撲克。這樣視為一局比大小\
                                        \n 2.初始獎金為下注金，每贏一局獎金就會翻倍(例如:100變200，200變400，400變800等等。\
                                        \n 3.最多可以進行10局，玩家每贏1局就可以自由決定是否中途退出並拿到目前累積的獎金。\
                                        \n 4.一旦輸了一局，先前累積的所有獎金就會全部歸0並終止該場賭博。\
                                        \n 5.NPC的卡組無鬼牌也沒有花色。\
                                        \n 6.玩家方的鬼牌可以當任何牌用。\
                                        \n 大小:K>Q>J>10>9>8>7>6>5>4>3>2>A \
                                        \n 要保守地保持著回本的心態還是伴隨著高風險的高倍率連續挑戰，皆取決於玩家';
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='找不到'+ pokercard + '這個模式喔!\
				\n 請選擇比大或比小';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     var temp = 0;
		GachaResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			GachaResult[i] = '\n';
			
		}
    
    for(var i=0; i< times;i++){
			temp = rollbase.Dice(100);

			if(temp <=diamondChance+heartChance+spadeChance+clubsChance+JOKERChance && temp >heartChance+spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistdiamond[Math.floor((Math.random() * (Rulistdiamond.length)) + 0)];
				GachaResult[i] = '\對方出了' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\對方出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\對方出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\對方出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\對方出了' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='對手的卡:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + GachaResult[i];
		}
		
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}

    
    

////////////////

module.exports = {
	main
};
