
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button1");

    btn.onclick = function() {
        function randNum() {
            return randomNum = Math.floor(Math.random() * 83) };
        pageNum = randNum();
        
        fetch(`https://swapi.info/api/people/${pageNum}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const name1 = data.name;
            const nameElement = document.getElementById("name");
            nameElement.textContent = name1;

            
            fetch(data.homeworld)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const homeworld1 = data.name;
                const homeworldElement = document.getElementById("planet");
                homeworldElement.textContent = homeworld1;
            })


            const itemToRemove = document.querySelectorAll("li");
            if (itemToRemove) {
                itemToRemove.forEach(item => item.remove()); }
            if (data.films.length > 0) {
                for (let i = 0; i < data.films.length; i++) {
                    fetch(data.films[i])
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const film1 = data.title;
                        const filmElement = document.getElementById("movies");
                        const filmListItem = document.createElement("li");
                        filmListItem.textContent = film1;
                        filmElement.appendChild(filmListItem);
                    })
            }
    }})      
    };
});





