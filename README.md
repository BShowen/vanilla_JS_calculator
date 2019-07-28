# Vanilla JS Calculator 

I have created a calculator that performs basic operations while following the order of operations. The code used in this project is vanilla Javascript along with basic HTML and CSS. Some of my biggest struggles with this application was using Regular Expressions to check for multiple periods in a number and to check for leading zeros in a number. For example I don't want to allow users to input '5.9.9 + 2' which would lead to an error. I also wanted to make it pretty by not allowing something like this '000000009 + 1 = 10' I have used regular expressions to check for multiple leading zeros and remove them, except for when there is an occurance of a period. For example '0000.9' will autmatically be formatted to '0.9' 

If you would like to learn how to create something like this I highly reccomend that you go to [The_Odin_Project's](https://www.theodinproject.com/) website and follow along their curriculum. 

You can also view this project live [here](https://bshowen.github.io/vanilla_JS_calculator/) where I designed it to look very similar to [Google's](https://www.google.com/search?client=firefox-b-1-ab&q=google+calculator) calculator. 

Thanks for checking this out! 
