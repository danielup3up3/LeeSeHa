var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 角色招募
	function main(DrawPool,GachaTimes) {
		
		///基本變數(不要動)
		let GachaResult = [];//抽獎結果
		let CharacterResult = [];//總計獲得同伴
		var times = 0;//抽獎次數
		
		//宣告角色清單
		let CharacterList0 = [];//特殊角色清單
    let CharacterList1 = [];//
		let CharacterList2 = [];//
		let CharacterList3 = [];//一星角色清單
		let CharacterList4 = [];//二星角色清單
		let CharacterList5 = [];//三星角色清單
 
		var characterChance0 = 0;//特殊角色獲得率
    var characterChance1 = 0;
  	 var characterChance2 = 0;
		var characterChance3 = 0;//N角色獲得率
		var characterChance4 = 0;//NR角色獲得率
		var characterChance5 = 0;//R角色獲得率
		var characterST = 0;//確認保底角色數量
		///
		
		///確定抽獎狀態
		if(DrawPool == 0){
			CharacterList0.length = 2;
			CharacterList0 = ['蓮','琳娜'];
			
			characterChance0 = 100;
			characterChance1 = 0;
			characterChance2 = 0;
			characterChance3 = 0;
			characterChance4 = 0;
			characterChance5 = 0;

			if(GachaTimes =='首抽'){
				times = 1;
	
			}else if(GachaTimes == null){
				
				rply.text = '【首次限定！】起始招募-最初的夥伴 \
					\n\
					\n 出現稀有度一覽： \
					\n 三星：100%\
					\n\
					\n 出現角色一覽:\
					\n  蓮\
					\n  琳娜\
					\n\
					\n 提供招募方式：\
					\n 首抽 無需珍奇寶石[一人限定一次] \
					\n\
					\n 輸入 夥伴招募 1 內容 即可確認招募會登場的夥伴\
					\n 想要招募的話，請輸入 夥伴招募 0 招募方式(首抽) ';
				
				return rply;
				
			  }else{
				rply.text = '本招募無法使用' + GachaTimes +'招募喔\n 如果想看本招募詳細內容，請輸入 [夥伴招募 ' + DrawPool + ']';
				return rply;	
			  	}
		}else if(DrawPool == 1){
			CharacterList3.length = 2;
			CharacterList3 = ['菈法','尼克'];
			CharacterList4.length = 2;
			CharacterList4 = ['奧斯','約書亞'];
			CharacterList5.length = 2;
			CharacterList5 = ['蓮','琳娜'];

			//
			characterChance3 = 60;
			characterChance4 = 30;
			characterChance5 = 10;
	

			if(GachaTimes =='單抽'){
				times = 1;
	
			}else if(GachaTimes =='十一連'){
				times = 11;
				characterST = 1;
	
			}else if(GachaTimes == null){
				
				rply.text = '【地城冒險】第一彈主題夥伴池 \
					\n\
					\n 提供割合： \
					\n 角色系列 \
					\n  尼克\
					\n  菈法\
          \n  奧斯\
					\n  約書亞\
          \n  蓮\
          \n  琳娜\
					\n\
					\n 提供招募方式：\
					\n 單抽 需1顆珍奇寶石\
                                        \n 十一連 暫不提供\
					\n\
					\n 想要招募的話，請輸入 [夥伴招募 1 招募方式] ';
				
				return rply;
				
			  }else{
				rply.text = '本招募無法使用' + GachaTimes +'招募喔\n 如果想看本招募詳細內容，請輸入 [夥伴招募 ' + DrawPool + ']';
				return rply;	
			  	}
		}else if(DrawPool == null){
			
			rply.text = '【卡池目錄】目前的卡池一覽表 \
				\n\
				\n  0 【起始招募(首抽)】 \
				\n  1 【限定招募】第一彈主題卡池「迷城英豪」(NEW) \
				\n\
				\n 如果想看詳細招募內容，請輸入 [夥伴招募 招募編號]';
				return rply;
			
		}else{
			
			rply.text = '找不到招募編號['+ DrawPool+ ']的招募喔\
				\n\
				\n【【卡池目錄】目前的卡池一覽表 \
				\n\
				\n  0 【起始招募(首抽)】 \
				\n  1 【限定招募】第一彈主題卡池「迷城英豪」(NEW) \
				\n\
				\n 如果想看詳細招募內容，請輸入 [夥伴招募 招募編號]';
				return rply;
			
		}
		
		///
		
		///確認內容
		
		
		///抽獎
		
		var temp = 0;
		GachaResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			GachaResult[i] = '\n';
			
		}
		
		for(var i = 0;i < characterST; i++){
			temp = rollbase.Dice(characterChance3+characterChance4+characterChance5);
			if(temp > characterChance4+characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList3[Math.floor((Math.random() * (CharacterList3.length)) + 0)];
				GachaResult[times-characterST+i] = '\【R】:' +  CharacterResult[times-characterST+i]+ '\n';
				
			}else if(temp <= characterChance4+characterChance5 && temp > characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList4[Math.floor((Math.random() * (CharacterList4.length)) + 0)];
				GachaResult[times-characterST+i] = '\【SR】:' +  CharacterResult[times-characterST+i]+ '\n';
				
			}else if(temp <=characterChance5){
				
				CharacterResult[times-characterST+i] = CharacterList5[Math.floor((Math.random() * (CharacterList5.length)) + 0)];
				GachaResult[times-characterST+i] = '\【SSR】:' +  CharacterResult[times-characterST+i]+ '\n';
			}
			
		}//保底腳色處理
		
				
		for(var i=0; i<times-characterST;i++){
			temp = rollbase.Dice(100);

			if(temp >characterChance1+characterChance2+characterChance3+characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList0[Math.floor((Math.random() * (CharacterList0.length)) + 0)];
				GachaResult[i] = '\【SR】:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <=characterChance1+characterChance2+characterChance3+characterChance4+characterChance5 && temp >characterChance2+characterChance3+characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList1[Math.floor((Math.random() * (CharacterList1.length)) + 0)];
				GachaResult[i] = '\【N】:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <=characterChance2+characterChance3+characterChance4+characterChance5 && temp > characterChance3+characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList2[Math.floor((Math.random() * (CharacterList2.length)) + 0)];
				GachaResult[i] = '\【NR】:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance3+characterChance4+characterChance5 && temp > characterChance4+characterChance5){
				
				CharacterResult[i] = CharacterList3[Math.floor((Math.random() * (CharacterList3.length)) + 0)];
				GachaResult[i] = '\【R】:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance4+characterChance5 && temp >characterChance5){
				
				CharacterResult[i] = CharacterList4[Math.floor((Math.random() * (CharacterList4.length)) + 0)];
				GachaResult[i] = '\【SR】:' +  CharacterResult[i]+ '\n';
				
			}else if(temp <= characterChance5){
				
				CharacterResult[i] = CharacterList5[Math.floor((Math.random() * (CharacterList5.length)) + 0)];
				GachaResult[i] = '\【SSR】:' +  CharacterResult[i]+ '\n';
				
			}
		}//通常腳色處理	
		
		///
		
		var CharacterR = 1;///判斷重複多少角色

		for(var i = 0;i<times;i++){
			
			CharacterR = 1;
			
			for(var j = i+1;j<times;j++){
				if(CharacterResult[i]!= null && CharacterResult[i] == CharacterResult[j] && CharacterResult[j] != null){
					CharacterResult[j] = null;
					CharacterR++ ;
				}
			   }
			if(CharacterResult[i]!= null) CharacterResult[i] = CharacterResult[i] + '*' + CharacterR;
			
		}///重複角色判斷
		
		let GResult ='招募結果:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + GachaResult[i];
		}
		
		GResult = GResult + '\n--------------------\n總計獲得夥伴:\n';
		
		for(var i = 0;i<times;i++){
			if(CharacterResult[i] != null ) GResult = GResult + CharacterResult[i] + ',' ;
		}
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}
////////////////

module.exports = {
	main
};
