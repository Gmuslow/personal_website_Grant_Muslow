function TextAppear(section)
{
    parent = document.getElementById(section);
    child = document.createElement("p");
    dict = {
        Projects : "Holaaaaaaaa",
        Skillset : `<p>I have experience writing in the following programming languages:</p>
        <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>Linux</li>
            <li>C</li>
            <li>C#</li>
            <li>Assembly x86</li>
            <li>Swift</li>
            <li>Verilog</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>MatLab</li>
        </ul>
        <p><br>On the computer engineering side of things, I have experience
            designing circuit boards and drawing out logic diagrams of sequential 
            and combinational circuits.
        </p> `,
        About : `<p>Hi! I am a computer science and computer engineer at Louisiana State University. My hobbies include
        tennis, piano, and chess.
   </p>`,
        Education : `<div id="eduAndCert">
        <p>Louisiana State University Baton Rouge</p>
        <p>Class of 2024</p>
        <p>Bachelors of Science in Computer Science</p>
        <p>Bachelors of Science in Computer Engineering</p>
        <p>Minor in General Business</p>
        <br>
        <p>Google IT Certificate</p>
        <p>Eagle Scout</p>
    </div>`
    };
    child.innerHTML = dict[section];
    parent.appendChild(child);
}
var sectionsOpen = {
    Projects : false,
    Education : false,
    About : false,
    Skillset : false
};
function toggleText(section)
{
    sectionOpen = sectionsOpen[section];
    if (sectionOpen)
    {
        closeSection(section);
        sectionsOpen[section] = false;
    }
    else
    {
        TextAppear(section);
        sectionsOpen[section] = true;
    }
}
function closeSection(section)
{
    child = document.getElementById(section).lastChild;
    document.getElementById(section).removeChild(child);
}

document.getElementById("Projects").onclick = function () {toggleText("Projects")};
document.getElementById("Skillset").onclick = function () {toggleText("Skillset")};
document.getElementById("Education").onclick = function () {toggleText("Education")};
document.getElementById("About").onclick = function () {toggleText("About")};