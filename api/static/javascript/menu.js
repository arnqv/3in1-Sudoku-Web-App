// global variable (boolean) that indicates if the instructions/about us message should be opened or closed
var showMessages = true;

// global variable (Element) that represents the highest HTML element in the document tree
var root = document.documentElement;

// set the time in cache back to 0
window.localStorage.setItem("time", 0);


document.onreadystatechange = function () {
    /**
    * Alter the class of the body once the window has finished loading
    */
    if (document.readyState === "complete") {
        document.getElementById("body").className = "all-loaded";
    }
}

/**
 * Changes the inner HTML of the "Play a Sudoku" div to display the two options the user can select from
 */
function playOption() {
    document.getElementById("playcontainer").innerHTML = `
    <button class="playbutton" onclick="chooseOption()">Choose a Sudoku</button>
    <button class="playbutton" onclick="location.href='/input_play'">Input a Sudoku</button>
    `;
}

/**
 * Changes the inner HTML of the "Choose a Sudoku" div to display the four options the user can select from
 */
function chooseOption() {
    document.getElementById("playcontainer").innerHTML = `
    <form action="/play" method="POST">
    <button id="easy" name="easy" value="easy" type="submit" class="difficultybutton">Easy</button>
    <button id="medium" name="medium" value="medium" type="submit" class="difficultybutton">Medium</button>
    <button id="hard" name="hard" value="hard" type="submit" class="difficultybutton">Hard</button>
    <button id="expert" name="expert" value="expert" type="submit" class="difficultybutton">Expert</button>
    </form>
    `;
}

/**
 * Changes the inner HTML of the "Change Theme" div to display the theme options the user can select from
 */
function themeOption() {
    document.getElementById("changetheme").innerHTML = `
    <div id="themescontainer">
    <div class="themes" id="cybergreen" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="white" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="light" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    <div class="themes" id="retro" onclick="window.localStorage.setItem('storedTheme', this.id); changeTheme(); revertChangeTheme()"></div>
    </div>
    `;
}

/**
 * If a theme has been selected, reverts the "Change Theme" div back to its original HTML
 */
function revertChangeTheme() {
    document.getElementById("changetheme").innerHTML = `
    <div onclick="themeOption()">Change Theme</div>`;
}

/**
 * Changes theme based on user specified selection
 */
