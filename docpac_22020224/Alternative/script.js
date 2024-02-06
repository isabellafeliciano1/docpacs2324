        //link to server.js
        // var socket = io.connect('http://localhost:3000');
        //listen for the message
        // import { io } from "../socket.io-client";
        
        const socket = io("http://localhost:3000");


        var BACKSTYLE = document.body.style;

        document.getElementById("search").style.display = "none";

        BACKSTYLE.backgroundColor = "";

        document.getElementById("submit").addEventListener("click", function() {
            socket.emit("newPlayer", document.getElementById("name").value);
            document.getElementById("name").style.display = "none";
            document.getElementById("submit").style.display = "none";
            document.getElementById("search").style.display = "block";
            socket.on("enough", () => {
                document.getElementById("search").style.display = "none";
                BACKSTYLE.backgroundColor = "red";
                if (BACKSTYLE.backgroundColor === "red") {
                    let changeColor = () => {
                            BACKSTYLE.backgroundColor = "green";
                            return;
                        }
                        setTimeout(changeColor, (Math.random() * 6000) + 4000);
                    }
                });
            })
            document.body.addEventListener("click", function() {
                if (BACKSTYLE.backgroundColor === "green") {
                    BACKSTYLE.backgroundColor = "";
                }
            });
        