var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 星輝拉霸機
	function main(StarStone) {
  
  //基本變數
		let GachaResult = [];//結果
		let CharacterResult = [];
		var times = 0;//次數

	//基本變數
		let RulistSTAR = [];  //☆ 星星
                let RulistAPPLE = [];  //蘋果
                let RulistNANA = [];  //數字7
                let Rulistdiamond = [];  //鑽石
                let Rulistcat = [];  //貓咪圖案
    
    var STARChance = 0;//星星獲得率
    var APPLEChance = 0;//蘋果獲得率
    var NANAChance = 0;//數字7獲得率
    var diamondChance = 0;//鑽石獲得率
    var catChance = 0;//貓咪圖案獲得率
    
    
    //確定拉霸類別
		
		if(StarStone == 1){
			//設定基本變數
      
			//出現數目
                        times = 3
      
			STARChance = 20;
			APPLEChance = 30;
			NANAChance = 10;
			diamondChance = 10;
			catChance = 30;
			//
			
			//設定獎勵內容
			RulistSTAR.length = 2;
			RulistSTAR = ['星星','黃金之星'];
			
			RulistAPPLE.length = 2;
			RulistAPPLE = ['蘋果','金蘋果'];
			
			RulistNANA.length = 2;
			RulistNANA = ['數字7','金色7'];
      
      Rulistdiamond.length = 2;
			Rulistdiamond = ['鑽石','閃爍金光的鑽石'];
      
      Rulistcat.length = 2;
			Rulistcat = ['貓咪圖案','金色貓咪圖案'];
      
      
      
     } 
      //設定說明文
			else if(StarStone == null){
				
				//設定說明文內容
				rply.text = '【賭博之城】 星輝拉霸機\
					\n可以下注的星輝石金額有\
					\n 1顆(賠率*2)\
					\n 5顆(賠率*5)暫未開放\
					\n 想試試手氣或輕鬆賺大錢的話，請千萬不要放過這個機會喔';
				//
				
				return rply;//中斷+回傳值用
				
			}else{
				//設定說明文內容
				rply.text ='無法使用'+ StarStone + '顆星輝石進行下注喔!\
				\n 請使用1顆或5顆(暫未開放)星輝石進行下注';
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

			if(temp <=APPLEChance+catChance+STARChance+diamondChance+NANAChance && temp >catChance+STARChance+diamondChance+NANAChance){
				
				CharacterResult[i] = RulistAPPLE[Math.floor((Math.random() * (RulistAPPLE.length)) + 0)];
				GachaResult[i] = '\☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <=catChance+STARChance+diamondChance+NANAChance && temp > STARChance+diamondChance+NANAChance){
				
				CharacterResult[i] = Rulistcat[Math.floor((Math.random() * (Rulistcat.length)) + 0)];
				GachaResult[i] = '\☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= STARChance+diamondChance+NANAChance && temp > diamondChance+NANAChance){
				
				CharacterResult[i] = RulistSTAR[Math.floor((Math.random() * (RulistSTAR.length)) + 0)];
				GachaResult[i] = '\☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= diamondChance+NANAChance && temp >NANAChance){
				
				CharacterResult[i] = Rulistdiamond[Math.floor((Math.random() * (Rulistdiamond.length)) + 0)];
				GachaResult[i] = '\☆☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= NANAChance){
				
				CharacterResult[i] = RulistNANA[Math.floor((Math.random() * (RulistNANA.length)) + 0)];
				GachaResult[i] = '\☆☆☆☆☆:' +  CharacterResult[i]+ '\n';
				
			}
		}//通常腳色處理	
    
    let GResult ='拉霸結果:\n'
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
