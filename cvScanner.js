const data = [
    {
        name: "William Roy",
        age: 28,
        langauge: "JavaScript",
        framework: "React",
        image:  `https://randomuser.me/api/portraits/men/34.jpg`
    },
    {
        name: "Mathew Jhonson",
        age: 31,
        langauge: "JavaScript",
        framework: "NodeJS",
        image:  `https://randomuser.me/api/portraits/men/35.jpg`
    },
    {
        name: "Glean Maxwell",
        age: 32,
        langauge: "Python",
        framework: "Django",
        image:  `https://randomuser.me/api/portraits/men/36.jpg`
    },
    {
        name: "Camila Cabello",
        age: 28,
        langauge: "Python",
        framework: "Django",
        image:  `https://randomuser.me/api/portraits/women/34.jpg`
    },
    {
        name: "Talor Swift",
        age: 27,
        langauge: "Java",
        framework: "Java Framework",
        image:  `https://randomuser.me/api/portraits/women/35.jpg`
    },
]

function cvIterator(profile){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profile.length ?
            {value: profile[nextIndex++], done: false} : {done: true}
        }
    };
}
const candidate = cvIterator(data);

nextCV();

let next = document.getElementById("next");
next.addEventListener('click', nextCV);

function nextCV(){
    const currentCandidate = candidate.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                        <li class="list-group-item"> Name: ${currentCandidate.name} </li>
                        <li class="list-group-item"> Age: ${currentCandidate.age} </li>
                        <li class="list-group-item"> Programming: ${currentCandidate.langauge} </li>
                        <li class="list-group-item"> Framework: ${currentCandidate.framework} </li>
                        </ul>`;
    }else{
        alert('End of Candidate Applications');
        window.location.reload();
    }
}
