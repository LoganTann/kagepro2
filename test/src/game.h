#ifndef GAME_H
#define GAME_H
#include <SFML/Graphics.hpp>
#include <SFML/System.hpp>
#include <SFML/Window.hpp>
#include <SFML/Audio.hpp>
#include <SFML/Network.hpp>
#include <iostream>
#include "button.h"
#include "easing.h"


int error(std::string type);
int intro(sf::RenderWindow &scr,int scrw,int scrh,sf::Font&font); //function only for the game,don't touch :)
sf::String toSfString(std::string theStdString);

bool fadeout(sf::RenderWindow &scr,int scrw=1280,int scrh=720,int time=0); //should not exist. Ahhhh my eyes *A* it is a horrible code !!
bool fadein(sf::RenderWindow &scr,sf::Sprite &texture,int time=0);
#endif
