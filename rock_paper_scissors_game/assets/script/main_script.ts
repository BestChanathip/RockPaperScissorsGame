const {ccclass, property} = cc._decorator;

declare global {
    var current_select: number;
}
let my_score: number = 0;
let computer_score: number = 0;
let count : number = 1;
let final_result : number= 0;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    final_result_draw: cc.Node = null;
    @property(cc.Node)
    final_result_lose: cc.Node = null;
    @property(cc.Node)
    final_result_win: cc.Node = null;
    @property(cc.Label)
    count_match: cc.Label = null;
    @property(cc.Label)
    player_name: cc.Label = null;
    @property(cc.Label)
    my_score: cc.Label = null;
    @property(cc.Label)
    computer_score: cc.Label = null;
    @property(cc.Node)
    btn_paper : cc.Node =null;
    @property(cc.Node)
    btn_rock : cc.Node =null;
    @property(cc.Node)
    btn_scissors : cc.Node =null;
    @property(cc.Node)
    btn_start : cc.Node =null;
    @property(cc.Node)
    btn_rematch : cc.Node =null;
    @property(cc.Node)
    btn_exit : cc.Node =null;
    @property(cc.Node)
    btn_close : cc.Node =null;
    @property(cc.Node)
    alert_action : cc.Node =null;
    @property(cc.Node)
    spin_pre : cc.Node =null;
    @property(cc.Node)
    spin_gif : cc.Node =null;
    @property(cc.Node)
    spin_paper : cc.Node =null;
    @property(cc.Node)
    spin_rock : cc.Node =null;
    @property(cc.Node)
    spin_scissors : cc.Node =null;
    @property(cc.Node)
    result_draw : cc.Node =null;
    @property(cc.Node)
    result_win : cc.Node =null;
    @property(cc.Node)
    result_lose : cc.Node =null;
    @property(cc.AudioSource)
    audio_win : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_lose : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_draw : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_spin : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_sword : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_background : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_game_win : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_game_draw : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_game_lose : cc.AudioSource =null;
    @property(cc.Node)
    match_no : cc.Node =null;
    ///start spirte frame
    @property(cc.SpriteFrame)
    img_btn_1 : cc.SpriteFrame =null;
    @property(cc.SpriteFrame)
    img_btn_2 : cc.SpriteFrame =null;
    @property(cc.SpriteFrame)
    img_btn_3 : cc.SpriteFrame =null;
    @property(cc.Prefab)
    prefab_log : cc.Prefab =null;
    @property(cc.Node)
    container_player_log : cc.Node =null;
    @property(cc.Node)
    container_computer_log : cc.Node =null;

    start () {

    }
   
    onLoad(){
        current_select =0;        
        this.hideThreeButtonAndShowStart();
        this.player_name.string = global_name;
        this.count_match.string = count+"";
        this.computer_score.string = computer_score+"";
        this.my_score.string =  my_score+"";
        this.final_result_lose.active = false;
        this.final_result_win.active = false;
        this.final_result_draw.active = false;
        this.btn_rock.setScale(1,1)
        this.btn_scissors.setScale(1,1)
        this.btn_paper.setScale(1,1);
        this.match_no.active =false;
        this.container_player_log.active =false;
        this.container_computer_log.active =false;
        this.container_player_log.removeAllChildren();
        this.container_computer_log.removeAllChildren();
    }
    onClickPlayAgain(){
        computer_score = 0;
        my_score =0;
        count=1; 
        current_select =0;
        this.onLoad();
        this.resultTextActiveFalse();
        this.audio_sword.play();
        this.audio_background.play();
        this.allSoundStop();
        this.btnActiveTrue();
        this.resetSpin();
    }
    onClickExit(){
        computer_score = 0;
        my_score =0;
        count=1; 
        current_select =0;
       cc.director.loadScene("login_scene");
    }
    onClickCloseGame(){
        window.close();
    }
    //start select
    onSelectRock(){
        current_select = 1;
        this.btn_rock.setScale(1.5,1.5)
        this.btn_scissors.setScale(1,1)
        this.btn_paper.setScale(1,1)
        this.resetSpin();
        this.resultTextActiveFalse();
    }
    onSelectPaper(){
        current_select = 2;
        this.btn_rock.setScale(1,1)
        this.btn_scissors.setScale(1,1)
        this.btn_paper.setScale(1.5,1.5)
        this.spin_pre.active=true; 
        this.spin_gif.active=false;
        this.resetSpin();
        this.resultTextActiveFalse();
    }
    onSelectScisscors(){
        current_select = 3;
        this.btn_rock.setScale(1,1)
        this.btn_scissors.setScale(1.5,1.5)
        this.btn_paper.setScale(1,1)
        this.resultTextActiveFalse();
        this.resetSpin();
    }
    resetSpin(){
        this.spin_gif.active=false;
        this.spin_pre.active=true;
        this.alert_action.active = false;
        this.spin_scissors.active=false;
        this.spin_paper.active=false;
        this.spin_rock.active=false;
        this.audio_spin.stop();
    }
    //end select
    //start UI
    hideThreeButtonAndShowStart(){
        this.btn_rematch.active = false;
        this.btn_exit.active = false;
        this.btn_close.active = false;
        this.btn_start.active = true;
    }
    hideStartandShowThreeButton(){
        this.btn_rematch.active = true;
        this.btn_exit.active = true;
        this.btn_close.active = true;
        this.btn_start.active = false;
    }
    allSoundStop(){
        this.audio_game_win.stop();
        this.audio_game_lose.stop();
        this.audio_game_draw.stop();
    }
    btnActiveFalse(){
        this.btn_paper.active = false;
        this.btn_scissors.active = false;
        this.btn_rock.active = false;
        this.spin_scissors.active=false;
        this.spin_paper.active=false;
        this.spin_rock.active=false;
        this.spin_pre.active=false;
    }
    btnActiveTrue(){
        this.btn_paper.active = true;
        this.btn_scissors.active = true;
        this.btn_rock.active = true;
    }
    resultTextActiveFalse(){
        this.result_draw.active = false;
        this.result_lose.active = false;
        this.result_win.active = false;
    }
    //end UI
    //game logic
    onClickStart(){
        //rock , paper , scissors
        var random_status = [1,2,3]
        if(current_select == 0){
            this.alert_action.active = true;
        }
        else{
            count +=1;
            var random = random_status[Math.floor(Math.random()*random_status.length)];
            this.resetSpin();
            this.resultTextActiveFalse();
            this.spin_pre.active=false;
            this.spin_gif.active=true;
            this.btn_start.active=false;
            this.audio_spin.play();
            setTimeout(()=>{
                this.spin_gif.active=false;
                if(random ==1){
                    this.spin_rock.active=true;
                }
                else if(random ==2){
                    this.spin_paper.active=true;
                }
                else if(random ==3){
                    this.spin_scissors.active=true;
                }
                if(current_select==1 && random == 1){
                    this.result_draw.active= true;
                    this.audio_draw.play();
                }
                else if(current_select==1 && random == 2){
                    computer_score += 1;
                    this.audio_lose.play();
                    this.result_lose.active= true;
                }
                else if(current_select==1 && random == 3){
                    my_score += 1;
                    this.audio_win.play();
                    this.result_win.active= true;
                }
                else if(current_select==2 && random == 1){
                    my_score += 1;
                    this.audio_win.play();
                    this.result_win.active= true;
                }
                else if(current_select==2 && random == 2){
                    this.result_draw.active= true;
                    this.audio_draw.play();
                }
                else if(current_select==2 && random == 3){
                    computer_score += 1;
                    this.audio_lose.play();
                    this.result_lose.active= true;
                }
                else if(current_select==3 && random == 1){
                    computer_score += 1;
                    this.audio_lose.play();
                    this.result_lose.active= true;
                }
                else if(current_select==3 && random == 2){
                    my_score += 1;
                    this.audio_win.play();
                    this.result_win.active= true;
                }
                else if(current_select==3 && random == 3){
                    this.result_draw.active= true;
                    this.audio_draw.play();
                }
                //condition
                if(count < 6){
                    if((my_score==3 && computer_score==0)||(my_score==3 && computer_score==1)){
                        this.finalResult(final_result=1);
                    }
                    else if((my_score==0 && computer_score==3)||(my_score==1 && computer_score==3)){
                        this.finalResult(final_result=-1);
                    }
                    else{
                    this.btn_start.active=true;
                    }
                }
               else if(count >=6){
                   if(my_score == computer_score){
                     this.finalResult(final_result=0);
                   }
                   else if(my_score > computer_score){
                    this.finalResult(final_result=1);
                  }
                  else if(my_score < computer_score){
                    this.finalResult(final_result=-1);
                  }
               }
                this.computer_score.string = computer_score +"";
                this.my_score.string = my_score+"";
                this.count_match.string = count+"";
                if(count >=6){
                this.count_match.string = "END";
                }
                //current_select=0;
            },1700)
            this.addLog(random,current_select);
        }
    }
    addLog(computer_selected:number,player_selected :number){
        let prefab_log_computer = cc.instantiate(this.prefab_log);
        let prefab_log_player = cc.instantiate(this.prefab_log);
        if(computer_selected==1){
            prefab_log_computer.getComponent(cc.Sprite).spriteFrame = this.img_btn_1
        }
        else if(computer_selected==2){
            prefab_log_computer.getComponent(cc.Sprite).spriteFrame = this.img_btn_2
        }
        else if(computer_selected==3){
            prefab_log_computer.getComponent(cc.Sprite).spriteFrame = this.img_btn_3
        }  
        if(player_selected==1){
            prefab_log_player.getComponent(cc.Sprite).spriteFrame = this.img_btn_1
        }
        else if(player_selected==2){
            prefab_log_player.getComponent(cc.Sprite).spriteFrame = this.img_btn_2
        }
        else if(player_selected==3){
            prefab_log_player.getComponent(cc.Sprite).spriteFrame = this.img_btn_3
        }  
        this.container_player_log.addChild(prefab_log_player);
        this.container_computer_log.addChild(prefab_log_computer);
    }
    finalResult(final_result){
        this.resultTextActiveFalse();
        setTimeout(()=>{
            this.btnActiveFalse();
            this.hideStartandShowThreeButton();
            this.container_computer_log.active=true;
            this.container_player_log.active=true;
            this.match_no.active =true;
            this.count_match.string ="";
           this.audio_background.stop();
            if(final_result==0){
                this.final_result_draw.active = true;
                this.audio_game_draw.play();
            }
            else if(final_result==1){
                this.final_result_win.active = true;
                this.audio_game_win.play();
            }
            else if(final_result==-1){
                this.final_result_lose.active = true;
                this.audio_game_lose.play();
            }
        },1000)
    }
    
}
