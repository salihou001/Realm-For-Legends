import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  compteur = 0
  ngOnInit(){
    this.initAnimation();
  }
  initAnimation(){
    const TL = gsap.timeline();
    TL
      .to('.rowText',{
        x: '*',
        duration: .6,
        delay: .2,
        ease: 'power4.inout'
      })
      .from('.hero_1',{
        opacity: 0,
        top: '-200px',
        left: '-400px',
        duration: .7,
        ease: 'power4.in'
      },"<")
      .from('.hero_2',{
        opacity: 0,
        top: '-200px',
        right: '-400px',
        duration: .7,
        ease: 'power4.in'
      },"<")
      .from('.hero_3',{
        opacity: 0,
        top: '200px',
        left: '400px',
        duration: .7,
        ease: 'power4.in'
      },"<")
      .from('.hero_4',{
        opacity: 0,
        top: '200px',
        left: '-400px',
        duration: .7,
        ease: 'power4.in'
      },"<")
  }
  // precedent
  precedent() {
    const TL = gsap.timeline();
    if(this.compteur === 1){
      TL 
        .to('.rowText',{
          x: '0',
          duration : .6,
          delay: .3,
          ease: 'power4.in'
        })
        .to('.hero_1',{
          x: '*',
          duration : .47,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.heroName',{
          y: '0',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.row_number',{
          y: '0',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.hero_2',{
          rotate: '5deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.hero_3',{
          rotate: '7deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.hero_4',{
          rotate: '9deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        this.compteur--
    }else{
      if(this.compteur === 2){
        TL 
          .to('.rowText',{
            x: '-100%',
            duration : .6,
            delay: .3,
            ease: 'power4.in'
          })
          .to('.heroName',{
            y: '-100%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.row_number',{
            y: '-100%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.hero_2',{
            x: '*',
            duration : .4,
            delay: .1,
            ease: 'power4.in'
          },"<")
          .to('.hero_3',{
            rotate: '7deg',
            duration : .3,
            delay: .1,
            ease: 'power4.in'
          },"<")
          .to('.hero_4',{
            rotate: '9deg',
            duration : .3,
            delay: .1,
            ease: 'power4.in'
          },"<")
          this.compteur--
      }else{
        if(this.compteur === 3){
          TL 
          .to('.rowText',{
            x: '-200%',
            duration : .6,
            delay: .3,
            ease: 'power4.in'
          })
          .to('.heroName',{
            y: '-200%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.row_number',{
            y: '-200%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.hero_3',{
            x: '*',
            duration : .4,
            delay: .1,
            ease: 'power4.in'
          },"<")
          .to('.hero_4',{
            rotate: '5deg',
            duration : .3,
            delay: .1,
            ease: 'power4.in'
          },"<")
          this.compteur--
        }
      }
    }
  }
  // suivant
  suivant() {
    const TL = gsap.timeline();
    if(this.compteur === 0){
      TL 
        .to('.rowText',{
          x: '-100%',
          duration : .6,
          delay: .3,
          ease: 'power4.in'
        })  
        .to('.hero_1',{
          x: '1000px',
          duration : .6,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.heroName',{
          y: '-100%',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.row_number',{
          y: '-100%',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.hero_2',{
          rotate: '0deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.hero_3',{
          rotate: '5deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.hero_4',{
          rotate: '7deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        this.compteur++
    }else{
      if(this.compteur === 1){
        TL 
        .to('.rowText',{
          x: '-200%',
          duration : .6,
          delay: .3,
          ease: 'power4.in'
        })
        .to('.hero_2',{
          x: '1000px',
          duration : .6,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.heroName',{
          y: '-200%',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.row_number',{
          y: '-200%',
          duration : .4,
          delay: .2,
          ease: 'power4.in'
        },"<-.2")
        .to('.hero_3',{
          rotate: '-5deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        .to('.hero_4',{
          rotate: '5deg',
          duration : .3,
          delay: .1,
          ease: 'power4.in'
        },"<")
        this.compteur++
      }else{
        if(this.compteur === 2){
          TL 
          .to('.rowText',{
            x: '-300%',
            duration : .6,
            delay: .3,
            ease: 'power4.in'
          })
          .to('.hero_3',{
            x: '1000px',
            duration : .6,
            delay: .1,
            ease: 'power4.in'
          },"<")
          .to('.heroName',{
            y: '-300%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.row_number',{
            y: '-300%',
            duration : .4,
            delay: .2,
            ease: 'power4.in'
          },"<-.2")
          .to('.hero_4',{
            rotate: '-10deg',
            duration : .3,
            delay: .1,
            ease: 'power4.in'
          },"<")
          this.compteur++
        }
      }
    }
  }
}