function changeTheme() {

    // create a local variable "themeid" that stores which theme to set
    var themeid;

    // if there is no theme stored in cache yet, set the default to the "white" theme
    if (window.localStorage.getItem("storedTheme") == null) {
        themeid = "white";
    }

    // else set the theme to the stored theme
    else {
        themeid = window.localStorage.getItem("storedTheme");
    }

    // if the desired theme change is "white", change CSS variables to the corresponding color palette
    if (themeid == "white") {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "#f6f0e8");
        root.style.setProperty('--itemBackground', "#c5c5c5");
        root.style.setProperty('--textColor', "#0a0a0a");
        root.style.setProperty('--readOnlyColor', "#0a0a0a");
        root.style.setProperty('--tableColor', "#f6f0e8");
        root.style.setProperty('--headerColor', "#0a0a0a");
        root.style.setProperty('--tableItemBackground', "#808080");
        root.style.setProperty('--buttonBackground', "#808080");
        root.style.setProperty('--buttonText', "#0a0a0a");
        root.style.setProperty('--shiftColor', "#0a0a0a");
        root.style.setProperty('--messageTextColor', "#0a0a0a");
        root.style.setProperty('--focusText', "#808080");
        root.style.setProperty('--highlightOpacity', "brightness(90%)");
        root.style.setProperty('--shiftIndication', "#0a0a0a");
        root.style.setProperty('--linkColor', "#4f4f4f");

        // change table colors
        root.style.setProperty('--color1', "#0a0a0a");
        root.style.setProperty('--color2', "#0a0a0a");
        root.style.setProperty('--color3', "#0a0a0a");
        root.style.setProperty('--color4', "#0a0a0a");
        root.style.setProperty('--color5', root.style.getPropertyValue('--itemBackground'));
        root.style.setProperty('--color6', "#0a0a0a");
        root.style.setProperty('--color7', "#0a0a0a");
        root.style.setProperty('--color8', "lightsteelblue");
        root.style.setProperty('--color9', "#FF99CC");

        // change play and solve images to the "white" version
        document.getElementById("playimage").style.backgroundImage = "url(/static/css/images/tan_play.png)";
        document.getElementById("solveimage").style.backgroundImage = "url(/static/css/images/tan_solve.png)";

        // store the theme "white" in local cache
        window.localStorage.setItem("storedTheme", "white");
    }

    // else if the desired theme change is "cybergreen", change CSS variables to the corresponding color palette
    else if (themeid == "cybergreen") {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "#0a0a0a");
        root.style.setProperty('--itemBackground', "#c5c5c5");
        root.style.setProperty('--textColor', "#04f700");
        root.style.setProperty('--readOnlyColor', "#000000");
        root.style.setProperty('--tableColor', "#04f700");
        root.style.setProperty('--headerColor', "#04f700");
        root.style.setProperty('--tableItemBackground', "#a1c4db");
        root.style.setProperty('--buttonBackground', "#4f4f4f");
        root.style.setProperty('--buttonText', "#04f700");
        root.style.setProperty('--shiftColor', "#6f818a");
        root.style.setProperty('--messageTextColor', "#bbe1fa");
        root.style.setProperty('--focusText', "#226897");
        root.style.setProperty('--highlightOpacity', "brightness(75%)");
        root.style.setProperty('--shiftIndication', "#bbe1fa");
        root.style.setProperty('--linkColor', "orange");

        // change table colors
        root.style.setProperty('--color1', "#990000");
        root.style.setProperty('--color2', "#1e5301");
        root.style.setProperty('--color3', "#009900");
        root.style.setProperty('--color4', "#009999");
        root.style.setProperty('--color5', root.style.getPropertyValue('--itemBackground'));
        root.style.setProperty('--color6', "darkslategrey");
        root.style.setProperty('--color7', "mediumpurple");
        root.style.setProperty('--color8', "#999900");
        root.style.setProperty('--color9', "#CC0066");

        // change play and solve images to the "dark" version
        document.getElementById("playimage").style.backgroundImage = "url(/static/css/images/dark_play.png)";
        document.getElementById("solveimage").style.backgroundImage = "url(/static/css/images/dark_solve.png)";

        // store the theme "dark" in local cache
        window.localStorage.setItem("storedTheme", "cybergreen");
    }

    // else if the desired theme change is "retro", change CSS variables to the corresponding color palette
    else if (themeid == "retro") {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "#111f4d");
        root.style.setProperty('--itemBackground', "#F3ECE7");
        root.style.setProperty('--textColor', "#e43a19");
        root.style.setProperty('--readOnlyColor', "#020205");
        root.style.setProperty('--tableColor', "#e43a19");
        root.style.setProperty('--headerColor', "#e43a19");
        root.style.setProperty('--tableItemBackground', "#f2f4f7");
        root.style.setProperty('--buttonBackground', "#e43a19");
        root.style.setProperty('--buttonText', "#020205");
        root.style.setProperty('--shiftColor', "#fce17a");
        root.style.setProperty('--messageTextColor', "#f6f0e8");
        root.style.setProperty('--focusText', "#F3ECE7");
        root.style.setProperty('--highlightOpacity', "brightness(75%)");
        root.style.setProperty('--shiftIndication', "#e43a19");
        root.style.setProperty('--linkColor', "#e43a19");

        // change table colors
        root.style.setProperty('--color1', "#FFCCCC");
        root.style.setProperty('--color2', "lightsalmon");
        root.style.setProperty('--color3', "#99FF99");
        root.style.setProperty('--color4', "#99FFFF");
        root.style.setProperty('--color5', root.style.getPropertyValue('--itemBackground'));
        root.style.setProperty('--color6', "#99CCFF");
        root.style.setProperty('--color7', "#CC99FF");
        root.style.setProperty('--color8', "lightsteelblue");
        root.style.setProperty('--color9', "#FF99CC");

        // change play and solve images to the "retro" version
        document.getElementById("playimage").style.backgroundImage = "url(/static/css/images/retro_play.png)";
        document.getElementById("solveimage").style.backgroundImage = "url(/static/css/images/retro_solve.png)";

        // store the theme "retro" in local cache
        window.localStorage.setItem("storedTheme", "retro");
    }

    // else the desired theme change is "light", change CSS variables to the corresponding color palette
    else {

        // change document CSS colors
        root.style.setProperty('--primaryColor', "#add2c9");
        root.style.setProperty('--itemBackground', "#f1ebeb");
        root.style.setProperty('--textColor', "#5ea3a3");
        root.style.setProperty('--readOnlyColor', "#28595c");
        root.style.setProperty('--tableColor', "#28595c");
        root.style.setProperty('--headerColor', "#28595c");
        root.style.setProperty('--tableItemBackground', "#62a7a1");
        root.style.setProperty('--buttonBackground', "#4db492");
        root.style.setProperty('--buttonText', "#d2fff0");
        root.style.setProperty('--shiftColor', "#fce17a");
        root.style.setProperty('--messageTextColor', "#1b4857");
        root.style.setProperty('--focusText', "#28595c");
        root.style.setProperty('--highlightOpacity', "brightness(90%)");
        root.style.setProperty('--shiftIndication', "#28595c");
        root.style.setProperty('--linkColor', "#b266ff");

        // change table colors
        root.style.setProperty('--color1', "#FF9999");
        root.style.setProperty('--color2', "lightsalmon");
        root.style.setProperty('--color3', "#99FF99");
        root.style.setProperty('--color4', "#99FFFF");
        root.style.setProperty('--color5', root.style.getPropertyValue('--itemBackground'));
        root.style.setProperty('--color6', "#99CCFF");
        root.style.setProperty('--color7', "#CC99FF");
        root.style.setProperty('--color8', "lightsteelblue");
        root.style.setProperty('--color9', "#FF99CC");
        
        // change play and solve images to the "light" version
        document.getElementById("playimage").style.backgroundImage = "url(/static/css/images/light_play.png)";
        document.getElementById("solveimage").style.backgroundImage = "url(/static/css/images/light_solve.png)";

        // store the theme "light" in local cache
        window.localStorage.setItem("storedTheme", "light");
    }
}

/**
 * Displays "Instructions" and "About Us" messages
 */
function messagesDisplay() {

    // if "showMessages" is true
    if (showMessages) {

        // hide the play and solve images
        document.getElementById("playimage").style.display = "none";
        document.getElementById("solveimage").style.display = "none";

        // display the "instructions" and "about us" divs
        document.getElementById("menuinstructionsdisplay").style.display = "block";
        document.getElementById("menuaboutdisplay").style.display = "block";

        // change the inner HTML to show a close option
        document.getElementById("messages").innerHTML = "Close Instructions<br>and About Us";

        // set "showMessages" to false
        showMessages = false;
    }

    // else "showMessages" is false
    else {

        // hide the "instructions" and "about us" divs
        document.getElementById("menuinstructionsdisplay").style.display = "none";
        document.getElementById("menuaboutdisplay").style.display = "none";

        // display the play and solve images
        document.getElementById("playimage").style.display = "block";
        document.getElementById("solveimage").style.display = "block";

        // change the inner HTML to show an open option
        document.getElementById("messages").innerHTML = "Instructions<br>and About Us";

        // set "showMessages" to true
        showMessages = true;
    }
}