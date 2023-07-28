function setTime(){
        const codes = [
                {
                        pin: "0305",
                        location: "subpages/work.html"
                }
        ]

        //Enter in a encoded subpages using ui code for the time to redirect to a subpage

        const setButton = document.getElementById("set");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes")

        setButton.addEventListener("click", function(){
             const hrs = hours.value;
             const mins = minutes.value;
             const code = `${hrs}${mins}`;
             const hasCode = checkCode(code, codes);
             if (hasCode.length > 0 && hasCode[0] !== undefined){
                window.open(hasCode[0].location, '_self')
             }
        })


}


function checkCode(code, codes){
        return codes.map(item => {
                if (code === item.pin) {
                        return item
                }
        })
}




window.onload = function(){
        setTime();
}