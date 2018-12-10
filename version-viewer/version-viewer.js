//
// version-viewer.js
//
// ChemDraw JavaScript API example
//
// Copyright (c) 2017 PerkinElmer, Inc. All rights reserved.
 
function onClickShowAPIVersion()
{
    var messageBox = document.getElementById("messageBox");
 
    try
    {
        messageBox.innerHTML += 'Using ChemDraw JavaScript API ' + ChemDrawAPI.version + "<br/>";
    }
    catch (err)
    {
        messageBox.innerHTML += err.message;
    }
}