#include "game.h"
#include "button.h"
#include "script.h"
#include "easing.h"

int main() {
    std::cout <<"\nRetaining's memory - Version 2.1\n"<<
                "\n (c) The KageScan community - Under the MIT/X11 license,please read COPYRIGHT file"<<
                "\n\n"<<std::flush;
    std::array<unsigned int, 3> screenOptions = {0,60,0};
    const int scrw = 1280, scrh = 720;
    sf::RenderWindow scr(sf::VideoMode(scrw,scrh), "Retaining's memory V2.1", (screenOptions[0]==1) ? sf::Style::Fullscreen : sf::Style::Default);//,sf::Style::Fullscreen
    scr.clear(sf::Color::White);
    scr.display();
    scr.setFramerateLimit(screenOptions[1]);
    scr.setMouseCursorVisible( screenOptions[2]!=0 );
    //LOADING GRAPHICS
        sf::Font bloody,animeace;
          if(!bloody.loadFromFile("resources/fonts/bloody.ttf")) return error("error loading bloody.ttf");
          if(!animeace.loadFromFile("resources/fonts/animeacefr.ttf")) return error("error loading animeacefr.ttf");

        sf::Texture imgmenubg, logotxt, imgmenubgMore;
        sf::Sprite menubg, menubgMore, logo;
          if (!imgmenubg.loadFromFile("resources/img/background/menu2.jpg")) return error("error loading menu2.jpg");
            imgmenubg.setSmooth(true);
            menubg.setTexture(imgmenubg);
          if (!imgmenubgMore.loadFromFile("resources/img/menu.png")) return error("error loading menu.jpg");
            menubgMore.setTexture(imgmenubgMore);
            menubg.setOrigin(scrw/2,scrh/2);
            menubg.setPosition(scrw/2,scrh/2);
          if (!logotxt.loadFromFile("resources/img/background/logo.png")) return error("error loading logo.png");
            logotxt.setSmooth(true);
            logo.setTexture(logotxt);
            logo.setScale(0.5,0.5);
            logo.setPosition(scrw-10-logotxt.getSize().x/2,7);
          menubgMore.setColor(sf::Color(0,0,0,0));

          sf::Music inadaze;
            if (!inadaze.openFromFile("resources/sounds/ostdaze.ogg")) return error("unable to load ostdaze.ogg");

    //intro(scr,scrw,scrh,animeace);
    inadaze.play();inadaze.setLoop(true);

    sf::Clock clock;
    sf::Time animStart=clock.getElapsedTime();
    bool optionInTrans = false, optionOutTrans = false;
    float iter(0);
    guiSelect menu, options;
    menu.displaying = true;
    menu.choices = {"Jouer", "Options", "Quitter"};
    menu.type(false);
    menu.position(sf::Vector2f(50,75));
    options.position(sf::Vector2f(scrw/2 - 385,20));
    options.choices = { "Plein Écran : ", "FPS (recommandé : 60) : ", "Afficher le curseur : ", "Retour" };
    options.choices[0] += (screenOptions[0]==1) ? "OUI" : "NON";
    options.choices[1] += std::to_string(screenOptions[1]);
    options.choices[2] += (screenOptions[2]==1) ? "OUI" : "NON";
    //options.choices[0] += (screenOptions[0]==1) ? "OUI" : "NON";
    /*TileMap map;
    map.load("resources/img/tilesets/school.png",sf::Vector2u(32,32),18,3);*/
    //bool testspace(false);
    //LOOP
    while (scr.isOpen()) {
      sf::Event event;
      while (scr.pollEvent(event)) {switch (event.type){
        case sf::Event::Closed: scr.close(); break;
        case sf::Event::KeyReleased :
          if (event.key.code == sf::Keyboard::Return) {
            if (menu.displaying) { // Main Menu
              switch (menu.enter()){
              case 0: {
                inadaze.stop();
                Script engine("resources/scripts/script.txt");
                engine.read(scr);
                inadaze.play();
                menu.displaying = true;
                break; }
              case 1: 
                optionInTrans = !optionInTrans;
                iter = 0;
                animStart=clock.getElapsedTime();
                options.displaying = true;
                break;
              case 2: scr.close(); break;
              default: break;
              }
            } else if (options.displaying) { // Settings
              switch (options.enter()){
              case 0:
                screenOptions[0] = (screenOptions[0]==1) ? 0 : 1;
                options.choices[0] = "Plein Écran : "; options.choices[0] += (screenOptions[0]==1) ? "OUI" : "NON";
                scr.create(sf::VideoMode(scrw,scrh), "Retaining's memory V2.1", (screenOptions[0]==1) ? sf::Style::Fullscreen : sf::Style::Default);
                break;
              case 1: {
                switch (screenOptions[1]) {
                  case 30: screenOptions[1] = 60; break;
                  case 60: screenOptions[1] = 120;break;
                  case 120:screenOptions[1] = 30; break;
                  default: screenOptions[1] = 60;break; }
                options.choices[1] = "FPS (recommandé : 60) : "; options.choices[1] += std::to_string(screenOptions[1]);
                break; }
              case 2: 
                screenOptions[2] = (screenOptions[2]==1) ? 0 : 1;
                options.choices[2] = "Afficher le curseur : "; options.choices[2] += (screenOptions[2]==1) ? "OUI" : "NON";
                break;
              case 3: 
                menu.displaying = optionOutTrans = true;
                optionInTrans = false;
                animStart = clock.getElapsedTime();
                continue; break;
              default: break;
              }
              scr.setFramerateLimit(screenOptions[1]);
              scr.setMouseCursorVisible( screenOptions[2]!=0 );
              options.displaying = true;
            }
          } else if (event.key.code == sf::Keyboard::Up) {
            if (menu.displaying) menu.change(true);
            else if (options.displaying) options.change(true);
          } else if (event.key.code == sf::Keyboard::Down) {
            if (menu.displaying) menu.change(false);
            else if (options.displaying) options.change(false);
          }
          break;
        default:break;
      }}
      scr.clear(sf::Color::White);
      if (optionInTrans || optionOutTrans){
        int getms = clock.getElapsedTime().asMilliseconds() - animStart.asMilliseconds();
        int alpha = easeOutExpo(
                  getms>1500 ? 1500:getms,//elapsed time or max value
                  (optionInTrans) ? 0 : 255, //start value
                  (optionInTrans) ? 255 : -255, //adds 255
                  1500 //duration of the animation
              );
        menubgMore.setColor(sf::Color(255,255,255,alpha));
        iter = alpha*0.001;
        menubg.setScale(1+iter,1+iter);
        if (getms>1500) optionInTrans = optionOutTrans = false;
      }
      scr.draw(menubg);
      scr.draw(logo);
      scr.draw(menubgMore);
      if (menu.displaying) menu.draw(scr);
      if (options.displaying) options.draw(scr);
      //if (testspace) scr.draw(map);
      scr.display();
    }

    return 0;
}

