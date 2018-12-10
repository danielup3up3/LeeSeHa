var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////抽卡數
	function main(pokercard) {
  
               //基本變數
		let GachaResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let Rulistdiamond = [];  //方塊
                let Rulistheart = [];  //紅心
                let Rulistspade = [];  //黑桃
                let Rulistclubs = [];  //梅花
                let RulistJOKER = [];  //鬼牌
    
    var diamondChance = 0;//方塊獲得率
    var heartChance = 0;//紅心獲得率
    var spadeChance = 0;//黑桃獲得率
    var clubsChance = 0;//梅花獲得率
    var JOKERChance = 0;//鬼牌獲得率
    
    
    //確定遊戲階段
		
		if(pokercard == '單張'){
			//設定基本變數
      
			//出現卡片
                        times = 1;
      
			diamondChance = 24;
			heartChance = 24;
			spadeChance = 24;
			clubsChance = 24;
			JOKERChance = 4;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 13;
			Rulistdiamond = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistheart.length = 13;
			Rulistheart = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistspade.length = 13;
			Rulistspade = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
      Rulistclubs.length = 13;
			Rulistclubs = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
      RulistJOKER.length = 1;
			RulistJOKER = ['JOKER'];
      
      
      
     } else if(pokercard == '五張'){
				times = 5;
        
                        diamondChance = 24;
			heartChance = 24;
			spadeChance = 24;
			clubsChance = 24;
			JOKERChance = 4;
			//
			
			//設定獎勵內容
			Rulistdiamond.length = 13;
			Rulistdiamond = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistheart.length = 13;
			Rulistheart = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
			
			Rulistspade.length = 13;
			Rulistspade = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
                        Rulistclubs.length = 13;
			Rulistclubs = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      
                        RulistJOKER.length = 1;
			RulistJOKER = ['JOKER'];
      
      }
			
     
     
      //設定說明文
			else if(pokercard == null){
				
				//設定說明文內容
				rply.text =  '【賭博之城】 皇帝撲克\
					\n 可以選擇的模式有\
					\n 單張跟5張。\
					\n 規則:\
                                        \n 鬼牌可以當任何牌用。\
                                        \n 大小:2>A>K>Q>J>10>9>8>7>6>5>4>3 ';
                                      
				//
				
				return rply;//中斷+回傳值用
			
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ pokercard + '撲克的比試喔!\
				\n 請選擇單張或五張';
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
				GachaResult[i] = '\方塊' +  cardResult[i]+ '\n';
				
			}else if(temp <=heartChance+spadeChance+clubsChance+JOKERChance && temp > spadeChance+clubsChance+JOKERChance){
				
				cardResult[i] = Rulistheart[Math.floor((Math.random() * (Rulistheart.length)) + 0)];
				GachaResult[i] = '\紅心' +  cardResult[i]+ '\n';
				
			}else if(temp <= spadeChance+clubsChance+JOKERChance && temp > clubsChance+JOKERChance){
				
				cardResult[i] = Rulistspade[Math.floor((Math.random() * (Rulistspade.length)) + 0)];
				GachaResult[i] = '\黑桃' +  cardResult[i]+ '\n';
				
			}else if(temp <= clubsChance+JOKERChance && temp >JOKERChance){
				
				cardResult[i] = Rulistclubs[Math.floor((Math.random() * (Rulistclubs.length)) + 0)];
				GachaResult[i] = '\梅花' +  cardResult[i]+ '\n';
				
			}else if(temp <= JOKERChance){
				
				cardResult[i] = RulistJOKER[Math.floor((Math.random() * (RulistJOKER.length)) + 0)];
				GachaResult[i] = '\鬼牌' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='你的手卡:\n'
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
