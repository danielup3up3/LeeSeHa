var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 
	function main(monsterHP) {
		
		let AttackResult = [];//結果
		let SkillResult = [];
		var times = 0;//Boss回合行動次數

  
    let SkillOne = [];//技能1
		let SkillTwo = [];//技能2
		let SpecialSkill = [];//特殊技能
    
    var OneChance = 0;//技能1機率
		var TwoChance = 0;//技能2機率
		var SpecialChance = 0;//特殊技能機率
    
    
    //哈里HP 36/36
    if(monsterHP >= 30){
			//綠血區域時
			times = 1
	    
			OneChance = 70;
			TwoChance = 30;
			SpecialChance = 0;
		
			//
			
			//設定綠血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
			
      
      }else if(monsterHP < 30 && monsterHP >= 12){
			//黃血區域
		times = 1
	      
			OneChance = 40;
			TwoChance = 50;
			SpecialChance = 10;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
			
		
    
    }else if(monsterHP < 12){
			//紅血區域
			times = 1
	    
			OneChance = 0;
			TwoChance = 30;
			SpecialChance = 70;
			//
			
			//設定黃血攻擊模式
			SkillOne.length = 1;
			SkillOne = ['星之射擊'];
			
			SkillTwo.length = 1;
			SkillTwo = ['掉落陷阱'];
			
			SpecialSkill.length = 1;
			SpecialSkill = ['斷罪流星'];
      
      }else{
				//設定說明文內容
				rply.text ='錯誤002:輸入格式錯誤\
				\n 請確認後重試一次，如果仍有問題請通報Bug給GM知道';
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
				AttackResult[i] = '\哈里使用了' +  SkillResult[i]+ ' 造成了3點傷害跟暗箭-3' +'\
                 \n 總共-6 END';
      
		}else if(temp <=TwoChance + SpecialChance && temp >SpecialChance ){
    
			SkillResult[i] = SkillTwo[Math.floor((Math.random() * (SkillTwo.length)) + 0)];
				AttackResult[i] = '\哈里在你即將踏及之地設置了' +  SkillResult[i]+ ' 讓你下回合有50%機率無法行動' +'\
                 \n END';
        
		}else if(temp <= SpecialChance){
			
			SkillResult[i] = SpecialSkill[Math.floor((Math.random() * (SpecialSkill.length)) + 0)];
				AttackResult[i] = '\哈里使用了' +  SkillResult[i]+ ' 造成了14點傷害跟暗箭-3' + '\
                  \n 總共-17 END';
		}
		
		
       let SKesult ='敵人的回合:\n'
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
    
    
  
