document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
 
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const bio = document.getElementById('bio').value;

    
    addProfile({ name, course, skills, bio });

    
    event.target.reset();
});

const profilesContainer = document.getElementById('profilesContainer');

function addProfile(profile) {
    const card = document.createElement('div');
    card.classList.add('profile-card');

    card.innerHTML = `
        <h2>${profile.name}</h2>
        <p><strong>Course:</strong> ${profile.course}</p>
        <p><strong>Skills:</strong> ${profile.skills.join(', ')}</p>
        <p>${profile.bio}</p>
        <div class="card-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    card.querySelector('.edit-btn').addEventListener('click', () => editProfile(profile, card));

    
    card.querySelector('.delete-btn').addEventListener('click', () => card.remove());

    profilesContainer.appendChild(card);
}


function editProfile(profile, card) {
    document.getElementById('name').value = profile.name;
    document.getElementById('course').value = profile.course;
    document.getElementById('skills').value = profile.skills.join(', ');
    document.getElementById('bio').value = profile.bio;


    card.remove();
}
