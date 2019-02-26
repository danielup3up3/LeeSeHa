var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(stype) {
		
		let AttackResult = [];//結果
		let SkillResult = [];
		var times = 0;//出貨量

  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
   
    if(stype == 0){
			//綠血區域時
			times = 1
	    
			OneChance = 80;
			TwoChance = 20;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['10盧布','15盧布','5盧布','5盧布'];
			
			SkillTwo.length = 4;
			SkillTwo = ['50盧布','20盧布','20盧布','100盧布'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['【SSR】風迷宮武=暴風之槍','【SSR】風迷宮武=守護盾劍','【SSR】風迷宮武=恩惠之杖','【SSR】迷宮武=狂嵐之劍'];
			
      
      }else if(stype == 1){
			//黃血區域
		times = 1
	      
			OneChance = 50;
			TwoChance = 45;
			SpecialChance = 5;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['20盧布','20盧布','20盧布','50盧布'];
			
			SkillTwo.length = 4;
			SkillTwo = ['50盧布','20盧布','20盧布','100盧布'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['辟邪符','辟邪符','珍奇寶石','招財貓'];
		
    
    }else if(stype == 2){
			//紅血區域
			times = 1
	    
			OneChance = 40;
			TwoChance = 40;
			SpecialChance = 20;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 4;
			SkillOne = ['50盧布','20盧布','20盧布','100盧布'];
			
			SkillTwo.length = 4;
			SkillTwo = ['50盧布','20盧布','20盧布','100盧布'];
			
			SpecialSkill.length = 4;
			SpecialSkill = ['辟邪符','珍奇寶石','珍奇寶石','招財貓'];
      
      }else if(stype == 3){
				//設定說明文內容
				rply.text ='目前\
				\n 還沒有EX獎勵';
				//
				
				return rply;//中斷+回傳值用
		}
      else{
				//設定說明文內容
				rply.text ='錯誤002:輸入格式錯誤\
				\n 請確認後重試一次，如果仍有問題請通報Bug給尹駿知道';
				//
				
				return rply;//中斷+回傳值用
		}
		
		 var temp = 0;
		AttackResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			AttackResult[i] = '\n';
			
		}
    
    
    
    //分析行動
               
    for(var i=0; i< times;i++){
		temp = rollbase.Dice(100);

		if(temp > TwoChance + SpecialChance){
    
			SkillResult[i] = SkillOne[Math.floor((Math.random() * (SkillOne.length)) + 0)];
				AttackResult[i] =  '\【金錢】:' +  SkillResult[i]+ '\n';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] =  '\【金錢】:' +  SkillResult[i]+ '\n';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] =  '\【道具】(除珍奇寶石外皆無法留到此次探險結束之後):' +  SkillResult[i]+ '\n';
		}
		
		
       let SKesult ='箱子內容:\n'
		for(var i = 0;i<times;i++){
			SKesult = SKesult + AttackResult[i];
		}
		
		
		rply.text = SKesult;
		
		return rply;
    
		
		
		
	}
	
		
		
		
	}
////////////////

module.exports = {
	main
};
