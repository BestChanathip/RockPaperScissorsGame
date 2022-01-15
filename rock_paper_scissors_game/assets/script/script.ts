
const {ccclass, property} = cc._decorator;


declare global {
    var global_name: string;
}

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    btn_start: cc.Node = null;
    
    @property(cc.EditBox)
    player_name: cc.EditBox = null;

    @property(cc.Node)
    alert_invalid_name : cc.Node =null;

    @property(cc.Node)
    spin: cc.Node = null;
    @property(cc.Node)
    spin1: cc.Node = null;
    @property(cc.Node)
    spin2: cc.Node = null;
    @property(cc.Node)
    spin3: cc.Node = null;
  
    @property(cc.Node)
    spin_2: cc.Node = null;
    @property(cc.Node)
    spin1_2: cc.Node = null;
    @property(cc.Node)
    spin2_2: cc.Node = null;
    @property(cc.Node)
    spin3_2: cc.Node = null;

    @property(cc.Node)
    spin_3: cc.Node = null;
    @property(cc.Node)
    spin_3_2: cc.Node = null;
    @property(cc.Node)
    spin_3_3: cc.Node = null;

    @property(cc.AudioSource)
    audio_alert : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_spin : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_sword : cc.AudioSource =null;
    @property(cc.AudioSource)
    audio_background : cc.AudioSource =null;

    clickStart(){
        let valid_format =/^[a-zA-Z0-9]+$/g;
        global_name = this.player_name.string;
       if(global_name.match(valid_format)){
        this.audio_spin.play()
        this.spin_3_2.active = false;
        this.spin_3.active = true;
        this.btn_start.active =false;
            setTimeout(()=>{
              this.spin_3.active = false;
              this.spin_3_3.active = true;
            },1800)
            setTimeout(()=>{
                this.spin_3_3.active = true;
                this.audio_sword.play();
               cc.director.loadScene("main_scene");
            },1850)
       }
       else{
        this.audio_alert.play();
        this.alert_invalid_name.active = true;
       }
    }
   
    onLoad(){
        this.btn_start.active =true;
        this.audio_background.play();
        this.audio_spin.play();
        this.spin.active= true;
        var random_status = [1,2,3]
            setTimeout(()=>{
                var random = random_status[Math.floor(Math.random()*random_status.length)];
                this.spin.active= false;
                if(random==1){
                    this.spin1.active= true;
                    this.spin2.active= false;
                    this.spin3.active= false;
                }
                else if(random==2){
                    this.spin1.active= false;
                    this.spin2.active= true;
                    this.spin3.active= false;
                }
                else if(random==3){
                    this.spin1.active= false;
                    this.spin2.active= false;
                    this.spin3.active= true;
                }
            },2000)
            setTimeout(()=>{
                var random_2 = random_status[Math.floor(Math.random()*random_status.length)];
                this.spin_2.active= false;
                if(random_2==1){
                    this.spin1_2.active= true;
                    this.spin2_2.active= false;
                    this.spin3_2.active= false;
                }
                else if(random_2==2){
                    this.spin1_2.active= false;
                    this.spin2_2.active= true;
                    this.spin3_2.active= false;
                }
                else if(random_2==3){
                    this.spin1_2.active= false;
                    this.spin2_2.active= false;
                    this.spin3_2.active= true;
                }
            },1200)
       
    }
}
