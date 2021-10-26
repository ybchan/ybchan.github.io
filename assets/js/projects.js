$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/insightproject.png',
            link: 'https://github.com/ybchan/Insight-2019C',
            title: 'Sugar Fairy',
            demo: 'https://www.youtube.com/watch?v=TNoblZZ64sk',
            technologies: ['Python', 'Dash', 'CNN'],
            description: "A Dash-based web app that used computer vision AI to identify candy to warn users for any potential food allergens.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/tictactoe.png',
            link: 'https://github.com/ybchan/tictactoe',
            title: 'TicTacToe',
            demo: false,
            technologies: ['Python', 'Pygame'],
            description: "Play a TicTacToe game with computer AI to see who can win",
            categories: ['featured']
        },
        {
            image: 'assets/images/school.png',
            link: 'assets/html/school.html',
            title: 'Massachusetts public school performance',
            demo: false,
            technologies: ['R'],
            description: "Wonder what kinds of public school have the best SAT and graduation rate? Do race, gender, class size affect student performance?",
            categories: ['feature', 'webdev']
        },
        {
            image: 'assets/images/kaggle.png',
            link: 'https://github.com/ybchan/Disease-prediction',
            title: 'Disease predictor',
            demo: false,
            technologies: ['Python', 'ML'],
            description: "Build machine learning model to anlayze biosensor data and predict onset of disease",
            categories: ['feature', 'webdev']
        },
        {
            image: 'assets/images/CNN.png',
            link: 'https://github.com/ybchan/brain_region',
            title: 'Mapping of brain regions to behavior using CNN',
            demo: false,
            technologies: ['Python', 'Keras', 'CNN'],
            description: "Used Gradient Weighted Class Activation Mapping to identify brain regions related to aggressive behavior",
            categories: ['webdev', 'native']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://github.com/abhn/S3Scan',
            title: 'S3Scan',
            demo: false,
            technologies: ['python'],
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['native', 'security']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}