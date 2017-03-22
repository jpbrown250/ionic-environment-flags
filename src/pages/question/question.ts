import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';
/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
let apiQuestions = [{
  "Question_Number":1,
  "Answer_ID":"A",
  "Text":"There are times when I let others take responsibility for solving the problem.",
  "Style":"Avoiding",
  "id":"581283b657e0fdd11b84d32d"
},{
  "Question_Number":1,
  "Answer_ID":"B",
  "Text":"Rather than negotiate the things on which we disagree, I try to stress the things upon which we both agree.",
  "Style":"Accommodating",
  "id":"581283b657e0fdd11b84d32e"
},{
  "Question_Number":2,"Answer_ID":"A","Text":"I try to find a compromising situation.","Style":"Compromising","id":"581283b657e0fdd11b84d32f"},{"Question_Number":2,"Answer_ID":"B","Text":"I attempt to deal with all of his and my concerns.","Style":"Collaborating","id":"581283b657e0fdd11b84d330"},{"Question_Number":3,"Answer_ID":"A","Text":"I am usually firm in pursuing my goals.","Style":"Competing","id":"581283b657e0fdd11b84d331"},{"Question_Number":3,"Answer_ID":"B","Text":"I might try to soothe the other's feelings and preserve our relationship.","Style":"Accommodating","id":"581283b657e0fdd11b84d332"},{"Question_Number":4,"Answer_ID":"A","Text":"I try to find a compromising solution.","Style":"Compromising","id":"581283b657e0fdd11b84d333"},{"Question_Number":4,"Answer_ID":"B","Text":"I sometimes sacrifice my own wishes for the wishes of the other person.","Style":"Accommodating","id":"581283b657e0fdd11b84d334"},{"Question_Number":5,"Answer_ID":"A","Text":"I consistently seek the other's help in working out a solution.","Style":"Collaborating","id":"581283b657e0fdd11b84d335"},{"Question_Number":5,"Answer_ID":"B","Text":"I try to do what is necessary to avoid useless tensions.","Style":"Avoiding","id":"581283b657e0fdd11b84d336"},{"Question_Number":6,"Answer_ID":"A","Text":"I try to avoid creating unpleasantness for myself.","Style":"Avoiding","id":"581283b657e0fdd11b84d337"},{"Question_Number":6,"Answer_ID":"B","Text":"I try to win my position.","Style":"Competing","id":"581283b657e0fdd11b84d338"},{"Question_Number":7,"Answer_ID":"A","Text":"I try to postpone the issue until I have had some time to think it over.","Style":"Avoiding","id":"581283b657e0fdd11b84d339"},{"Question_Number":7,"Answer_ID":"B","Text":"I give up some points in exchange for others.","Style":"Compromising","id":"581283b657e0fdd11b84d33a"},{"Question_Number":8,"Answer_ID":"A","Text":"I am usually firm in pursuing my goals.","Style":"Competing","id":"581283b657e0fdd11b84d33b"},{"Question_Number":8,"Answer_ID":"B","Text":"I attempt to get all concerns and issues immediately out in the open","Style":"Collaborating","id":"581283b657e0fdd11b84d33c"},{"Question_Number":9,"Answer_ID":"A","Text":"I feel that differences are not always worth worrying about","Style":"Avoiding","id":"581283b657e0fdd11b84d33d"},{"Question_Number":9,"Answer_ID":"B","Text":"I make some effort to get my way.","Style":"Competing","id":"581283b657e0fdd11b84d33e"},{"Question_Number":10,"Answer_ID":"A","Text":"I am firm in pursuing my goals.","Style":"Competing","id":"581283b657e0fdd11b84d33f"},{"Question_Number":10,"Answer_ID":"B","Text":"I try to find a compromising solution.","Style":"Compromising","id":"581283b657e0fdd11b84d340"},{"Question_Number":11,"Answer_ID":"A","Text":"I attempt to get all concerns and issues immediately out in the open.","Style":"Collaborating","id":"581283b657e0fdd11b84d341"},{"Question_Number":11,"Answer_ID":"B","Text":"I might try to soothe the other's feelings and preserve our relationship.","Style":"Accommodating","id":"581283b657e0fdd11b84d342"},{"Question_Number":12,"Answer_ID":"A","Text":"I sometimes avoid taking positions which would create controversy.","Style":"Avoiding","id":"581283b657e0fdd11b84d343"},{"Question_Number":12,"Answer_ID":"B","Text":"I will let him have some of his positions if he lets me have some of mine.","Style":"Compromising","id":"581283b657e0fdd11b84d344"},{"Question_Number":13,"Answer_ID":"A","Text":"I propose a middle ground.","Style":"Compromising","id":"581283b657e0fdd11b84d345"},{"Question_Number":13,"Answer_ID":"B","Text":"I press to get my points made.","Style":"Competing","id":"581283b657e0fdd11b84d346"},{"Question_Number":14,"Answer_ID":"A","Text":"I tell him my ideas and ask him for his.","Style":"Collaborating","id":"581283b657e0fdd11b84d347"},{"Question_Number":14,"Answer_ID":"B","Text":"I try to show him the logic and benefits of my position.","Style":"Competing","id":"581283b657e0fdd11b84d348"},{"Question_Number":15,"Answer_ID":"A","Text":"I might try to soothe the other's feelings and preserve our relationship","Style":"Accommodating","id":"581283b657e0fdd11b84d349"},{"Question_Number":15,"Answer_ID":"B","Text":"I try to do what is necessary to avoid tensions.","Style":"Avoiding","id":"581283b657e0fdd11b84d34a"},{"Question_Number":16,"Answer_ID":"A","Text":"I try not to hurt the other's feelings.","Style":"Accommodating","id":"581283b657e0fdd11b84d34b"},{"Question_Number":16,"Answer_ID":"B","Text":"I try to convince the other person of the merits of my position.","Style":"Competing","id":"581283b657e0fdd11b84d34c"},{"Question_Number":17,"Answer_ID":"A","Text":"I am usually firm in pursuing my goals.","Style":"Competing","id":"581283b657e0fdd11b84d34d"},{"Question_Number":17,"Answer_ID":"B","Text":"I will let him have some of his positions if he lets me have some of mine.","Style":"Avoiding","id":"581283b657e0fdd11b84d34e"},{"Question_Number":18,"Answer_ID":"A","Text":"If it makes the other person happy, I might let him maintain his views.","Style":"Accommodating","id":"581283b657e0fdd11b84d34f"},{"Question_Number":18,"Answer_ID":"B","Text":"I will let him have some of his positions if he lets me have some of mine.","Style":"Compromising","id":"581283b657e0fdd11b84d350"},{"Question_Number":19,"Answer_ID":"A","Text":"I attempt to get all concerns and issues immediately out in the open.","Style":"Collaborating","id":"581283b657e0fdd11b84d351"},{"Question_Number":19,"Answer_ID":"B","Text":"I try to postpone the issue until I have had some time to think it over.","Style":"Avoiding","id":"581283b657e0fdd11b84d352"},{"Question_Number":20,"Answer_ID":"A","Text":"I attempt to immediately work through our differences.","Style":"Collaborating","id":"581283b657e0fdd11b84d353"},{"Question_Number":20,"Answer_ID":"B","Text":"I try to find a fair combination of gains and losses for everyone.","Style":"Compromising","id":"581283b657e0fdd11b84d354"},{"Question_Number":21,"Answer_ID":"A","Text":"In approaching negotiations, I try to be considerate of the other person's wishes.","Style":"Accommodating","id":"581283b657e0fdd11b84d355"},{"Question_Number":21,"Answer_ID":"B","Text":"I always lean toward a direct discussion of the problem.","Style":"Collaborating","id":"581283b657e0fdd11b84d356"},{"Question_Number":22,"Answer_ID":"A","Text":"I try to find a position that is intermediate between his and mine.","Style":"Compromising","id":"581283b657e0fdd11b84d357"},{"Question_Number":22,"Answer_ID":"B","Text":"I assert my wishes.","Style":"Competing","id":"581283b657e0fdd11b84d358"},{"Question_Number":23,"Answer_ID":"A","Text":"I am very often concerned with satisfying all our wishes.","Style":"Collaborating","id":"581283b657e0fdd11b84d359"},{"Question_Number":23,"Answer_ID":"B","Text":"There are times when I let others take responsibility for solving the problem.","Style":"Avoiding","id":"581283b657e0fdd11b84d35a"},{"Question_Number":24,"Answer_ID":"A","Text":"If the other's position seems very important to him, I would try to meet his wishes.","Style":"Accommodating","id":"581283b657e0fdd11b84d35b"},{"Question_Number":24,"Answer_ID":"B","Text":"I try to get him to settle for a compromise.","Style":"Compromising","id":"581283b657e0fdd11b84d35c"},{"Question_Number":25,"Answer_ID":"A","Text":"I try to show him the logic and benefits of my position.","Style":"Competing","id":"581283b657e0fdd11b84d35d"},{"Question_Number":25,"Answer_ID":"B","Text":"In approaching negotiations, I try to be considerate of the other person's wishes.","Style":"Accommodating","id":"581283b657e0fdd11b84d35e"},{"Question_Number":26,"Answer_ID":"A","Text":"I propose a middle ground.","Style":"Compromising","id":"581283b657e0fdd11b84d35f"},{"Question_Number":26,"Answer_ID":"B","Text":"I am nearly always concerned with satisfying all our wishes.","Style":"Collaborating","id":"581283b657e0fdd11b84d360"},{"Question_Number":27,"Answer_ID":"A","Text":"I sometimes avoid taking positions that would create controversy.","Style":"Avoiding","id":"581283b657e0fdd11b84d361"},{"Question_Number":27,"Answer_ID":"B","Text":"If it makes the other person happy, I might let him maintain his views.","Style":"Accommodating","id":"581283b657e0fdd11b84d362"},{"Question_Number":28,"Answer_ID":"A","Text":"I am usually firm in pursuing my goals.","Style":"Competing","id":"581283b657e0fdd11b84d363"},{"Question_Number":28,"Answer_ID":"B","Text":"I usually seek the other's help in working out a solution.","Style":"Collaborating","id":"581283b657e0fdd11b84d364"},{"Question_Number":29,"Answer_ID":"A","Text":"I propose a middle ground.","Style":"Compromising","id":"581283b657e0fdd11b84d365"},{"Question_Number":29,"Answer_ID":"B","Text":"I feel that differences are not always worth worrying about.","Style":"Avoiding","id":"581283b657e0fdd11b84d366"},{"Question_Number":30,"Answer_ID":"A","Text":"I try not to hurt the other's feelings.","Style":"Accommodating","id":"581283b657e0fdd11b84d367"},{"Question_Number":30,"Answer_ID":"B","Text":"I always share the problem with the other person so that we can work it out.","Style":"Collaborating","id":"581283b657e0fdd11b84d368"
    
  }]


@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides;
  questions: any = [];
  testAnswers: any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let singleQuestion of apiQuestions) {
      if(!this.questions[singleQuestion.Question_Number - 1])
        this.questions[singleQuestion.Question_Number - 1] = {}
      this.questions[singleQuestion.Question_Number - 1][singleQuestion.Answer_ID] = singleQuestion;
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.slides.lockSwipes(true);
    this.testAnswers = {
      "Avoiding": 0,
      "Accommodating": 0,
      "Compromising": 0,
      "Competing": 0,
      "Collaborating": 0
    }
  }
  
  nextSlide(option) {
    this.testAnswers[option.Style]++;
    if(this.slides.getActiveIndex() + 1 !== 30) {
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
    } else {
      //finished the test, move onto the results
      let tests: any = JSON.parse(window.localStorage.getItem("tests")) || [];
      this.testAnswers.createDate = new Date().toISOString();
      tests.push(this.testAnswers);
      window.localStorage.setItem("tests", JSON.stringify(tests));
      this.navCtrl.setRoot(LobbyPage);
    }
  }
}
