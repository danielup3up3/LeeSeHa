var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 硬幣
	function main(BunusType) {
		
		///基本變數
		let BonusListN = [];//正面
		let BonusListR = [];//反面
  
    var BonusChanceN = 0;//正面獲得率
		var BonusChanceR = 0;//反面獎勵獲得率
	
    
    ///確定類別
		
		if(BunusType == '正面'){
			//設定基本變數
			
			BonusChanceN = 40;
			BonusChanceR = 60;
			
			//
			
			//設定獎勵內容
			BonusListN.length = 1;
			BonusListN = ['正面'];
			
			BonusListR.length = 1;
			BonusListR = ['反面'];
			
			
			//
			
			//設定說明文
			}else if(BunusType == null){
				
				//設定說明文內容
				rply.text = '【猜正反】 猜硬幣正反面\
					\n可能會出現\
					\n 正面\
					\n 反面\
          \n 猜錯沒錢 猜對錢變2倍\
					\n\
					\n 想試試手氣的話，請輸入' 猜正反 ' + ' 正面或反面' ;
				//
				
				return rply;//中斷+回傳值用
				
			
			
		}else if(BunusType == '反面'){
			//設定基本變數
			
			BonusChanceN = 60;
			BonusChanceR = 40;
			
			//
			
			//設定獎勵內容
			BonusListN.length = 1;
			BonusListN = ['正面'];
			
			BonusListR.length = 1;
			BonusListR = ['反面'];
		
	
		}else{
				//設定說明文內容
				rply.text ='找不到編號['+ BunusType + ']的方式喔\
				\n\
				\n 如果想看詳細內容，請輸入   喔！(待補修正 ';
				//
				
				return rply;//中斷+回傳值用
		}

		

		 
		 
		 
		 
		//分析結果
                var temp = rollbase.Dice(100); 
		if(temp > BonusChanceR){
			rply.text = '結果:\
				\n 硬幣是 ' + BonusListN[Math.floor((Math.random() * (BonusListN.length)) + 0)] + ' ！';
		}else if(temp <= BonusChanceR){
			rply.text = '結果:\
				\n 硬幣是 ' + BonusListR[Math.floor((Math.random() * (BonusListR.length)) + 0)] + ' ！';
		}
		
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
