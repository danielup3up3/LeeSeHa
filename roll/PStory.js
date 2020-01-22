var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 完美童話
	function main(BunusType) {
		
		///基本變數
		let BonusListN = [];//王子起程
		let BonusListR = [];//獲得聖劍
    let BonusListSR = [];//拯救公主
		let BonusListSSR = [];//遭遇惡龍
    
    var BonusChanceN = 0;//獲得率
		var BonusChanceR = 0;//獲得率
    var BonusChanceSR = 0;//獲得率
		var BonusChanceSSR = 0;//獲得率
	
    
    ///確定類別
		
		if(BunusType == '抽卡'){
			//設定基本變數
			
			BonusChanceN = 23;
			BonusChanceR = 23;
      BonusChanceSR = 23;
			BonusChanceSSR = 31;
			
			//
			
			//設定獎勵內容
			BonusListN.length = 1;
			BonusListN = ['王子起程'];
			
			BonusListR.length = 1;
			BonusListR = ['獲得聖劍'];
      
      BonusListSR.length = 1;
			BonusListSR = ['拯救公主'];
      
      BonusListSSR.length = 1;
			BonusListSSR = ['遭遇惡龍'];
			
			
			//
			
			//設定說明文
			}else if(BunusType == null){
				
				//設定說明文內容
				rply.text = '完美童話\
					\n 遊戲規則詳情請見記事本\
					\n 有任何問題可直接回報尹駿 ' ;
				//
				
				return rply;//中斷+回傳值用
				
			
			
	
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
		if(temp > BonusChanceR+BonusChanceSR+BonusChanceSSR){
			rply.text = '結果:\
				\n 卡片是 ' + BonusListN[Math.floor((Math.random() * (BonusListN.length)) + 0)] + ' ！';
        
    }else if(temp <= BonusChanceR+BonusChanceSR+BonusChanceSSR && temp > BonusChanceSR+BonusChanceSSR){
			rply.text = '結果:\
				\n 卡片是 ' + BonusListR[Math.floor((Math.random() * (BonusListR.length)) + 0)] + ' ！'
        
		}else if(temp <= BonusChanceSR+BonusChanceSSR && temp > BonusChanceSSR){
			rply.text = '結果:\
				\n 卡片是 ' + BonusListSR[Math.floor((Math.random() * (BonusListSR.length)) + 0)] + ' ！';
        
    }else if(temp <= BonusChanceSSR){
			rply.text = '結果:\
				\n 卡片是 ' + BonusListSSR[Math.floor((Math.random() * (BonusListSSR.length)) + 0)] + ' ！';
        
		}
		
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
