var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////猜拳模式
	function main(moratype) {
  
               //基本變數
		let DeoutResult = [];//結果
		let cardResult = [];
		var times = 0;//次數

	//基本變數
		let rock = [];  //石頭
    let scissors = [];  //剪刀
    let paper = [];  //布
    let OMA = [];  //再一次
    
    var rockChance = 0;//石頭獲得率
    var scissorsChance = 0;//剪刀獲得率
    var paperChance = 0;//布獲得率
    var OMAChance = 0;//再一次獲得率
    
    
    //確定模式
		
		if(moratype == '普通'){
			//設定基本變數
      
			//出現卡片
      times = 1;
      
		rockChance = 33;//
    scissorsChance = 33;//
    paperChance = 33;//
    OMAChance = 1;//
			//
			
			//設定出拳內容
			rock.length = 2;
			rock = ['拳頭','超級拳頭'];
			
			scissors.length = 2;
			scissors = ['剪刀','超級剪刀'];
			
			paper.length = 2;
			paper = ['布','超級布'];
      
      OMA.length = 1;
			OMA = ['自由拳'];
      
      
      
      
     } else if(moratype == '逆轉的剪刀'){
				 times = 1;
      
		rockChance = 5;//
    scissorsChance = 89;//
    paperChance = 5;//
    OMAChance = 1;//
			//
			
			//設定獎勵內容
			rock.length = 2;
			rock = ['拳頭','超級拳頭'];
			
			scissors.length = 2;
			scissors = ['剪刀','超級剪刀'];
			
			paper.length = 2;
			paper = ['布','超級布'];
      
      OMA.length = 1;
			OMA = ['自由拳'];
      
      }
			
     
     
      //設定說明文
			else if(moratype == '逆轉的石頭'){
				
				times = 1;
      
		rockChance = 89;//
    scissorsChance = 5;//
    paperChance = 5;//
    OMAChance = 1;//
			//
			
			//設定獎勵內容
			rock.length = 2;
			rock = ['拳頭','超級拳頭'];
			
			scissors.length = 2;
			scissors = ['剪刀','超級剪刀'];
			
			paper.length = 2;
			paper = ['布','超級布'];
      
      OMA.length = 1;
			OMA = ['自由拳'];
      
      }
			
     
     
      //設定說明文
			else if(moratype == '逆轉的布'){
				
				times = 1;
      
		rockChance = 5;//
    scissorsChance = 5;//
    paperChance = 89;//
    OMAChance = 1;//
			//
			
			//設定獎勵內容
			rock.length = 2;
			rock = ['拳頭','超級拳頭'];
			
			scissors.length = 2;
			scissors = ['剪刀','超級剪刀'];
			
			paper.length = 2;
			paper = ['布','超級布'];
      
      OMA.length = 1;
			OMA = ['自由拳'];
      
      			
      
      }else{//設定說明文內容
				rply.text ='無法支援'+ moratype + '這種拳路的指令喔!\
				\n 請重新輸入，如有問題請回報Bug給GM';
				//
				
				return rply;//中斷+回傳值用
		
			
      
     
     
      }
     var temp = 0;
		DeoutResult.length = times;
		
		for(var i = 0; i< times;i++){
			
			DeoutResult[i] = '\n';
			
		}
    
    for(var i=0; i< times;i++){
			temp = rollbase.Dice(100);

			 if(temp <=rockChance+scissorsChance+paperChance+OMAChance && temp > scissorsChance+paperChance+OMAChance){
				
				cardResult[i] = rock[Math.floor((Math.random() * (rock.length)) + 0)];
				DeoutResult[i] = '\你出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= scissorsChance+paperChance+OMAChance && temp > paperChance+OMAChance){
				
				cardResult[i] = scissors[Math.floor((Math.random() * (scissors.length)) + 0)];
				DeoutResult[i] = '\你出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= paperChance+OMAChance && temp >OMAChance){
				
				cardResult[i] = paper[Math.floor((Math.random() * (paper.length)) + 0)];
				DeoutResult[i] = '\你出了' +  cardResult[i]+ '\n';
				
			}else if(temp <= OMAChance){
				
				cardResult[i] = OMA[Math.floor((Math.random() * (OMA.length)) + 0)];
				DeoutResult[i] = '\你出了' +  cardResult[i]+ '\n';
				
			}
		}//通常手卡處理	
    
    let GResult ='結果:\n'
		for(var i = 0;i<times;i++){
			GResult = GResult + DeoutResult[i];
		}
		
		
		rply.text = GResult;
		
		return rply;
		
		
		
	}

    
    

////////////////

module.exports = {
	main
};
