body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
body {
  background: linear-gradient(to bottom right, #50a3a2 0%, #2eca7f 100%);
  padding: 0;
  margin: 0;
  border: none;
  font-family: 'Poppins';
  font-size: 14px;
  color: #626262;
  letter-spacing: 0em;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: #171717;
}



.background.gradient {
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #2eca7f 100%);
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

input, textarea, button {
  margin: 0;
  padding: 0;
  display: block;
  font-family: 'Poppins';
  font-size: 13px;
  width: 100%;
  height: 60px;
  color: #171717;
  background: none;
  border: none;
  border-bottom: 1px solid #d8dbe2;
  appearance: none;
  resize: none;
  outline: 0;
  transition: all 0.3s ease 0s;
  border-radius: 0px;
}

input:focus, textarea:focus, button:focus {
  color: #171717;
  border-bottom: 1px solid #2eca7f;
}

.title{
  text-align: left;
  margin: 0 0 15px 20px;
  padding: 0 0 5px 0;
  position: relative;
  font-size: 17px;
  color: #171717;
  line-height: 21px;
  font-weight: 500;
}

/* Círculo verde encima del título */
.title::before{
  content: '';
  position: absolute;
  left: -12px;
  top: 0;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
  z-index: -1;
  border-radius: 30px;
}
/* Línea gris debajo del título */
.title::after{
  content: '';
  position: absolute;
  left: -40px;
  bottom: -15px;
  width: 95%;
  height: 1px;
  background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

.line-left{
  position: relative;
}
.line-left::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

.line-down{
  position: relative;
}

.line-down::after{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

header{
  background-color: white;
  border-radius: 0 0 5px 5px;
  width: 100%;
  max-width: 540px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  z-index: 100;
}

header nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header nav a {
  width: 100%;
  height: 72px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 0.3s ease 0s;
  font-size: 20px;
}

header nav a::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1px;
  height: 100%;
  background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

header nav a .link{
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 4px;

}

header nav a:hover {
  color: #2eca7f;
}

main{
  margin-top: 88px;
}

main .profile, main .about, main .resume, main .works, main .blog, main .contact{
  box-sizing: border-box;
  position: relative;
  background: #ffffff;
  text-align: center;
  z-index: 10;
  border-radius: 4px;
  max-width: 540px;
  margin: 0 auto;
}

main .about, main .resume, main .works, main .blog, main .contact{
  padding: 30px 20px 30px 20px;
  margin-top: 15px;
}

main .profile{
  margin-top: 18px;
  overflow: hidden;
}

.profile-background{
  height: 300px;
}

.profile-image{
  position: relative;
  height: 84px;
}
.profile-image img{
  position: relative;
  top: -82px;
  border-radius: 50%;
  border: 3px solid white;
  width: 134px;
}

.profile-image::before{
  content: '';
  position: absolute;
  top: -69px;
  left: calc(50% - 78px);
  width: 134px;
  height: 134px;
  background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
  border-radius: 100%;
}

.profile-name{
  font-size: 32px;
  color: #171717;
  line-height: 32px;
  font-weight: 400;
  margin: 0 auto 0 auto;
}

.profile-profession{
  font-size: 14px;
  color: #2eca7f;
  line-height: 14px;
  font-weight: 400;
}

.profile-social a{
  transition: color 0.3s ease 0s;
  margin: 0 6px;
  font-size: 16px;
}

.profile-social a:hover{
  text-decoration: none;
  color: #2eca7f;
}

.profile-buttons{
  position: relative;
  display: flex;
  margin-top: 58px;
}
.profile-buttons::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

.profile-buttons a{
  position: relative;
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  line-height: 70px;
  font-size: 12px;
  font-weight: 500;
  color: #171717;
}



.profile-buttons a:hover{
  color: #2eca7f;
}

.profile-buttons a:first-child::before, .profile-buttons a:first-child::after{
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

.profile-buttons a i{
  margin-left: 10px;
  font-size: 15px;
}

.about-aboutMe > div{
  padding: 5px 17px;
  position: relative;

}

.about-aboutMe > div > div{
  display: flex;
  flex-wrap: wrap;
}

.about-aboutMe > div > div > div{
  width: 50%;
  text-align: left;
}

.about-aboutMe > div > div > div span{
  font-weight: 500;
  font-size: 13px;
}


.about-aboutMe p{
  text-align: left;
}

.about-services{
  margin-top: 50px;
}

.about-services >div{
 display: flex;
 flex-wrap: wrap;
 position: relative;
}
.about-services >div:after{
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
}

.about-services article{
  position: relative;
  width: 50%;
  text-align: left;
  padding: 15px 20px;
  box-sizing: border-box;
}

.about-services article .fas{
  margin: 0;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 32px;
  color: #2eca7f;
  background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-services article h4{
  font-size: 13px;
  color: #171717;
  font-weight: 500;
  text-transform: uppercase;
}

.about-services article p{
  font-size: 14px;
  line-height: 1.6;
  padding: 0;
}

.resume-lines{
  display: flex;
}

.resume-line h4{
  margin: 0;
  text-align: left;
  padding: 20px 18px;
  font-size: 13px;
  line-height: 13px;
  color: #171717;
  font-weight: 500;
  text-transform: uppercase;
}

.resume-line h4 .fas{
  position: relative;
  float: left;
  top:-7px;
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: #2eca7f;
}

.resume-line{
  flex: 1;
  text-align: left;
}

.resume-line article{
  padding: 15px 15px;
}

.resume-line .date{
  margin: 0 0 10px 0;
  padding: 0;
  position: relative;
  display: inline-block;
  font-size: 11px;
  line-height: 18px;
  color: #d8dbe2;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
}


.resume-line .date::before{    
  content: '';
  position: absolute;
  left: -19px;
  top: 4px;
  width: 9px;
  height: 9px;
  background: #d8dbe2;
  border-radius: 9px;
  -moz-border-radius: 9px;
  -webkit-border-radius: 9px;
  -khtml-border-radius: 9px;
}

.resume-line .date.active{
  color: #2eca7f;
}

.resume-line .date.active::before{
  background: #2eca7f;
}

.resume-line .name{
  margin: 0;
  font-size: 13px;
  color: #171717;
  font-weight: 500;
  text-transform: uppercase;
}

.resume-line .company{
  margin: 0 0 10px 0;
  font-size: 11px;
  color: #999999;
  font-weight: 300;
  text-transform: uppercase;
}

.resume-skills{
  margin-top: 50px;
}
.resume-skills > div{
  display: flex;
}
.resume-skills > div section{
  flex: 1;
  text-align: left;
}

.resume-skills > div section > div{
  padding: 18px 20px;
}

.resume-skills > div section > div > div:first-child{
  margin: 0 0 8px 0;
  font-size: 14px;
  line-height: 14px;
  color: #626262;
  text-align: left;
}

.resume-skills > div section > div > div:last-child{
  width: 100%;
  background: #d8dbe2;
  height: 4px;
}

.resume-skills > div section > div > div > div{
  background: #2eca7f;
  height: 4px;
}

.resume-skills h4{
  margin: 0;
  text-align: left;
  padding: 20px 18px;
  font-size: 13px;
  line-height: 13px;
  color: #171717;
  font-weight: 500;
  text-transform: uppercase;
}

.resume-skills h4 .fas{
  position: relative;
  float: left;
  top:-7px;
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: #2eca7f;
}


main .contact{
  margin-bottom: 40px;
}

.contact-information{
  display: flex;
  flex-wrap: wrap;
  padding: 11px 18px;
}

.contact-information > div{
  width: 50%;
  text-align: left;
}

.contact-information > div span{
  font-weight: 500;
  font-size: 13px;
}


@media only screen and (min-width: 540px){
  header{
      left: calc(50% - 270px);
  }
}

@media only screen and (min-width: 1040px) {
  .selected{
      color: #2eca7f;
  }
  .page{
      position: absolute;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  header{
      max-width: 80px;
      position: relative;
      border-radius: 5px;
      left: -6px;
  }
  header nav{
      display: flex;
      flex-direction: column;
  }
  header nav a::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
  }

  main{
      display: flex;
      margin: 0;
      width: 1020px;
  }

  main .about, main .resume, main .contact {
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
      position: relative;
      top: 16px;
      transform: translateX(-450px);
      transition: opacity 1s ease, transform 1s ease;
      z-index: 0;
      margin: 0;
      padding: 0;
  }

  main .profile{
      width: 480px;
      height: 600px;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
      margin: 0;
  }

  main .view{
      height: 574px;
      width: 540px;
      padding: 30px 20px 30px 20px;
      overflow: auto;
      opacity: 1;
      transform: translateX(-8px);
  }

  main .view::-webkit-scrollbar {
      width: 5px;
  }
     
  main .view::-webkit-scrollbar-track {
      background: #ddd;
  }
     
  main .view::-webkit-scrollbar-thumb {
      background: #666; 
  }

  main .contact {
      margin-bottom: 0;
  }
}